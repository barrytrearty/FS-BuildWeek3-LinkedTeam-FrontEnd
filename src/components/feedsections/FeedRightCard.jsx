import { Card, Button, Row, Col } from "react-bootstrap";
import { CgMathPlus } from "react-icons/cg";
import "./FeedRightCard.css";

const FeedRightCard = ({ peopleInfo }) => {
  return (
    <Card className="PeopleCard d-flex flex-row no-gutters">
      <Row className="feedright">
        <Col className="col-md-4">
          <Card.Img
            className="RightFeedImage ml-3 mt-3"
            variant="top"
            src={
              peopleInfo.image
                ? peopleInfo.image
                : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
          />
        </Col>
        <Col className="col-md-8">
          <Card.Body className="d-flex flex-column">
            <Card.Title className="RightFeedTitle">
              {peopleInfo.name} {peopleInfo.surname}
            </Card.Title>
            <Card.Text className="RightFeedSubtitle text-muted">
              {peopleInfo.title}
            </Card.Text>
            <Button
              type="button"
              variant="outline-secondary"
              className="RightFeedButton mr-5"
            >
              {" "}
              <CgMathPlus size={18} />
              Follow
            </Button>{" "}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default FeedRightCard;
