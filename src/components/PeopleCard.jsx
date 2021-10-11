
import { Card, Button, Row, Col } from "react-bootstrap";

import "./PeopleCard.css";
import "./feedsections/FeedRightCard.css";
import { Link } from "react-router-dom";

const PeopleCard = ({ peopleInfo }) => {
  return (
 <Link to={`/profile/${peopleInfo._id}`}>
    <Card className="PeopleCard d-flex flex-row no-gutters">
      <Row className="feedright">
        <Col className="col-md-4">
      <Card.Img
        className="RightFeedImage ml-3 mt-3"
        variant="top"
        src={peopleInfo.image}
      />
      </Col>
      <Col className="col-md-8">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="RightFeedTitle">
          {peopleInfo.name} {peopleInfo.surname}
        </Card.Title>
        <Card.Text className="RightFeedSubtitle text-muted">{peopleInfo.title}</Card.Text>
        <Card.Text>
          <Button type="button" variant="outline-secondary" className="RightFeedButton mr-5">Message</Button>{" "}
        </Card.Text>
      </Card.Body>
      </Col>
      </Row>
    </Card> </Link>

  );
};

export default PeopleCard;
