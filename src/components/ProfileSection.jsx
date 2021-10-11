import OtherProfileTopCard from "./OtherProfileTopCard";
import OtherExperiences from "./OtherExperiences";
import AfterMain from "./AfterMain";
import PeopleSection from "./PeopleSection";
import { Row, Col, Container } from "react-bootstrap";
import "./PeopleSection.css";
import { useEffect, useState } from "react";

const ProfileSection = ({ match }) => {
  const profileId = match.params.id;
  console.log(profileId);

  const [profile, setProfile] = useState("");

  const getProfile = async () => {
    try {
      const response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${profileId}`,
        {
          method: "GET",
          // headers: {
          //   Authorization:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          // },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    console.log(`PID"+ ${profileId}`);
  }, [profileId]);

  return (
    <Row>
      <Col xs={12} sm={12} lg={8}>
        <OtherProfileTopCard profile={profile} />
        <OtherExperiences profileId={profileId} />
        {/* <AfterMain profile={profile} /> */}
        {console.log("I am the profile ", profile)}
      </Col>

      <Col xs={12} sm={12} lg={4}>
        <PeopleSection marginTop={true} sectionTitle="People also view" />
        <PeopleSection marginTop={false} sectionTitle="People you may know" />
      </Col>
    </Row>
  );
};

export default ProfileSection;
