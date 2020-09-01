
const defState = {
    fetching: false,
    error: "",
    success: false,
    message: ""
  }
  
  
  const statusesReducer = (state = defState, action) => {
      switch(action.type) {
          case 'SET_FETCH_STATUS':
              return {...state, fetching: action.status};
          case 'SET_SUCCESS':
              return {...state, success: action.status};
          case 'SET_ERROR':
              const t = {...state, error: action.status}
              return t;
        case 'SET_MESSAGE':
            return {...state, message: action.msg};
          default:
            return state;
      }
  }
  export default statusesReducer;
  