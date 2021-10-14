import React, { useState, useEffect } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import "./MidSection.css";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiSendPlaneFill, RiShareForwardLine } from "react-icons/ri";
import MyLoader from "./MyLoader";
import NewsFeedItem from "./NewsFeedItem";
// import {RiShareForwardLine}

const MidSection = ({ addPostClosed, addImagePostClosed, userId }) => {
  // const [hasPostClosed, setHasPostClosed] = useState(addPostClosed);
  const [postsArray, setPostsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      let response = await fetch(`https://linkedinteam.herokuapp.com/posts `);
      let postsProm = await response.json();
      setPostsArray(postsProm);
      console.log("Posts" + postsArray);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [addPostClosed]);

  useEffect(() => {
    getPosts();
  }, [addImagePostClosed]);

  return (
    <div>
      <hr />
      {isLoading ? (
        <div>
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
        </div>
      ) : (
        ""
      )}

      <Card className="mt-3 mb-3">
        <Card.Body>
          <Row>
            <Col className="col-md-1 mr-2">
              <Card.Img
                variant="top-left"
                className="shopifylogo"
                src="https://cdn.tutsplus.com/net/uploads/legacy/2136_shopify/shopify-logo.png"
              />
            </Col>
            <Col className="col-md-9">
              <Card.Subtitle className="shopifysubtitle cardtitle mb-1">
                Shopify
              </Card.Subtitle>
              <Card.Text className="shopifytitle text-muted small">
                384,245 followers
                <br />
                Promoted
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-12">
              <Card.Text className="shopifytext mt-2">
                Join our fully remote Data team and update your profile location
                to: Internet,
                <br />
                Everywhere.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Img
          variant="bottom"
          className="mb-3"
          src="https://www.bloggersideas.com/wp-content/uploads/2015/07/Shopify-Homepage.png"
        />
        <div
          id="interaction"
          className="d-flex justify-content-around flex-end mb-1"
        >
          {/* <span> */}
          <Button className="midbutton pb-3" variant="light">
            <AiOutlineLike style={{ color: "#6b6b6b" }} size="1.3rem" /> Like
          </Button>
          {/* </span> */}
          <Button className="midbutton pb-3" variant="light">
            <BiCommentDetail style={{ color: "#6b6b6b" }} size="1.3rem" />{" "}
            Comment
          </Button>
          <Button className="midbutton pb-3" variant="light">
            <RiShareForwardLine style={{ color: "#6b6b6b" }} size="1.3rem" />{" "}
            Share
          </Button>
          <Button className="midbutton pb-3" variant="light">
            <RiSendPlaneFill style={{ color: "#6b6b6b" }} size="1.3rem" /> Send
          </Button>
        </div>
      </Card>

      {postsArray
        .slice(-25)
        .reverse()
        .map((post) => (
          <NewsFeedItem post={post} userId={userId} />
        ))}

      {/* {setIsLoading(false)} */}
    </div>
  );
};

export default MidSection;
