import React from 'react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  
export default ()=>{
    return (
    <>
    <Router>
    <NavBar />
        <Switch>
            <Route exact path="/" component={Main}/>
        </Switch>
        <Switch>
            <Route path="/add" component={Form}/>
        </Switch>
        <Switch>
            <Route path="/edit/:id" component={Form}/>
        </Switch>
    </Router>
    </>
  )
}


//every private component checks for authentification, if not logged in, redirect to Profile page

{/*
    import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from "react";
import Dashboard from './Dashboard';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Info from './Info';
import TaskEdit from './TaskEdit';
import TaskCreate from './TaskCreate';
import Home from './Home';
import EditProfile from './EditProfile';

export default function AppRouter() {
    return (
        <>
        <Router>  
           <Switch>
                <PublicRoute 
                    exact={true}
                    path="/" 
                    component={Home}
                />
                <PrivateRoute 
                    exact={true}
                    path="/profile" 
                    component={Profile}
                />
                <PrivateRoute 
                    path="/profile/edit-:field"
                    component={EditProfile}
                />
                 <PrivateRoute
                    exact={true}
                    path="/dashboard"
                    component={Dashboard}
                />
                 <PrivateRoute 
                    path="/dashboard/:id"
                    component={TaskEdit}
                />
                 <PrivateRoute 
                    path="/task_create"
                    component={TaskCreate}
                />
                <PublicRoute 
                    path="/login" 
                    component={Login}
                />
                <PublicRoute 
                    path="/signup" 
                    component={Signup}
                />*/}
                {/* One Random Route */}
               {/*  <Route
                component={Info}
                />
               
            </Switch>
        </Router>
        </>
    )
}*/}