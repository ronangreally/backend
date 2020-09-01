import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk'
import demoReducer from '../reducers/demoReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const combined = combineReducers({
    reducerName: demoReducer
})

const store = createStore(combined, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store