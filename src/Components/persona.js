import React from 'react'
import User from '../Img/user.png'
import { useNavigate } from 'react-router-dom'
import './persona.css';

export const Persona = (props) => {
  const navigate = useNavigate();
    const personaData = {
        nombre: 'Nombre de la Persona',
        trabajo: 'Trabajo Actual:',
        calificacion: 5, // Puedes usar un valor del 1 al 5, por ejemplo
        descripcion: 'Descripción de la Persona:',
        referencias: 'Referencias de la Persona:',
        reseñas: [
          'Buena persona, siempre cumple con su trabajo.',
          'Excelente habilidad para trabajar en equipo.',
        ],
      };
    const generateStars = () => {
        const stars = Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < personaData.calificacion ? 'star-filled' : 'star-empty'}>★</span>
        ));
        return stars;
      };
    return(
        <div className="persona-container">
        <div className="persona-header">
          <img src={User} alt="User" className="user-image" />
          <div>
            <h2>{personaData.nombre}</h2>
            <p>{personaData.trabajo}</p>
          </div>
        </div>
        <div className="calificacion-container">{generateStars()}</div>
        <p>{personaData.descripcion}</p>
        <p>{personaData.referencias}</p>
        <div className="reseñas-container">
          <h3>Reseñas:</h3>
          <ul>
            {personaData.reseñas.map((resena, index) => (
              <li key={index}>{resena}</li>
            ))}
          </ul>
        </div>
        <button className="contactar-button" onClick={(e) =>  navigate("/chat")}>Contactar</button>
      </div>
    )
}
export default Persona;