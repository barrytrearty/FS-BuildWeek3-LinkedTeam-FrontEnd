import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import StriveLogo from "../data/logo.png";
import EditModal from "./EditModal";
import { format, parseISO } from "date-fns";
import { render } from "@testing-library/react";
import AddExperienceModal from "./AddExperienceModal";
import { AiOutlineDownload } from "react-icons/ai";
import { BiPurchaseTag } from "react-icons/bi";
import "./EditModal.css";

const Experiences = ({ match, userId }) => {
  // const experienceId = match.params.id;
  let urlstring = window.location.href.slice(-2);
  let isMe = false;
  if (urlstring === "me") {
    isMe = true;
  } else {
    isMe = false;
  }

  const [addModalClosed, setAddModalClosed] = useState(true);
  const [editModalClosed, setEditModalClosed] = useState(true);
  const [experienceArray, setExperienceArray] = useState([]);

  const getArray = async () => {
    try {
      console.log(userId);
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId.userId}/experiences`
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
  }, []);

  useEffect(() => {
    getArray();
  }, [editModalClosed]);

  useEffect(() => {
    getArray();
  }, [addModalClosed]);

  return (
    <Card className="px-4 py-2 sectiontext pt-4">
      <Row className="d-flex justify-content-between">
        <Card.Title className="px-3 sectionheader">Experience</Card.Title>
        <div>
          <a
            href={`https://linkedinteam.herokuapp.com/users/${userId}/experiences/CSV`}
          >
            <AiOutlineDownload
              id="react-button"
              size={25}
              className="mr-auto"
            />
          </a>
        </div>
        {isMe === true && (
          <AddExperienceModal
            setAddModalClosed={setAddModalClosed}
            userId={userId}
          />
        )}
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

            {isMe === true && (
              <div className="ml-auto">
                <EditModal
                  userId={userId}
                  experienceId={experience._id}
                  setEditModalClosed={setEditModalClosed}
                />
                <deleteExperience setEditModalClosed={setEditModalClosed} />
              </div>
            )}

            {/* dont need the add experience on exsiting experience */}
            {/* {isMe === true && (
              <AddExperienceModal
                userId={userId}
                experienceId={experience._id}
              />
            )} */}
          </Col>{" "}
        </Row>
      ))}
    </Card>
  );
};

export default Experiences;
