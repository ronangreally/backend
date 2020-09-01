
//LOGIN
// export const login = (user, token)=>{
//     return {
//         type: 'LOGIN',
//         user
//     }
// }

// export const startLogin = (loginDetails = {})=>{  
//     return (dispatch)=>{
//         dispatch(setFetchStatus(true))
//         //get db user
//         // {
//         //     "email" : "jill@gmail.com",
//         //     "password" : "red1234"
//         // }
//         const data = {
//             email : loginDetails.email,
//             password: loginDetails.password
//         }
//         return fetch('http://localhost:3000/users/login',{
//             method: 'POST', // *GET, POST, PUT, DELETE, etc.
//             mode: 'cors',
//             headers: {
//               'Content-Type': 'application/json'
//               // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: JSON.stringify(data) // body data type must match "Content-Type" header
//           })
//         .then((res)=>res.json())//if error, we will have error: true on response body   
//         .then((res)=>{
//                 if(res.error){
//                     console.log(res.error);
//                     dispatch(setErrorStatus(res.error));
//                     dispatch(setFetchStatus(false))
//                     return;
//                 }
//                 //dispatch action
//                 dispatch(login(res.user));
//                 dispatch(setToken(res.token));
//                 dispatch(startGetTasks());
//                 //save also to localstorage
//                 try {
//                     setTokenLS(res.token);
//                     dispatch(setToken(res.token));
//                 } catch (e) {
//                     console.log(" startLogin - localStorage.setItem", e);
//                 }
//                 dispatch(setFetchStatus(false))
//                 dispatch(setSuccessStatus(true))
//         })
//         .catch((e)=>{
//             console.log("fetch e" , e);
//         })
       
//     }
// }
