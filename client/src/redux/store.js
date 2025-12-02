import {configureStore} from '@reduxjs/toolkit';
import GetAllPropertiesReducer from './features/getAllProperties/GetAllPropertiesSlice';

 const store = configureStore({
    reducer: {
        getAllProp : GetAllPropertiesReducer,
    },
});
export default store;
