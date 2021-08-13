import React from 'react'
import './App.css';
import OnlineFees from './OnlineFees/onlineFees'
import StudentRegister from './Student/StudentRegiser/studentRegister'
import AdminLogin from './AdminLogin/adminlogin'
import AdminSignup from './AdminLogin/adminSignup.js'
import ImageUpload from './ImageUpload/imageUpload'
import Home from './Home/home'

import {
  BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">

      <Router>
        
      <div className="navbar navbar-expand-sm navbar-light bg-light  mh-20">
        <ul className="nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/onlineFees" >Online Fees Payment </Link>
          </li>
                
        </ul>
      </div>

      <div className="navbar navbar-expand-sm navbar-light bg-light">
        <ul className="nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/home" >Home</Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/regStudent" >Register Student</Link>
          </li>
          <li className="navbar-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Student
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="nav-link" to="/regStudent" >Student Registration</Link>
        <Link className="nav-link" to="/home" >Attendence</Link>
        <Link className="nav-link" to="/home" >Exam & Scores</Link>
        <Link className="nav-link" to="/home" >Edit Student</Link>
        <Link className="nav-link" to="/imageUpload" >Image upload</Link>         
        </div>
      </li>
      <li className="navbar-item  float-right">
            <Link className="nav-link " to="/adminlogin" >Admin login</Link>
          </li>
          <li className="navbar-item  float-right">
            <Link className="nav-link " to="/adminsignup" >Admin SignUp</Link>
          </li>
        </ul>
      </div>
      
      <Switch>
          <Route path="/onlineFees">
            <OnlineFees />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/regStudent">
            <StudentRegister />
          </Route>
          <Route path="/adminlogin">
            <AdminLogin />
          </Route>
          <Route path="/adminsignup">
            <AdminSignup />
          </Route>
          <Route path="/imageUpload">
            <ImageUpload />
          </Route>
          <Route path="/">
            <Home />
          </Route>

          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
