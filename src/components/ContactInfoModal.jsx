import React, { Component } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";



function ContactInfoModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let url = window.location.href
    return (
      <>
      <a onClick={handleShow} className="modallink">Contact info</a>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="px-4" closeButton>
            <Modal.Title id="contactnametext">James Sutcliffe</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
              <div className="d-flex justify-content-between">
              <h5 className="font-weight-normal mb-3 d-inline">Contact Info</h5>
              <span><BiPencil size={26} color="grey" id="linkedincontacticon"/></span>
              </div>
          

          <Row className="mb-2">
            <Col className="ml-0" sm={1}><FaLinkedin size={22} id="linkedincontacticon"/></Col>
            <Col className="ml-0" sm={11}>
                <p className="contactdetailstext mb-0">Your Profile</p>
                <a className="contactdetailslinks" href="linkedin.com/in/james-sutcliffe-3b318a153">{url}</a>
                </Col>
        </Row>


        <Row className="mb-3">
            <Col className="ml-0" sm={1}><AiOutlineMail size={22} id="emailcontacticon"/></Col>
            <Col className="ml-0" sm={11}>
                <p className="contactdetailstext mb-0">Email</p>
                <a className="contactdetailslinks" href="">{props.email}</a>
                </Col>
        </Row>

          </Modal.Body>
        </Modal>
      </>
    );
  }

export default ContactInfoModal;