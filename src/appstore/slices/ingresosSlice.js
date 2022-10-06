import { createSlice } from "@reduxjs/toolkit";
const ingresosInitialState = [
    {
      id: "1",
      concepto: "salario",
      monto: 1000,
      fecha: "2022/10/01"
    },
    {
      id: "2",
      concepto: "horas extras",
      monto: 300,
      fecha: "2022/10/01"
    },
    {
      id: "3",
      concepto: "trabajo extra",
      monto: 100,
      fecha: "2022/10/01"
    },
   
  ];



const ingresosSlice = createSlice ({
    name: "ingresos",
    initialState : ingresosInitialState,
    
    reducers: { //funciones que van a cambiar el estado
      addIngreso: (state, action) =>{
        console.log(state, action)
      }


    }

})


export const  {addIngreso} = ingresosSlice.actions
export default ingresosSlice.reducer