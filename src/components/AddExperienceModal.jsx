import React, { Component, useEffect } from "react";

import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { parseISO, format } from "date-fns";
// import { useHistory } from "react-router";

function AddExperienceModal({ setAddModalClosed, userId }) {
  // const history = useHistory();
  // const [userLike, setUserLike] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setAddModalClosed(true);
  };
  const handleShow = () => {
    setShow(true);
    setAddModalClosed(false);
  };

  // const id= match.params.id

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    username: userId,
    // image: "",
    // "role": "CTO",
    //     "company": "Strive School",
    //     "startDate": "2019-06-16",
    //     "endDate": "2019-06-16", //could be null
    //     "description": "Doing stuff here and there",
    //     "area": "Berlin",
  });

  const [imageFile, setimageFile] = useState();

  const [startDateObj, setStartDateObj] = useState({ year: "", month: "" });
  const [endDateObj, setEndDateObj] = useState({ year: "", month: "" });

  const [currentlyWorking, setcurrentlyWorking] = useState(false);

  let years = [];
  for (let i = 2021; i >= 1921; i--) {
    years.push(i);
  }

  useEffect(() => {
    let parsedDate = `${startDateObj.year}-${("0" + startDateObj.month).slice(
      -2
    )}-01`;
    // console.log(parsedDate);
    setExperience({ ...experience, startDate: parsedDate });
  }, [startDateObj]);

  useEffect(() => {
    let parsedDate =
      endDateObj.year !== "" || endDateObj.month !== ""
        ? `${endDateObj.year}-${("0" + endDateObj.month).slice(-2)}-01`
        : null;
    // console.log(parsedDate);
    setExperience({ ...experience, endDate: parsedDate });
    console.log(experience);
  }, [endDateObj]);

  const postData = async () => {
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId}/experiences/`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            //   Authorization:
            //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          },

          redirect: "follow",
        }
      );

      if (response.ok) {
        const hello = response.json();
        handleClose();
        // alert("Success!");
        // history.go(0);
        return hello;
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const fetchNewestExperienceID = async () => {
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId}/experiences`

        // {
        //   headers: {
        //     Authorization:
        //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
        //   },
        // }
      );
      let experienceArray1 = await response.json();
      let lastexperience = experienceArray1[experienceArray1.length - 1];
      return lastexperience._id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e, propertyName) => {
    setExperience({
      ...experience,
      [propertyName]: propertyName === "" ? "" : e.target.value,
    });
  };

  const handleCheckInput = (e) => {
    setcurrentlyWorking(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (experience.endDate === "") {
      setExperience({ ...experience, endDate: null });
    }
    await postData();
    let id = await fetchNewestExperienceID();
    console.log(id);
    if (imageFile.length > 0) await postImage(id);
    if (imageFile === undefined) console.log("Undefined image");
  };

  const imageUpload = (e) => {
    if (e.target.files.length == 0) {
      console.log("No image selected!");
    } else {
      setimageFile(e.target.files[0]);
    }
  };

  const postImage = async (id) => {
    const formData = new FormData();
    formData.append("experience", imageFile);

    console.log(formData);
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId}/experiences/${id}/picture`,
        {
          method: "POST",
          body: formData,
          // headers: {
          //   Authorization:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          // },
        }
      );

      if (response.ok) {
        const reply = response.json();

        console.log(reply);
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <a onClick={handleShow} className="modallink">
        <div className="editbutton mr-3">
          <CgMathPlus size={27} className="m-auto" />
        </div>
      </a>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Add experience</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <Form id="addExperienceForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formJobTitle">
              <Form.Label className="mb-0">
                <small>Title*</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Ex: Retail Sales Manager"
                className="border border-dark"
                onChange={(e) => handleInput(e, "role")}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formCompanyName">
              <Form.Label className="mb-0">
                <small>Company name*</small>
              </Form.Label>
              <Form.Control
                className="border border-dark"
                size="sm"
                type="text"
                placeholder="Ex: Microsoft"
                onChange={(e) => handleInput(e, "company")}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formJobArea">
              <Form.Label className="mb-0">
                <small>Location</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                className="border border-dark"
                placeholder="Ex: London, United Kingdom"
                onChange={(e) => handleInput(e, "area")}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formWorkingCheckbox">
              <Form.Check
                type="checkbox"
                label="I am currently working in this role"
                size="lg"
                onChange={(e) => handleCheckInput(e)}
              />
            </Form.Group>

            <small>Start date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border border-dark"
                size="sm"
                as="select"
                onChange={(e) =>
                  setStartDateObj({ ...startDateObj, month: e.target.value })
                }
                // onChange={(e) => setStartDateMonth(e.target.value)}
              >
                <option value={null}>Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </Form.Control>

              <Form.Control
                className="border-dark"
                size="sm"
                as="select"
                onChange={(e) =>
                  setStartDateObj({ ...startDateObj, year: e.target.value })
                }
              >
                <option>Year</option>
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </Form.Control>
            </div>

            <small>End date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                disabled={currentlyWorking}
                className="mr-2 border-dark"
                size="sm"
                as="select"
                onChange={(e) =>
                  setEndDateObj({ ...endDateObj, month: e.target.value })
                }
              >
                <option value="">Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </Form.Control>

              <Form.Control
                disabled={currentlyWorking}
                className="border-dark"
                size="sm"
                as="select"
                onChange={(e) =>
                  setEndDateObj({ ...endDateObj, year: e.target.value })
                }
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </Form.Control>
            </div>

            <Form.Group
              className="mb-3 border-dark"
              controlId="formJobDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => handleInput(e, "description")}
                className="border-dark"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            {/* <Form.Group className="mb-4" controlId="formImageUrl">
              <Form.Label className="mb-0">
                <small>Image URL</small>
              </Form.Label>
              <Form.Control
                className="border border-dark"
                size="sm"
                type="text"
                placeholder="Ex: https://fakeimg.pl/10x10/"
                onChange={(e) => handleInput(e, "image")}
              />
            </Form.Group> */}

            <Form.Group>
              <Form.File
                id="formImageUpload"
                label="Image Upload"
                onChange={(e) => imageUpload(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="savemodalbutton" type="submit" form="addExperienceForm">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperienceModal;
