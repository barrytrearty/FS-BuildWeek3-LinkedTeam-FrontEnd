import React, { Component } from "react";
import { Container, Image, Card, Button, Row, Col } from "react-bootstrap";
import "./NavbarProfile.css";

class ScrollableNavProfile extends Component {
  state = {
    user: [],
  };

  componentDidMount = async () => {
    try {
      // var myHeaders = new Headers();
      // myHeaders.append(
      //   "Authorization",
      //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg"
      // );

      var requestOptions = {
        method: "GET",
        // headers: myHeaders,
        redirect: "follow",
      };
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/6164117136d383058470339f`,
        requestOptions
      );

      if (response.ok) {
        let userdetails = await response.json();
        this.setState({ user: userdetails });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="row ml-5">
        <Image
          className="scrollednavbarprofileimage ml-5"
          height="40px"
          src={this.state.user.image}
          roundedCircle
        />
        <p
          className="text-right ml-2"
          id="navprofiletext"
          style={{ fontSize: "0.8em" }}
        >
          {this.state.user.name} {this.state.user.surname} <br />
          <small className="text-muted">{this.state.user.title}</small>
        </p>

        <Button
          className="scrollednavbutton"
          variant="outline-primary"
          style={{ width: "8rem" }}
        >
          View Profile
        </Button>
      </div>
    );
  }
}

export default ScrollableNavProfile;
