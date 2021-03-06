import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Button,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./MidSection.css";
import { CgMathPlus } from "react-icons/cg";
import {
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiSendPlaneFill, RiShareForwardLine } from "react-icons/ri";
import Comment from "./Comment";

const NewsFeedItem = ({ post, userId }) => {
  // console.log(post);

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentsArray, setCommentsArray] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [userImage, setUserImage] = useState("");
  // const [commentCounter, setCommentCounter] = useState(post.comments.length);

  const handleToggle = () => {
    postLike();
    console.log("MOFO");
    setIsLiked(!isLiked);
    setShowComments(true);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleDislike = () => {
    // postLike();
    // console.log("MOFO");
    setIsDisliked(!isDisliked);
    // setShowComments(true);
  };

  const getUserImage = async () => {
    try {
      console.log(userId.userId);
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId.userId}`
      );

      if (response.ok) {
        let imageProm = await response.json();
        setUserImage(imageProm.image);
        return userImage;
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const postLike = async () => {
    try {
      console.log(userId.userId);
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/posts/${post._id}/like`,
        {
          method: "POST",
          body: JSON.stringify({
            user: userId.userId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("postLIke");
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const postComment = async () => {
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/posts/${post._id}/comment`,
        {
          method: "POST",
          body: JSON.stringify({
            user: userId.userId,
            comment: commentText,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("postComment");
        getComments();
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const getComments = async () => {
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/posts/${post._id}/comment`
      );
      let commentsProm = await response.json();
      setCommentsArray(commentsProm.reverse());
      console.log("comments" + commentsArray);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserImage();
    getComments();
  }, []);
  // useEffect(() => {
  //   getComments();
  // }, [commentsArray]);

  return (
    <Card className="cardstyling consistent-font" key={post._id}>
      <Card.Body>
        <div>
          <div className="border-bottom">
            <p>
              <strong>
                {post.user.name} {post.user.surname} {` `}
              </strong>
              likes this
            </p>
          </div>
          <Col>
            <img src={post.image} alt="" loading="lazy" />
          </Col>
          <Col>
            <div className="d-flex justify-content-between">
              <div>
                <strong>
                  {post.user.name} {post.user.surname}
                </strong>
                <span className="text-muted"> 3rd+ </span>
                <div>{post.title} 45m</div>
              </div>
              <div id="follow" className="mt-2">
                <CgMathPlus size={27} /> <span>Follow</span>
              </div>
            </div>
          </Col>
          <div className="mt-3">
            <p>{post.text}</p>
          </div>
        </div>
      </Card.Body>
      {/* <div> */}
      <div
        id="interaction"
        className="d-flex justify-content-around flex-end mb-1"
      >
        <Button
          className="midbutton pb-3"
          variant="light"
          onClick={handleToggle}
        >
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
          Like
        </Button>

        <Button
          className="midbutton pb-3"
          variant="light"
          onClick={toggleComments}
        >
          <BiCommentDetail
            style={{ color: "#6b6b6b" }}
            size="1.3rem"
            className="mr-1"
          />
          Comment
        </Button>

        <Button
          className="midbutton pb-3"
          variant="light"
          onClick={handleDislike}
        >
          {isDisliked ? (
            <AiFillDislike style={{ color: "#0072B1" }} size="1.3rem" />
          ) : (
            <AiOutlineDislike style={{ color: "#6b6b6b" }} size="1.3rem" />
          )}
          Dislike
        </Button>
        <Button className="midbutton pb-3" variant="light">
          <RiSendPlaneFill style={{ color: "#6b6b6b" }} size="1.3rem" /> Send
        </Button>
      </div>

      {showComments ? (
        <>
          <Row className="d-flex flex-row align-items-top">
            <Col xs={1}>
              <img src={userImage} className="mr-5 userImage" />
            </Col>
            <Col>
              <FormControl
                placeholder="Add a comment..."
                aria-label="Comment"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setCommentText(e.target.value);
                }}
                onSubmit={(e) => e.target.reset()}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {commentText === "" ? (
                ""
              ) : (
                <Button
                  id="postButton"
                  variant="primary"
                  className="offset-1 px-3 py-1 mt-2 mb-3"
                  onClick={() => {
                    postComment();
                    setCommentText("");
                  }}
                >
                  Post
                </Button>
              )}
            </Col>
          </Row>
          {/* <Row> */}
          {commentsArray.map((comment) => (
            <Comment comment={comment} />
            // <>
            //   <Row className="comment-outer">
            //     {/* {console.log(comment)} */}
            //     <Col xs={1}>
            //       <img src={comment.user.image} className="mr-5 userImage" />
            //     </Col>
            //     <Col xs={10} className="comment my-1 ml-3">
            //       <Row>
            //         <span className="font-weight-bold m-1">
            //           {comment.user.name}
            //           {comment.user.surname}
            //         </span>
            //       </Row>
            //       <Row>
            //         <span className="m-2 mt-1"> {comment.comment}</span>
            //       </Row>
            //     </Col>
            //   </Row>
            //   <Row>
            //     <Col className="offset-1">
            //       Like{" "}
            //       {isLiked ? (
            //         <AiFillLike
            //           style={{ color: "#0072B1" }}
            //           size="1.3rem"
            //           className="mr-1"
            //         />
            //       ) : (
            //         <AiOutlineLike
            //           style={{ color: "#6b6b6b" }}
            //           size="1.3rem"
            //           className="mr-1"
            //         />
            //       )}
            //     </Col>{" "}
            //   </Row>
            // </>
          ))}
          {/* </Row> */}
        </>
      ) : (
        ""
      )}
    </Card>
  );
  //   }
};

export default NewsFeedItem;
