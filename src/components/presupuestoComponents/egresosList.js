import {useSelector} from 'react-redux'
import React, {useState} from 'react'


const EgresosList = () => {
    const egresosState = useSelector(state => state.egresos)

    const [egresos, setEgresos] = useState(egresosState)
    console.log(egresos)



  return (
    <div >
      <header >
        <h1>Egresos ({egresos.length})</h1> 
      </header>

      <div >
        {egresos.map((egreso) => (
          <div  key={egreso.id}>
            
            <div>{egreso.concepto}</div>
            <div>{egreso.monto}</div>
            <div>{egreso.fecha}</div>
            <br></br>
          </div>
          
        ))}
      </div>
    </div>

      
  )
}

export default EgresosList