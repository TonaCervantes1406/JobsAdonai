import './inicio.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Inicio = (props) => {
  const navigate = useNavigate();
  return (
    <div class="container">
      <h1 class>ELEGIR QUE ERES</h1> 
      <button className="BI"onClick={(e) =>  navigate("/login")}>Trabajador</button>
      <button className="BI"onClick={(e) =>  navigate("/login")}>Consumidor</button>    
    </div>
  )
}
export default Inicio;