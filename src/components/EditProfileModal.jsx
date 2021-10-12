import React from "react";
import { Button, Modal, Image, Spinner } from "react-bootstrap";

import { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";

const userId = "6164117136d383058470339f";
const endpointprofile = `https://linkedinteam.herokuapp.com/users/${userId}`;

const EditProfileModal = ({ setclosed }) => {
  const [show, setShow] = useState(false);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [imageFile, setimageFile] = useState();
  const [imagePreview, setimagePreview] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setimageFile();
    setimageUploaded(false);
    getMyProfile();
    setclosed();
  };
  const handleShow = () => setShow(true);

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
      let response = await fetch(endpointprofile, {
        method: "GET",
        // headers: {
        //   Authorization:
        //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
        // },
      });
      let myProfile = await response.json();
      setimagePreview(myProfile.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getMyProfile(), []);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (imageFile.length !== 0) postImage();
  };

  const postImage = async () => {
    const formData = new FormData();
    formData.append("profile", imageFile);

    console.log(formData);
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId}/picture`,
        {
          method: "POST",
          body: formData,
          // headers: {
          //   Authorization:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          // },
        }
      );

      if (response.ok) {
        const reply = response.json();
        handleClose();
        setIsLoading(false);
        console.log(reply);
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <a onClick={handleShow} className="modallink ml-auto">
        <span id="editprofilediv">
          <FiEdit2 size={22} className="editprofileicon" />
        </span>
        <div id="editprofileonclick"></div>
      </a>
      ;{/* Upload Image Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Edit Profile Photo </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 d-flex py-4">
          {imageUploaded ? (
            <Image src={imagePreview} fluid />
          ) : (
            <div className="text-center m-auto">
              <div className="m-auto imageuploadtext text-primary px-2 pt-1">
                <label for="file-upload" className="custom-file-upload py-2">
                  Select image
                </label>

                <input
                  className="d-none"
                  id="file-upload"
                  type="file"
                  onChange={(e) => imageUpload(e)}
                />
              </div>
              <Image className="mt-3" src={imagePreview} fluid />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="px-4" closeButton>
          <Button
            id="cancelmodalbutton"
            className="ml-3 mr-2"
            variant="outline-primary"
            type="submit"
            onClick={handleClose}
          >
            Cancel
          </Button>
          {isLoading ? (
            <Spinner
              animation="border"
              variant="primary"
              role="status"
              show={isLoading}
            ></Spinner>
          ) : (
            ""
          )}
          {imageUploaded ? (
            <Button
              className="ml-2"
              id="donemodalbutton"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              className="ml-2"
              id="donemodalbutton"
              variant="primary"
              type="submit"
              disabled={!imageUploaded}
            >
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      {/* <hr /> */}
    </>
  );
};

export default EditProfileModal;
