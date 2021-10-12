import {
  Button,
  Modal,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useState } from "react";
import "./MidSection.css";
import { AiOutlineUser } from "react-icons/ai";
// import { useHistory } from "react-router-dom";

function AddPost({ MyImage, setAddPostClosed }) {
  // const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setAddPostClosed(true);
  };
  const handleShow = () => {
    setShow(true);
    setAddPostClosed(false);
  };

  const [postContent, setPostContent] = useState("");

  const endpoint = "https://linkedinteam.herokuapp.com/posts/";
  const createPost = async () => {
    try {
      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          text: postContent,
        }),
        headers: {
          "Content-Type": "application/json",
          // Authorization:
          //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
        },
      });

      if (response.ok) {
        const hello = response.json();

        // alert("Success!");
        // history.go(0);
        handleClose();
        return hello;
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Button
        variant="light"
        size="lg"
        block
        className="startPostButton"
        type="button"
        onClick={handleShow}
      >
        <div className="text-left PostText">
          <small className="feedboldtext text-muted">Start a post</small>
        </div>
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Create a post</Modal.Title>
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
          </Row>

          {/* post content */}
          {/* <Row>
                    
                </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Button id="savemodalbutton" type="button" onClick={createPost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPost;
