import React, { Component } from "react";
import { Container, Image, Card, Button, Row, Col } from "react-bootstrap";
import ContactInfoModal from "./ContactInfoModal";
import "./PeopleSection.css";

const OtherProfileTopCard = ({ profile }) => {
  console.log(profile.image);
  console.log(profile.title);

  return (
    <Container className="topmargin px-0">
      <Card style={{ width: "100%", borderRadius: "8px" }}>
        <Card.Img
          variant="top"
          src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F10-ferdinand-stohr-149422-unsplash-1200x298.jpg"
          className="bannerImage"
        />
        <div className="profileimagewrapper">
          <Image
            className="profileimage ml-4"
            src={profile.image}
            roundedCircle
          />
        </div>

        <Card.Body className="pt-1 px-1 pb-2">
          <Row className="ml-1 mr-3">
            <Col xs={12} sm={8}>
              <Card.Title className="mb-0" style={{ fontSize: "1.5em" }}>
                {profile.name} {profile.surname}{" "}
                <small className="text-muted">1st</small>
              </Card.Title>
              <Card.Text className="mb-0">{profile.title}</Card.Text>

              <Card.Text className="mb-0">
                <small className="text-muted">
                  {profile.area} <ContactInfoModal email={profile.email} />
                </small>
              </Card.Text>
              <Card.Text>
                <small className="text-muted">
                  <a style={{ fontWeight: "500" }} href="">
                    96 connections
                  </a>
                </small>
              </Card.Text>
              {/* <Card.Text>
                  <small className="text-muted">
                    <a style={{ fontWeight: "500", color: "inherit" }} href="">
                      2 mutual connections:{" "}
                      <span style={{ fontWeight: "400" }}>
                        Magdalena Sochon and Tetiana Yaremko
                      </span>
                    </a>
                  </small>
                </Card.Text> */}
              <Button
                className="mr-2 messagebutton px-3 py-1 mb-3"
                variant="primary"
              >
                Message
              </Button>
              <Button
                className="morebutton px-3 py-1 mb-3"
                variant="outline-secondary"
              >
                More
              </Button>
            </Col>

            <Col xs={0} sm={4} className="d-none d-md-block">
              <Row>
                <Col sm={2}>
                  <img
                    className="educationicon mr-2"
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1639008000&v=beta&t=38emh8r8X3fw7Ah3ky91KyaVJT_6wSkxl1MqF2QRf5E"
                    alt=""
                  />{" "}
                </Col>
                <Col sm={10}>
                  <p className="educationtext">Strive School</p>{" "}
                </Col>
              </Row>

              <Row>
                <Col sm={2}>
                  <img
                    className="educationicon mr-2"
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQEPAshgi0NNtg/company-logo_100_100/0/1618903558900?e=1639008000&v=beta&t=nlhuo43cPg_xzu6NZrwq0kJ22L64B7upOmHUgAKlZGs"
                    alt=""
                  />{" "}
                </Col>
                <Col sm={10}>
                  <p className="educationtext">
                    Buckinghamshire New University
                  </p>{" "}
                </Col>
              </Row>

              {/* <p className="educationtext"><img className="educationicon mr-2" src="https://media-exp1.licdn.com/dms/image/C4D0BAQEPAshgi0NNtg/company-logo_100_100/0/1618903558900?e=1639008000&v=beta&t=nlhuo43cPg_xzu6NZrwq0kJ22L64B7upOmHUgAKlZGs" alt="" />Buckinghamshire New University</p> */}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "100%",
          marginTop: "1rem",
          borderRadius: "8px",
        }}
        className="mb-3"
      >
        <Card.Body className="py-4 px-4">
          <Card.Title class="sectionheader pb-3">About</Card.Title>
          <Card.Text class="sectiontext mb-0">{profile.bio}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OtherProfileTopCard;
