import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PreMatch from "./components/PreMatch";
import Login from "./screens/Login";
import Vote from "./screens/Vote";
import Section from "./screens/Section";
import MyPage from "./screens/MyPage";

import "./App.css";
import { AppContainer, MainContainer } from "./common/style";

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContainer>
          <Login />
          <PreMatch />

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
