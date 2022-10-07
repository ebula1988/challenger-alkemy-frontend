import { useDispatch} from "react-redux";
import React, {useState} from 'react'
import { addEgreso } from "../../appstore/slices/egresosSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";



const EgresosForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [egresosform, setEgresosForm] = useState({
        id: "",
        concepto : "",
        monto : "",
        fecha : ""
    })

    const handleChange = (e)=>{
      setEgresosForm({
            ...egresosform,
            [e.target.name]: e.target.value,
          })
    }

   const handleSubmit = (e) =>{
    e.preventDefault();
  
    dispatch(addEgreso({
      ...egresosform,
      id: uuid()
    }))

    navigate("/egresos");

   }


  return (
    <form onSubmit={handleSubmit}   >
      <label >Form Egresos:</label>
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

export default EgresosForm