import React from 'react'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import './App.css'
import { Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
import ResetPassword from '../../components/ResetPassword/ResetPassword'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route exact path='/user/registration' component={RegistrationPage} />
                <Route exact path='/user/reset-password' component={ResetPassword} />
            </Switch>
        </div>
    )
=======
import SearchResults from '../../routes/SearchResults/SearchResults'
import Nav from '../../components/Navbar/Navbar'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/search-results' component={SearchResults} />
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/user/registration' component={RegistrationPage} />
      </Switch>
    </div>
  )
>>>>>>> bb1282548cc337a36fcd8d6bcb4f5f3ea1cdd4de
}

export default App;


