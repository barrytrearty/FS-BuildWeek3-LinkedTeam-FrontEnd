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
  const [experienceArray, setExperienceArray] = useState([]);

  const getArray = async () => {
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${profileId}/experiences`
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
          <Col xs={2} className="mr-4">
            <img src={experience.image} alt="" className="mt-3 imageSize" />
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
