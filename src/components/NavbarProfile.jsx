import React, { Component } from "react";
import { Container, Image, Card, Button, Row, Col } from "react-bootstrap";
import "./NavbarProfile.css";
import { Link } from "react-router-dom";

class NavbarProfile extends Component {
  state = {
    user: [],
  };

  componentDidMount = async () => {
    try {
      console.log(this.props.userId);

      const requestOptions = {
        method: "GET",

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
      <div className="row pl-1">
        <Image
          className="profileimageNav ml-3"
          height="40px"
          src={this.state.user.image}
          roundedCircle
        />
        <p
          className="mb-1 ml-1 mr-1 mt-1 text-right"
          id="navprofiletext"
          style={{ fontSize: "0.8em" }}
        >
          {this.state.user.name} {this.state.user.surname} <br />
          <small className="text-muted">{this.state.user.title}</small>
        </p>

        <Link to={"/me"}>
          <Button
            className="navbarprofilebutton mt-1 ml-4 pb-4"
            variant="outline-primary"
            style={{ width: "8rem" }}
          >
            View Profile
          </Button>
        </Link>
      </div>
    );
  }
}

export default NavbarProfile;
