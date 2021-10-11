import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import PeopleRow from "./PeopleRow";
import "./ShowButton.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./PeopleSection.css";

const PeopleSection = ({ sectionTitle, marginTop }) => {
  const [peopleInfos, setPeopleInfos] = useState([]);
  const [show, setShow] = useState(true);

  const getInfo = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MzA5MTgwNDIsImV4cCI6MTYzMjEyNzY0Mn0.2hhEx_eDgxioUecToSSqJQuMR6ezl3BCgvP7z6HtkS4",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setPeopleInfos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  console.log(peopleInfos);
  return (
    <Container className=" mb-3 PeopleContainer container-fluid">

      <h5 className="sectiontitle mt-3">{sectionTitle}</h5>
      <PeopleRow peopleInfos={peopleInfos} show={show} />
      <div className="ShowDiv text-center p-0">
        <Button
          type="button"
          id="ShowButton"
          className="text-muted"
          //   variant="outline-secondary"
          onClick={() => setShow(!show)}
        >
          {show && (
            <>
              Show More <IoIosArrowDown />
            </>
          )}
          {!show && (
            <>
              Show Less <IoIosArrowUp />
            </>
          )}
        </Button>
      </div>
    </Container>
    
  );
};

export default PeopleSection;
