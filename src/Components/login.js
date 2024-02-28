import React from 'react'
import logo from '../Img/Logo.PNG'
import { Link } from 'react-router-dom'
import './login.css';

export const login = () => {
    return (
      <div className="login-page">
      <div class="login-container">
        <div class="header">
          <img src={logo} alt="Logo de la empresa" class="company-logo"/>
          <h1 class="company-name">Nombre de la Empresa</h1>
        </div>
        <div class="login-box">
          <input type="email" id="email" name="email" placeholder='Email' required/>
        
          <input type="password" id="password" name="password" placeholder='Contraseña' required/>
        
          <div class="options">
            <label for="remember">Recordar valores:</label>
            <input type="checkbox" id="remember" name="remember"/>
            <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
        
          <button onClick={login} class="login-button"><Link to="/search">Iniciar sesión</Link></button>
        
          <p class="create-account">¿No tienes una cuenta? <Link to="/register">Crea una cuenta</Link></p>
        </div>
      </div>
    </div>

    )
  }
  export default login;