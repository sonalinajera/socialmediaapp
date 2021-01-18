import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavigationBar from '../../components/Navbar/Navbar'
import HomePageContainer from '../../routes/HomePage/HomePageContainer'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import Email from '../../components/ResetPassword/Email/Email'
import ResetPassword from '../../components/ResetPassword/ResetPassword/ResetPassword'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import UserSettings from '../../routes/UserSettings/UserSettings'
import ProfilePageContainer from '../../routes/ProfilePage/ProfilePageContainer'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <section className="App">
      <NavigationBar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Switch>
        <Route exact path='/user/home' component={HomePageContainer} />
        <Route exact path='/user/profile' component={ProfilePageContainer} />
        <Route exact path='/' render={(routerProps) => {
          console.log(routerProps)
          return (
            <LoginPage location={routerProps} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          )
        }} />
        <Route exact path='/user/registration' component={RegistrationPage} />
        <Route exact path='/user/email-reset-password' component={Email} />
        <Route exact path='/user/reset-password' component={ResetPassword} />
        <Route exact path='/user/settings' component={UserSettings} />
        <Route component={NotFoundPage} />
      </Switch>
    </section>
  )
}

export default App;