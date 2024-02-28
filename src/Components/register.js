import React from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css';

export const Register = (props) => {
  const navigate = useNavigate();
    return (
      <div className="mi-container">
      <div className="mi-header">
        <h1>Crea tu cuenta</h1>
      </div>
      <div className="mi-register-container">
        <div className="mi-register-form">
          <input type="email" id="email" name="email" placeholder="Email" required/>
          <input type="text" id="name" name="name" placeholder="Nombre" required/>
          <input type="password" id="password" name="password" placeholder="Contraseña" required/>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirma tu contraseña" required/>
          <div className="mi-options">
            <button className="mi-documents-button" onClick={(e) =>  navigate("/register2")}>Documentos</button>
            <button className="mi-create-account-button" onClick={(e) =>  navigate("/search")}>Crea cuenta</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
export default Register;    