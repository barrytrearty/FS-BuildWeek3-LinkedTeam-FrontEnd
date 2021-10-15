import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Image,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";
import "./MidSection.css";
import { BiPhotoAlbum } from "react-icons/bi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { MdEvent } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";

const MidSectionUpper = ({
  setAddPostClosed,
  setAddImagePostClosed,
  userId,
}) => {
  const [MyImage, setMyImage] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [imageFile, setimageFile] = useState();
  const [imagePreview, setimagePreview] = useState();
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setimageFile();
    setimageUploaded(false);
    // setAddImagePostClosed(true);
  };
  const handleShowImageModal = () => {
    setShowImageModal(true);
    // setAddImagePostClosed(false);
  };

  const handleClosePostModal = () => {
    setAddImagePostClosed(true);
    setShowPostModal(false);
    setShowImageModal(false);
    setimageFile();
    setimageUploaded(false);
  };
  const handleShowPostModal = () => {
    setShowImageModal(false);
    setShowPostModal(true);
    setAddImagePostClosed(false);
  };

  const imageUpload = (e) => {
    if (e.target.files.length == 0) {
      console.log("No image selected!");
    } else {
      setimageFile(e.target.files[0]);
      let imagepreview = URL.createObjectURL(e.target.files[0]);
      setimagePreview(imagepreview);
      setimageUploaded(true);
    }
  };

  const getMyProfile = async () => {
    try {
      console.log(userId.userId);
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId.userId}`,
        {
          method: "GET",
        }
      );
      let myProfile = await response.json();
      setMyImage(myProfile.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getMyProfile(), []);

  const endpoint = "https://linkedinteam.herokuapp.com/posts/";

  const createPost = async () => {
    try {
      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          text: postContent,
          user: userId.userId,
          username: "James",
          image: "url",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(response.json());
      } else {
        alert("Error! Please complete the form fool!");
      }
    } catch (error) {
      alert(error);
    }
  };
  const fetchNewestPostID = async () => {
    try {
      let response = await fetch(`https://linkedinteam.herokuapp.com/posts/`);
      let PostArray = await response.json();
      let lastpost = PostArray[PostArray.length - 1];
      return lastpost._id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    await createPost();
    let id = await fetchNewestPostID();
    console.log(id);
    await postImage(id);
  };

  const postImage = async (id) => {
    const formData = new FormData();
    formData.append("post-picture", imageFile);

    console.log(formData);
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/posts/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        handleClosePostModal();
        const reply = response.json();
        setIsLoading(false);
        console.log(reply);
      } else {
        alert("Error! Please complete the form sucka!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <br />

      {/* Upload Image Modal */}
      <Modal show={showImageModal} onHide={handleCloseImageModal}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Edit your photo </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 d-flex py-5">
          {imageUploaded ? (
            <Image src={imagePreview} fluid />
          ) : (
            <div className="m-auto imageuploadtext text-primary px-2 pt-1">
              <label for="file-upload" className="custom-file-upload">
                Select images to share
              </label>
              <input
                className="d-none"
                id="file-upload"
                type="file"
                onChange={(e) => imageUpload(e)}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="px-4" closeButton>
          <Button
            id="cancelmodalbutton"
            className="ml-3"
            variant="outline-primary"
            type="submit"
            onClick={handleCloseImageModal}
          >
            Cancel
          </Button>
          {imageUploaded ? (
            <Button
              className="ml-2"
              id="donemodalbutton"
              variant="primary"
              type="submit"
              onClick={handleShowPostModal}
            >
              Done
            </Button>
          ) : (
            <Button
              className="ml-2"
              id="donemodalbutton"
              variant="primary"
              type="submit"
              disabled={!imageUploaded}
            >
              Done
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Modal show={showPostModal} onHide={handleClosePostModal}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Create a post </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <Row className="d-flex flex-row align-items-top">
            <Col>
              <img src={MyImage} className="mr-5 userImage" />
              <Button className="AuthorButton">James Sutcliffe</Button>
              <Button className="AuthorButton">Anyone</Button>
            </Col>
            <Col xs={12} className="mt-4">
              <InputGroup className="postContent">
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="What do you want to talk about?"
                  className="postContent"
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </InputGroup>
            </Col>

            <Image src={imagePreview} fluid />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="spinnerrelative">
            {isLoading ? (
              <Spinner
                animation="border"
                variant="primary"
                role="status"
                className="imagespinner"
              ></Spinner>
            ) : (
              ""
            )}
            <Button id="savemodalbutton" type="button" onClick={handleSubmit}>
              Post
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Container fluid className="topmidmargin MidSectionContainer">
        <Row className="text-center SpaceBetween">
          <Col xs={1} className="text-left mt-3">
            <img src={MyImage} className="userImage" />
          </Col>
          <Col xs={11} className="mt-3">
            <AddPost
              MyImage={MyImage}
              setAddPostClosed={setAddPostClosed}
              userId={userId}
            />
          </Col>
        </Row>
        {/* <Row className="text-center SpaceBetween"> */}
        {/* <Col xs="auto" className="my-2"> */}
        <div className="d-flex justify-content-between mt-3 mb-2">
          <Button
            onClick={handleShowImageModal}
            variant="light"
            className="midbutton d-flex flex-row IconAndText"
          >
            <BiPhotoAlbum color="#4287f5" size="1.3rem" />
            <span>Photo</span>
          </Button>

          {/* </Col> */}
          {/* <Col xs="auto" className="my-2"> */}
          <Button
            variant="light"
            className="midbutton d-flex flex-row IconAndText"
            onClick
          >
            <AiOutlineVideoCamera color="green" size="1.4rem" />
            <span className="ml-3">Video</span>
          </Button>
          {/* </Col> */}
          {/* <Col xs="auto" className="my-2"> */}
          <Button
            variant="light"
            className="midbutton d-flex flex-row IconAndText"
            onClick
          >
            <MdEvent color="orange" size="1.4rem" />
            <span className="ml-3">Event</span>
          </Button>
          {/* </Col> */}
          {/* <Col xs="auto" className="my-2"> */}
          <Button
            variant="light"
            className="midbutton d-flex flex-row IconAndText"
            onClick
          >
            <RiArticleLine color="coral" size="1.2rem" />
            <span className="ml-1">Write Article</span>
          </Button>
          {/* </Col> */}
          {/* </Row> */}
        </div>
      </Container>
      {/* <hr /> */}
    </>
  );
};

export default MidSectionUpper;
