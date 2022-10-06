import {useSelector} from 'react-redux'
import React, {useState} from 'react'


const IngresosList = () => {
    const ingresosState = useSelector(state => state.ingresos)

    const [ingresos, setIngresos] = useState(ingresosState)
    console.log(ingresos)



  return (
    <div >
      <header >
        <h1>ingresos ({ingresos.length})</h1> 
      </header>

      <div >
        {ingresos.map((ingreso) => (
          <div  key={ingreso.id}>
            
            <div>{ingreso.concepto}</div>
            <div>{ingreso.monto}</div>
            <div>{ingreso.fecha}</div>
            <br></br>
          </div>
          
        ))}
      </div>
    </div>

      
  )
}

export default IngresosList