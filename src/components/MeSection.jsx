import ProfileTopCard from "./ProfileTopCard";
import AfterMain from "./AfterMain";
import PeopleSection from "./PeopleSection";
import { Row, Col, Container } from "react-bootstrap";
import "./PeopleSection.css";

const MeSection = () => {
  return (
    <Row>
      <Col xs={12} sm={12} lg={8}>
        <ProfileTopCard />
        <AfterMain />
      </Col>

      <Col xs={12} sm={12} lg={4}>
        <PeopleSection marginTop={true} sectionTitle="People also view" />
        <PeopleSection marginTop={false} sectionTitle="People you may know" />
      </Col>
    </Row>
  );
};

export default MeSection;
