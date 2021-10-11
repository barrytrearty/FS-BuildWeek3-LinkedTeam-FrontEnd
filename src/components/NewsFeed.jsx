import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LeftSection from "./feedsections/LeftSection";
import MidSection from "./feedsections/MidSection";
import MidSectionUpper from "./feedsections/MidSectionUpper";
import RightSection from "./feedsections/RightSection";

const NewsFeed = () => {
  const [addPostClosed, setAddPostClosed] = useState(false);
  const [addImagePostClosed, setAddImagePostClosed] = useState(false);
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} md={4} sm={12} className="px-2">
            <LeftSection />
          </Col>

          <Col lg={6} md={8} sm={12} className="px-2">
            <MidSectionUpper
              setAddPostClosed={setAddPostClosed}
              setAddImagePostClosed={setAddImagePostClosed}
            />
            <MidSection
              addPostClosed={addPostClosed}
              addImagePostClosed={addImagePostClosed}
            />
          </Col>

          <Col lg={3} className="d-none d-lg-block px-2">
            <RightSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsFeed;
