import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useHistory } from "react-router";

import "./DeleteExperience.css";

const DeleteExperience = ({ userId, experienceId, handleClose }) => {
  const deleteThisExperience = async () => {
    try {
      const response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId.userId}/experiences/${experienceId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
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
