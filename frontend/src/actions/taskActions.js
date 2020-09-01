import axios from 'axios';

//GET MULIPLE TASKS
export const getTasks = (tasks)=>{
    return {
        type: 'GET_TASKS',
        tasks
    }
}

export const startGetTasks = ()=>{
    //all i need is auth token in header
    return (dispatch, getState)=>{
        const token =  getState().auth.token;
        console.log("TASKS TOKEN", token);
        return axios.get(
            'http://localhost:3000/tasks/',
            {headers: {
                "Authorization" : `Bearer ${token}` //have to alllow this on server
              }
            }
          )
          .then((response) => {
                dispatch(getTasks(response.data))
            },
            (error) => {
                console.log(error);
            }
          )
    }
}

// EDIT TASK
export const editTask = (task, taskId)=>(
    {
        type: 'EDIT_TASK',
        task,
        taskId
    }
)
export const startEditTask = (task, taskId)=>{
    return (dispatch, getState)=>{
        const token =  getState().auth.token;
        fetch('http://localhost:3000/tasks/' + taskId,{
            method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(task) // body data type must match "Content-Type" header
          })
        .then((res)=>{
            dispatch(editTask(task, taskId))
        })
        .catch((e)=>{
            console.log(e);
        })
      
    }
}
//CREATE TASK
export const createTask = (newTask)=>(
    {
        type: 'CREATE_TASK',
        newTask
    }
)
export const startCreateTask = (newTask)=>{
    return (dispatch, getState)=>{
        const token =  getState().auth.token;
        fetch('http://localhost:3000/tasks/',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newTask) // body data type must match "Content-Type" header
          })
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(createTask(res));     
        })
        .catch((e)=>{
            console.log(e);
        })
    }
}
//DELETE TASK
export const deleteTask = (id)=>(
    {
        type: 'DELETE_TASK',
        id
    }
)

export const startDeleteTask = (id) =>{
    return (dispatch, getState)=>{
        const token =  getState().auth.token;
        fetch('http://localhost:3000/tasks/' + id,{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
        .then((res)=>{
            console.log(res);
            dispatch(deleteTask(id))
            //store will be updated when redirected to dashboard and get tasks
        })
        .catch((e)=>{
            console.log(e);
        })
    }
}