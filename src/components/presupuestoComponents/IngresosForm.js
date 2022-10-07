import { useDispatch} from "react-redux";
import React, {useState} from 'react'
import { addIngreso } from "../../appstore/slices/ingresosSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";



const IngresosForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ingresosform, setIngresosForm] = useState({
        id: "",
        concepto : "",
        monto : "",
        fecha : ""
    })

    const handleChange = (e)=>{
      setIngresosForm({
            ...ingresosform,
            [e.target.name]: e.target.value,
          })
    }

   const handleSubmit = (e) =>{
    e.preventDefault();
  
    dispatch(addIngreso({
      ...ingresosform,
      id: uuid()
    }))

    navigate("/ingresos");

   }


  return (
    <form onSubmit={handleSubmit}   >
      <label >Form Ingresos:</label>
      <input
        type="text"
        name="concepto"
        onChange={handleChange}
        placeholder=" Concepto"
        autoFocus
      />
      <input
        type="text"
        name="monto"
        onChange={handleChange}
        placeholder="Monto"
        autoFocus
      />

<input
        type="date"
        name="fecha"
        onChange={handleChange}
       
        autoFocus
      />
      
      <button type="submit" >Submit</button>
    </form>
  )
}

export default IngresosForm