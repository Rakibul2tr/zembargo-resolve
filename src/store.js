import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { pageListReducer } from './reducers/pageReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
    //this will contain our reducers
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    pageList:pageListReducer,
})
const userInfoFromStorage =window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : null;
const inisialState = {
    userLogin:{userInfo:userInfoFromStorage}
};

const middlware = [thunk];

const store = createStore(
    reducer,
    inisialState,
    composeWithDevTools(applyMiddleware(...middlware))
);
export default store;