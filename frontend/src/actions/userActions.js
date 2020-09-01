import {setToken, setTokenValidity} from './authActions';
import { setFetchStatus, setErrorStatus, setSuccessStatus, setMessage } from "./statusActions";
import { startGetTasks } from './taskActions';
import { clearToken, setTokenLS } from '../utils/localStorage';
import EditProfile from '../components/EditProfile';

//LOGIN
export const login = (user, token)=>{
    return {
        type: 'LOGIN',
        user
    }
}

export const startLogin = (loginDetails = {})=>{  
    return (dispatch)=>{
        dispatch(setFetchStatus(true))
        //get db user
        // {
        //     "email" : "jill@gmail.com",
        //     "password" : "red1234"
        // }
        const data = {
            email : loginDetails.email,
            password: loginDetails.password
        }
        return fetch('http://localhost:3000/users/login',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
        .then((res)=>res.json())//if error, we will have error: true on response body   
        .then((res)=>{
                if(res.error){
                    console.log(res.error);
                    dispatch(setErrorStatus(res.error));
                    dispatch(setFetchStatus(false))
                    return;
                }
                //dispatch action
                dispatch(login(res.user));
                dispatch(setToken(res.token));
                dispatch(startGetTasks());
                //save also to localstorage
                try {
                    setTokenLS(res.token);
                    dispatch(setToken(res.token));
                } catch (e) {
                    console.log(" startLogin - localStorage.setItem", e);
                }
                dispatch(setFetchStatus(false))
                dispatch(setSuccessStatus(true))
        })
        .catch((e)=>{
            console.log("fetch e" , e);
        })
        //add to store
    }
}
//LOGOUT
export const logout = ()=>{
    return {
        type: 'LOGOUT'
    }
}

export const startLogout = ()=>{
    return (dispatch, getState)=>{
        const token =  getState().auth.token;
   
        fetch('http://localhost:3000/users/logout',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
          .then((res)=>res.json())
        .then((res)=>{
            if(res.success) {
                dispatch(setToken(""))
                clearToken();
                window.location.href = "/"
            }
        })
        .catch((e)=>{
            console.log("e",e);
        })
    }
}

//SIGNUP
export const signup = (user)=>(
    {
        type: 'SIGNUP',
        user
    }
)

export const startSignup = (data)=>{
    return (dispatch)=>{
        fetch('http://localhost:3000/users',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then((r)=>(r.json()))
        .then((r)=>{
            if(r.error) {
                if(r.error.includes('duplicate')){
                    dispatch(setErrorStatus('email already taken!'))
                }
            }
            dispatch(signup(r.user));
            dispatch(setToken(r.token));
             //save also to localstorage
             setTokenLS(r.token);
        })
        .catch((e)=>{
            console.log("signup err", e);
        })
    }
}
//DELETE USER
export const startDeleteUser = ()=>{
    return (dispatch, getState)=>{
        const token = getState().auth.token
        fetch('http://localhost:3000/users/me',{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        })
        .then((r)=>(r.json()))
        .then((r)=>{
            if(r.success) {
                dispatch(setMessage('user_deleted'))
                window.location.href = "/"
            }
            if(r.error) {
                dispatch(setMessage('user_not_deleted'))
            }
            // dispatch(updateUserStatus('deleted_user'));
        })
        .catch((e)=>(console.log(e)))
    }
}
//SET PROFILE IN STORE
export const setProfile = (user)=>(
    {
        type: 'SET_USER',
        user
    }
)
//READ PROFILE: If we have a token in local storage, use it to get user details and set in store
export const startReadProfile = (token)=>{
    return (dispatch, getState)=>{
        fetch('http://localhost:3000/users/me',{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((r)=>r.json())
        .then((r)=>{
            if(r.error) {
                clearToken()
                return;
            }
            dispatch(setProfile(r));
            dispatch(setToken(token));
            dispatch(startGetTasks());
        })
        .catch((e)=>console.log(e));
    }
}

//UPDATE PROFILE/USER
export const editProfile = (data)=>({
   type: 'UPDATE_USER',
   data

})

export const startEditProfile = (data)=>{
    return (dispatch, getState)=>{
        const token = getState().auth.token;
        return fetch('http://localhost:3000/users/me', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        .then((r)=> r.json())
        .then((r)=> {
            if(r.error === 'Invalid updates') {
                dispatch(setMessage('Invalid updates'))
            }
           else {
            dispatch(setMessage(`data changed`))
            dispatch(editProfile(data))
           }
        })
        .catch((e)=>{
            console.log(e);
        })
    }
}
