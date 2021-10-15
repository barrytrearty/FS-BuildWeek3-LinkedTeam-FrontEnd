import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
import { IoIosBookmark } from "react-icons/io";
import { BsSquareFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import "./MidSection.css";

class LeftSection extends Component {
  state = {
    user: [],
  };

  componentDidMount = async () => {
    try {
      console.log(this.props.userId.userId);
      const requestOptions = {
        method: "GET",
        // headers: myHeaders,
        redirect: "follow",
      };
      let response = await fetch(
        `https://linkedinteam.herokuapp.com/users/${this.props.userId.userId}`,
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
      <>
        <Card className="topmargin cardstyling feedleftcards">
          <Card.Img
            variant="top"
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F10-ferdinand-stohr-149422-unsplash-1200x298.jpg"
            className="bannerImage"
          />

          <Card.Body className="px-0 py-0">
            <div id="feedprofileheadersection">
              <Link to="/me">
                <div>
                  <div className="d-flex justify-content-center">
                    <Image
                      className="profileimagesmall"
                      src={this.state.user.image}
                      roundedCircle
                    />
                  </div>

                  <Card.Title className="mt-2 mb-0 text-center feedleftsectionheader">
                    {this.state.user.name} {this.state.user.surname}
                  </Card.Title>
                </div>
              </Link>
              <Card.Text className="text-muted mb-3 text-center">
                <small>{this.state.user.title}</small>
              </Card.Text>
            </div>
            <hr className="my-2" />
            <div id="feedprofilelinkssection">
              <Card.Text
                id="profileconnectionssection"
                className="pb-2 px-3 mb-0 mr-0"
              >
                <Link to="/mynetwork">
                  <div>
                    <div className="d-flex justify-content-between pt-2">
                      <small className="text-muted">Connections</small>
                      <small className="text-primary">98</small>
                    </div>

                    <small className="feedboldtext">Grow your network</small>
                  </div>
                </Link>
              </Card.Text>

              <Card.Text className="px-3 mb-2 mr-0" id="viewedprofilesection">
                <Link to="#">
                  <div className="d-flex justify-content-between mt-1 mb-0">
                    <small className="text-muted">
                      Who viewed your profile
                    </small>
                    <small className="text-primary">23</small>
                  </div>
                </Link>
              </Card.Text>

              <hr className="mt-1 mb-0" />
              <Card.Text
                style={{ lineHeight: "16px" }}
                className="pt-2 mb-0 pb-1 px-3 mr-0"
                id="reactivatepremiumsection"
              >
                <Link to="#">
                  <small className="text-muted">
                    Access exclusive tools & insights
                  </small>
                  <p className="my-0 pb-2">
                    <small className="text-dark feedboldtext">
                      <BsSquareFill className="mr-1" size={12} color="orange" />{" "}
                      <span className="align-text-top">Reactivate Premium</span>
                    </small>
                  </p>
                </Link>
              </Card.Text>
              <hr className="my-0" />
              <Card.Text id="feedmyitems" className="pr-3 mr-0">
                <Link to="#">
                  <div>
                    <small className="feedboldtext">
                      {" "}
                      <IoIosBookmark size={20} color="grey" /> My items
                    </small>
                  </div>
                </Link>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        <Card className="cardstyling feedleftcards">
          <Card.Body className="px-0 py-0 feedadminlinks">
            <Link to="#">
              <Image
                className="adminimagesmall pl-3 pt-2 mb-2"
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQGErmO8l_sw9A/company-logo_100_100/0/1628086804749?e=1639008000&v=beta&t=L7d6AQCiS0FsRPC4SwgLOwXk3x5_4eJyXBUyotu4cc8"
              />
            </Link>

            <div className="">
              <Link to="#">
                <Card.Title className="feedleftsectionheader mx-3">
                  Meetinex
                </Card.Title>
              </Link>
            </div>
            <hr
              className="my-0"
              style={{ width: "50px", marginLeft: "15px" }}
            />
            <Card.Text className="mb-2 mt-1">
              <Link to="#">
                <div className="d-flex justify-content-between mt-1 mr-3">
                  <small className="text-muted mx-3">Page notifications</small>
                  <small className="text-primary">0</small>
                </div>
              </Link>
              <Link to="#">
                <div className="d-flex justify-content-between mt-1 mr-3">
                  <small className="text-muted mx-3">Page visitors</small>
                  <small className="text-primary">6</small>
                </div>
              </Link>
            </Card.Text>
            <hr className="my-0" />
            <div id="analyticslink">
              <Link to="#">
                <Card.Text className="text-center py-2">
                  <small className="feedboldtext">See visitor analytics</small>
                </Card.Text>
              </Link>
            </div>
          </Card.Body>
        </Card>

        <Card className="cardstyling feedleftcards mb-4">
          <Card.Body className="px-0 py-0">
            <div className="mx-3 my-2">
              <Link to="#">
                <Card.Text className="mb-1">
                  <small className="text-primary feedboldtext">Groups</small>
                </Card.Text>
              </Link>
              <div className="d-flex justify-content-between">
                <Card.Text className="mb-1">
                  <Link to="#">
                    <small className="text-primary feedboldtext">Events</small>
                  </Link>
                </Card.Text>
                <Link to="#">
                  <div id="eventsplusdiv">
                    <GoPlus className="m-auto" size={16} color="grey" />
                  </div>
                </Link>
              </div>
              <Card.Text className="mb-1">
                <Link to="#">
                  <small className="text-primary feedboldtext">
                    Followed Hashtags
                  </small>
                </Link>
              </Card.Text>
            </div>
            <hr className="my-0" />
            <div id="discovertext">
              <Link>
                <Card.Text className="text-center">
                  <span className="text-muted feedboldtext">Discover more</span>
                </Card.Text>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default LeftSection;
