import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileTopCard from "./components/ProfileTopCard";
import AfterMain from "./components/AfterMain";
import PeopleSection from "./components/PeopleSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProfileSection from "./components/ProfileSection";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import MeSection from "./components/MeSection";
import NewsFeed from "./components/NewsFeed";
import ScrollableNav from "./components/ScrollableNav";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Container>
          {/* needs profile id  */}

          {/* <Route
            path="/linkedin/:id"
            exact
            render={(routerProps) => <MeSection {...routerProps} />}
          />
          <Route path="/profile:id">
            <Row>
              <Col xs={12} sm={12} lg={8} className="px-0">
                <ProfileTopCard />
                <AfterMain />
              </Col>

              <Col xs={12} sm={12} lg={4} className="px-3">
                <PeopleSection sectionTitle="People also view" />
                <PeopleSection sectionTitle="People you may know" />
              </Col>
            </Row>
          </Route> */}
          {/* we are James for now (me) */}

          {/* needs profile id  */}
          <Route
            path="/profile/:id"
            render={(routerProps) => <ProfileSection {...routerProps} />}
          />

          <Route exact path="/">
            {<Redirect to="/feed" />}
          </Route>
          <Route
            path="/me"
            exact
            render={(routerProps) => <MeSection {...routerProps} />}
          />

          <Route path="/feed" exact component={NewsFeed} />
        </Container>
      </Switch>
      {window.location.pathname !== "/feed" ? <Footer /> : null}
    </Router>
  );
}

export default App;
