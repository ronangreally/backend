export const setFetchStatus = (status = false)=>({
    type: 'SET_FETCH_STATUS',
    status
})
export const setErrorStatus = (status = "")=>({
    type: 'SET_ERROR',
    status
})
export const setSuccessStatus = (status = false)=>({
    type: 'SET_SUCCESS',
    status
})
export const setMessage = (msg="")=>({
    type: 'SET_MESSAGE',
    msg
})