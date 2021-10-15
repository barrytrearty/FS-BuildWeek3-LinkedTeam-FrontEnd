import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ProfileTopCard from "./components/ProfileTopCard";
// import AfterMain from "./components/AfterMain";
// import PeopleSection from "./components/PeopleSection";
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
// import ScrollableNav from "./components/ScrollableNav";

function App() {
  const userId = "6169887fd528a3138bcccdfe";

  return (
    <Router>
      <Navbar userId={userId} />

      <Switch>
        <Container>
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
            render={(routerProps) => (
              <MeSection {...routerProps} userId={userId} />
            )}
          />

          {/* <Route path="/feed" exact component={NewsFeed} /> */}
          <Route
            path="/feed"
            exact
            render={(routerProps) => (
              <NewsFeed {...routerProps} userId={userId} />
            )}
          />
        </Container>
      </Switch>
      {window.location.pathname !== "/feed" ? <Footer /> : null}
    </Router>
  );
}

export default App;
