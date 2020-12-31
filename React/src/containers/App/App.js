import React from 'react'
import { LoginForm } from '../../components/LoginForm/LoginForm';
import Navbar from '../../components/Navbar/Navbar';
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <LoginForm />
    </div>
  )
}

export default App;


