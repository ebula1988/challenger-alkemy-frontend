import { configureStore } from "@reduxjs/toolkit";
import ingresosReducer  from './slices/ingresosSlice';
import egresosReducer  from './slices/egresosSlice';

 export const store = configureStore({
    
    reducer : 
    { 
        ingresos : ingresosReducer,
        egresos : egresosReducer
    },
    //reducer : {egresos : egresosReducer},
    
});

