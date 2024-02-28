import React from 'react';
import './search.css';

const personas = [
  {
    id: 1,
    nombre: 'Persona 1',
    trabajo: 'Trabajo 1',
    calificacion: 4,
    descripcion: 'Descripción de la Persona 1',
    referencias: 'Referencias de la Persona 1',
    reseñas: ['Buena persona, siempre cumple con su trabajo.', 'Excelente habilidad para trabajar en equipo.'],
  },
  {
    id: 2,
    nombre: 'Persona 2',
    trabajo: 'Trabajo 2',
    calificacion: 3,
    descripcion: 'Descripción de la Persona 2',
    referencias: 'Referencias de la Persona 2',
    reseñas: ['Buen trabajo en equipo.', 'Cumple con los plazos de entrega.'],
  },
  // Puedes agregar más personas según sea necesario
];

const Search = () => {
  return (
    <div className="search-page-container">
      <h1>Explora Nuestros Profesionales</h1>
      <div className="personas-container">
        {personas.map((persona) => (
          <div key={persona.id} className="persona-card">
            <div className="card-info">
              <h2>{persona.nombre}</h2>
              <p>{persona.trabajo}</p>
              <p>{persona.descripcion}</p>
              <div className="calificacion-container">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className={index < persona.calificacion ? 'star-filled' : 'star-empty'}>★</span>
                ))}
              </div>
              <button className="contactar-button">Contactar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;