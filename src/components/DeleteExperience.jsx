import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useHistory } from "react-router";

import "./DeleteExperience.css";

const DeleteExperience = ({ userId, experienceId, handleClose }) => {
  // const history = useHistory();
  // e.preventDefault()

  // const userId = this.props.userId
  // const expId = this.state.experience._id
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const deleteThisExperience = async () => {
    try {
      const response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId}/experiences/${experienceId}`,
        {
          method: "DELETE",
          // headers: {
          //   Authorization:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          // },
        }
      );
      if (response.ok) {
        // this.props.fetchExperiences();
        // this.props.onHide();
        // console.log("Response ok");
        // alert("Delete successful");
        // history.go(0);
        handleClose();
      } else {
        console.log("Delete unsuccessful");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button
      onClick={deleteThisExperience}
      className="deleteButton mr-auto pl-3 pr-3"
      variant="secondary-outline"
      type="button"
    >
      Delete experience
    </Button>
  );
};
export default DeleteExperience;
