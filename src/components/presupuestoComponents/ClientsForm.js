import { useDispatch} from "react-redux";
import React, {useState} from 'react'
import { addTask } from "../../features/clients/clientsSlice";
import { v4 as uuid } from "uuid";



const ClientsForm = () => {
    const dispatch = useDispatch();

    const [clientsform, setClientsForm] = useState({
        nombres : "",
        dni : "",
        telefono : ""
    })

    const handleChange = (e)=>{
        setClientsForm({
            ...clientsform,
            [e.target.name]: e.target.value,
          })
    }

   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(clientsform)

   }


  return (
    <form onSubmit={handleSubmit}   >
      <label >Form Clients:</label>
      <input
        type="text"
        name="nombres"
        onChange={handleChange}
        placeholder=" Nombres"
        autoFocus
      />
      <input
        type="text"
        name="dni"
        onChange={handleChange}
        placeholder="No Identificacion"
        autoFocus
      />

<input
        type="text"
        name="telefono"
        onChange={handleChange}
        placeholder="Telefono"
        autoFocus
      />
      
      <button type="submit" >Submit</button>
    </form>
  )
}

export default ClientsForm