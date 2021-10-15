import React, { useState, useEffect } from "react";
import {
  //   Card,
  Col,
  Button,
  Row,
  //   InputGroup,
  //   FormControl,
} from "react-bootstrap";
import "./MidSection.css";
// import { CgMathPlus } from "react-icons/cg";
import {
  AiOutlineLike,
  AiFillLike,
  //   AiFillDislike,
  //   AiOutlineDislike,
} from "react-icons/ai";
// import { BiCommentDetail } from "react-icons/bi";
// import { RiSendPlaneFill, RiShareForwardLine } from "react-icons/ri";

const Comment = ({ comment }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggle = () => {
    // postCommentLike();
    console.log("MOFO");
    setIsLiked(!isLiked);
  };

  //   const postCommentLike = async () => {
  //     try {
  //       console.log(comment._id);
  //       let response = await fetch(
  //         `https://linkedinteam.herokuapp.com/posts/${post._id}/comment/${comment._id}`,
  //         {
  //           method: "POST",
  //           body: JSON.stringify({
  //             user: userId.userId,
  //           }),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         console.log("postLIke");
  //       } else {
  //         alert("Error! Please complete the form!");
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  return (
    <>
      <Row className="comment-outer">
        {/* {console.log(comment)} */}
        <Col xs={1}>
          <img src={comment.user.image} className="mr-5 userImage" />
        </Col>
        <Col xs={10} className="comment my-1 ml-3">
          <Row>
            <span className="font-weight-bold m-1">
              {comment.user.name} {` `}
              {comment.user.surname}
            </span>
          </Row>
          <Row>
            <span className="m-2 mt-1"> {comment.comment}</span>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="offset-1">
          <Button
            className="like-comment"
            variant="light"
            onClick={handleToggle}
          >
            Like
          </Button>
          {isLiked ? (
            <AiFillLike
              style={{ color: "#0072B1" }}
              size="1.3rem"
              className="mr-1"
            />
          ) : (
            <AiOutlineLike
              style={{ color: "#6b6b6b" }}
              size="1.3rem"
              className="mr-1"
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Comment;
