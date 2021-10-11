import { Row, Col } from "react-bootstrap";
import PeopleCard from "./PeopleCard";



const PeopleRow = ({ peopleInfos, show }) => {


  // Requiring the lodash library 
const _  = require("lodash"); 

// Original array 
var array = peopleInfos 

// Use of .shuffle() method
let shuffled_array = _.shuffle(array);

console.log(shuffled_array)
  return (
    <>
      <Row>
        {show && shuffled_array.slice(0, 4).map((peopleInfo) => (
          <Col sm={12} md={12} lg={12} key={peopleInfo._id} className="PeopleCol">
            <PeopleCard peopleInfo={peopleInfo} />
          </Col>
        ))}
          {!show && shuffled_array.slice(0, 8).map((peopleInfo) => (
          <Col sm={12} md={12} lg={12} key={peopleInfo._id} className="PeopleCol">
            <PeopleCard peopleInfo={peopleInfo} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PeopleRow;

