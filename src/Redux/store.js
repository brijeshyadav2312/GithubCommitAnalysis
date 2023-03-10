import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addDataReducer from './Reducers/addDataReducer';
import pageNumber from './Reducers/pageNumber';

const rootReducer = combineReducers({
    userdata: addDataReducer,
    pageNum: pageNumber
})

const store = configureStore({
    reducer: rootReducer
})

export default store;