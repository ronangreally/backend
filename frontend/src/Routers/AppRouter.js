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

{/* <>
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
        />
        {/* One Random Route 
        <Route
        component={Info}
        />
       
    </Switch>
</Router>
</> */}