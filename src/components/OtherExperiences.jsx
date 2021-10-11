import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import StriveLogo from "../data/logo.png";
import EditModal from "./EditModal";
import { format, parseISO } from "date-fns";
import { render } from "@testing-library/react";
import AddExperienceModal from "./AddExperienceModal";
import { BiPurchaseTag } from "react-icons/bi";
import "./EditModal.css";

const OtherExperiences = ({ profileId }) => {
  // const experienceId = match.params.id;
  //   let urlstring = window.location.href.slice(-2);
  //   let isMe = false;
  //   if (urlstring === "me") {
  //     isMe = true;
  //   } else {
  //     isMe = false;
  //   }

  //   EXPERIENCES:

  //   - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
  //   Get user experiences
  //   - POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
  //   Create an experience. NOTE: every user is allowed to mess only with his own experiences
  //   - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
  //   Get a specific experience
  //   - PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
  //   Get a specific experience
  //   - DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
  //   Get a specific experience

  //   const userId = "611d2acd2d52620015b6de6e";

  const [experienceArray, setExperienceArray] = useState([]);

  const getArray = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences`,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZTBiMTJkNTI2MjAwMTViNmRjOGQiLCJpYXQiOjE2MzEwMTE2NDMsImV4cCI6MTYzMjIyMTI0M30.wxo-L7vPKDv0DeIAf5S_h2cwEHJqqvPcL0Il7sQlPYs",
          },
        }
      );
      let experienceArray1 = await response.json();
      setExperienceArray(experienceArray1);
    } catch (error) {
      console.log(error);
    }
  };

  const fixDate = (date) => {
    try {
      return format(
        parseISO(date), // 1)
        "yyyy MMMM"
      );
    } catch {
      return `Present`;
    }
  };

  useEffect(() => {
    getArray();
    console.log(`PID1+ ${profileId}`);
  }, [profileId]);

  return (
    <Card className="px-4 py-2 sectiontext pt-4">
      <Row className="d-flex justify-content-between">
        <Card.Title className="px-3 sectionheader">Experience</Card.Title>
      </Row>
      {/* {console.log(experienceArray)} */}

      {experienceArray.map((experience) => (
        <Row key={experience._id}>
          <Col xs={1} className="mr-4">
            <img src={experience.image} alt="" className="mt-3" />
          </Col>
          <Col className="my-3 d-flex flex-row ml-3">
            <div className="Experience">
              <p className="p-heading text-strong">{experience.role}</p>
              <p className="p-secondary">{experience.company}</p>
              <p className="startenddate text-muted">
                {fixDate(experience.startDate)} - {fixDate(experience.endDate)}{" "}
              </p>
              <p className="p-secondary">{experience.description}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Card>
  );
};

export default OtherExperiences;
