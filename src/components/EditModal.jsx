import { parseISO, format } from "date-fns";
import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./EditModal.css";
import { FiEdit2 } from "react-icons/fi";
import { useEffect, useState, useCallback } from "react";
import "./Edit.css";
import DeleteExperience from "./DeleteExperience";
// import { useHistory } from "react-router";

function EditModal({ userId, experienceId, setEditModalClosed }) {
  // const history = useHistory();
  let years = [];
  for (let i = 2021; i >= 1921; i--) {
    years.push(i);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setEditModalClosed(true);
  };
  const handleShow = () => {
    setShow(true);
    setEditModalClosed(false);
  };

  // preload this info in edit modal
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [area, setArea] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState("");
  const [imageFile, setimageFile] = useState();

  //fetching existing info

  const endpoint = `https://linkedinteam.herokuapp.com/users/${userId}/experiences/${experienceId}`;

  const getExperience = async () => {
    try {
      const response = await fetch(
        endpoint

        // {
        //   headers: {
        //     method: "GET",
        //     Authorization:
        //       "Bearer   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
        //   },
        // }
      );
      if (response.ok) {
        const data = await response.json();
        // prefill the form
        setRole(data.role);
        setCompany(data.company);
        setArea(data.area);
        // Set Start Array
        let startDateMonthString = data.startDate;
        startDateMonthString = format(
          parseISO(startDateMonthString), // 1)
          "yyyy MMM"
        );
        console.log(startDateMonthString);
        let startArray = startDateMonthString.split(" ");
        setStartMonth(startArray[1]);
        setStartYear(startArray[0]);
        // console.log(startMonth);
        // console.log(startYear);
        //Set End Array
        let endDateMonthString = data.endDate;
        endDateMonthString = format(
          parseISO(endDateMonthString), // 1)
          "yyyy MMM"
        );
        console.log(endDateMonthString);
        let endArray = endDateMonthString.split(" ");
        setEndMonth(endArray[1]);
        setEndYear(endArray[0]);
        // console.log(endMonth);
        // console.log(endYear);

        setDescription(data.description);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getExperience();
  }, []);

  // console.log(role);
  // console.log(company);

  // edit info

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        // fill in the () here with the states
        body: JSON.stringify({
          role: role,
          company: company,
          startDate: `${startYear}-${(
            "0" + (startMonthVariable ? startMonthVariable : startMonth)
          ).slice(-2)}-16`,
          endDate: `${endYear}-${(
            "0" + (endMonthVariable ? endMonthVariable : endMonth)
          ).slice(-2)}-16`,
          description: description,
          area: area,
        }),

        // headers: {
        //   Authorization:
        //     "Bearer   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
        //   "Content-Type": "application/json",
        // },
      });
      if (response.ok) {
        console.log(role);
        const ExperienceResponse = await response.json();

        // console.log(ExperienceResponse);
        if (imageFile !== undefined) {
          editImage();
        }

        // alert("Profile is updated.");
        // history.go(0);
        handleClose();
        return ExperienceResponse;
      } else {
        alert("Profile is not edited.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editImage = async () => {
    const formData = new FormData();
    formData.append("experience", imageFile);
    try {
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${userId}/experiences/${experienceId}/picture`,
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

  let startMonthVariable;

  if (startMonth === "Jan") startMonthVariable = 1;
  if (startMonth === "Feb") startMonthVariable = 2;
  if (startMonth === "Mar") startMonthVariable = 3;
  if (startMonth === "Apr") startMonthVariable = 4;
  if (startMonth === "May") startMonthVariable = 5;
  if (startMonth === "Jun") startMonthVariable = 6;
  if (startMonth === "Jul") startMonthVariable = 7;
  if (startMonth === "Aug") startMonthVariable = 8;
  if (startMonth === "Sep") startMonthVariable = 9;
  if (startMonth === "Oct") startMonthVariable = 10;
  if (startMonth === "Nov") startMonthVariable = 11;
  if (startMonth === "Dec") startMonthVariable = 12;

  let endMonthVariable;

  if (endMonth === "Jan") endMonthVariable = 1;
  if (endMonth === "Feb") endMonthVariable = 2;
  if (endMonth === "Mar") endMonthVariable = 3;
  if (endMonth === "Apr") endMonthVariable = 4;
  if (endMonth === "May") endMonthVariable = 5;
  if (endMonth === "Jun") endMonthVariable = 6;
  if (endMonth === "Jul") endMonthVariable = 7;
  if (endMonth === "Aug") endMonthVariable = 8;
  if (endMonth === "Sep") endMonthVariable = 9;
  if (endMonth === "Oct") endMonthVariable = 10;
  if (endMonth === "Nov") endMonthVariable = 11;
  if (endMonth === "Dec") endMonthVariable = 12;

  const imageUpload = (e) => {
    if (e.target.files.length == 0) {
      console.log("No image selected!");
    } else {
      setimageFile(e.target.files[0]);
    }
  };

  return (
    <>
      <a onClick={handleShow} className="modallink ml-auto">
        <div className="editbutton">
          <FiEdit2 className="m-auto" size={18} />
        </div>
      </a>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Edit experience</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formJobTitle">
              <Form.Label className="mb-0">
                <small>Title*</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Ex: Retail Sales Manager"
                className="border border-dark"
                defaultValue={role}
                onChange={(e) => setRole(e.target.value)}
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
                defaultValue={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formJobLocation">
              <Form.Label className="mb-0">
                <small>Location</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                className="border border-dark"
                placeholder="Ex: London, United Kingdom"
                defaultValue={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </Form.Group>
            {/* date from Barry */}
            <small>Start date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border border-dark"
                size="sm"
                as="select"
                defaultValue={startMonthVariable}
                onChange={(e) => {
                  setStartMonth(e.target.value);
                  console.log(startMonthVariable);
                }}
                // onChange={(e) => setStartDateMonth(e.target.value)}
              >
                {/* <option value={startMonthVariable}>{startMonth}</option> */}
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
                defaultValue={startYear}
                onChange={(e) => {
                  setStartYear(e.target.value);
                }}
              >
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </Form.Control>
            </div>

            <small>End date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border-dark"
                size="sm"
                as="select"
                defaultValue={endMonthVariable}
                onChange={(e) => {
                  console.log(endMonth);
                  setEndMonth(e.target.value);
                  console.log(e.target.value);

                  // console.log(endMonthVariable);
                }}
              >
                {/* <option value={endMonthVariable}>{endMonth}</option> */}
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
                // disabled={currentlyWorking}
                className="border-dark"
                size="sm"
                as="select"
                defaultValue={endYear}
                onChange={(e) => {
                  setEndYear(e.target.value);
                  // console.log(endYear);
                }}
              >
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </Form.Control>
            </div>
            {/*   <option value={null}>Month</option>
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
            </div>

            <small>End date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border-dark"
                size="sm"
                type="text"
                defaultValue={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
           
            </div> */}

            <Form.Group
              className="mb-3 border-dark"
              controlId="formJobDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="border-dark"
                as="textarea"
                rows={3}
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.File
                id="formImageUpload"
                label="Image Upload"
                onChange={(e) => imageUpload(e)}
              />
            </Form.Group>
            <div className="d-flex flex-row">
              <DeleteExperience
                userId={userId}
                experienceId={experienceId}
                handleClose={handleClose}
              />
              <Button
                className="mb-0"
                id="editmodalbutton"
                variant="primary"
                type="submit"
              >
                Edit Experience
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditModal;
