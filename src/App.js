import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import PreMatch from './components/PreMatch'
import Vote from './screens/Vote'
import Section from './screens/Section'
import MyPage from './screens/MyPage'

import './App.css'
import { AppContainer, MainContainer } from './common/style'
import { Login } from './screens/Login'
import { SignUp } from './screens/Login'
import { MyProfile } from './screens/Login'
import { LoginContainer } from './screens/Auth/style'
import useAuth from './context/auth-context'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContainer>
          <LoginContainer>
            {isLoggedIn ? (
              <MyProfile />
            ) : (
              <React.Fragment>
                <Login />
                <SignUp />
              </React.Fragment>
            )}
          </LoginContainer>

          <PreMatch />

          <Switch>
            <Route path="/" exact component={Section} />
            <Route path="/vote" component={Vote} />
            <Route path="/mypage" component={MyPage} />
          </Switch>
        </MainContainer>
      </AppContainer>
    </Router>
  )
}

export default App
