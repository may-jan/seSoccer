import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PreMatch from "./components/PreMatch";
import Vote from "./screens/Vote";
import Section from "./screens/Section";
import MyPage from "./screens/MyPage";

import "./App.css";
import { AppContainer, MainContainer } from "./common/style";
import SignUp from "./screens/Signup";
import Login from "./screens/Login";
import { LoginContainer } from "./screens/Auth/style";

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContainer>
          <LoginContainer>
            <Login />
            <SignUp />
          </LoginContainer>

          {/* <PreMatch /> */}

          <Switch>
            <Route path="/" exact component={Section} />
            <Route path="/vote" component={Vote} />
            <Route path="/mypage" component={MyPage} />
          </Switch>
        </MainContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
