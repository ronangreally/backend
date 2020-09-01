import React from 'react';
import AppRouter from './AppRouter';
// import { connect } from 'react-redux';
import {checkLsForToken} from '../utils/localStorage';


const Auth = ()=>{
    //will only run on refresh
    const tokenLS = checkLsForToken();
    console.log("CHECK LS FOR TOKEN", tokenLS);
    if(tokenLS) {
        console.log("LOCALSTORAGE TOKEN FOUND", tokenLS);
        //read profile using token, if valid set profile, set token and get tasks
    } else{
        console.log("NOT AUTHORIZED");
    }
    return(<AppRouter />)
}

// const mapStateToProps = (state)=>({
//     isAuthorized: state.auth.isAuthorized
// })

// const mapDispatchToProps = (dispatch)=>({
//     readProfile: (token)=>(dispatch(startReadProfile(token)))
// })


// export default connect(mapStateToProps, mapDispatchToProps)(Auth)
export default Auth