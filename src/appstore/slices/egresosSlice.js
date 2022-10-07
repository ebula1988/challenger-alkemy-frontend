import { createSlice } from "@reduxjs/toolkit";
const egresosInitialState = [
    {
      id: "1",
      concepto: "arriendo",
      monto: 200,
      fecha: "2022/10/01"
    },
    {
      id: "2",
      concepto: "alimentacion",
      monto: 300,
      fecha: "2022/10/01"
    },
    {
      id: "3",
      concepto: "servicios publicos",
      monto: 100,
      fecha: "2022/10/01"
    },
   
  ];



const egresosSlice = createSlice ({
    name: "egresos",
    initialState : egresosInitialState,
    
    reducers: { //funciones que van a cambiar el estado
      addEgreso: (state, action) =>{
        state.push(action.payload);
      }


    }

})


export const  {addEgreso} = egresosSlice.actions
export default egresosSlice.reducer