import React, { Component } from "react";
import { Container, Image, Card, Button, Row, Col } from "react-bootstrap";
import "./NavbarProfileImage.css";

class NavbarProfileImage extends Component {
  state = {
    user: [],
  };

  componentDidMount = async () => {
    try {
      console.log(this.props.userId);
      var requestOptions = {
        method: "GET",
        // headers: myHeaders,
        redirect: "follow",
      };
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${this.props.userId}`,
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
      <Image
        className="navbarprofileimage ml-3"
        src={this.state.user.image}
        roundedCircle
      />
    );
  }
}

export default NavbarProfileImage;
