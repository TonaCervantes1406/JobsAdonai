import React from 'react'
import { useNavigate } from 'react-router-dom'
import './register2.css';


export const Register2 = (props) => {
    const navigate = useNavigate();
    return (
        <div className="register2-container">
        <div className="register2-header">
          <h1>Registro</h1>
        </div>
        <div className="register2-form">
          <input type="text" id="job" name="job" placeholder="Seleccione su oficio" required/>
          <input type="text" id="ine" name="ine" placeholder="INE" required/>
          <input type="text" id="curp" name="curp" placeholder="CURP" required/>
          <input type="text" id="rfc" name="rfc" placeholder="RFC" required/>
          <textarea id="references" name="references" placeholder="Referencias"></textarea>
          <div className="register2-options">
            <button className="register2-confirm-button" onClick={(e) =>  navigate("/persona")}>Confirmar</button>
          </div>
        </div>
      </div>
    );
  }
export default Register2;