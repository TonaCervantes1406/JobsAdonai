import React from 'react';
import User from '../Img/user.png';
import './chat.css';

export const Chat = () => {
  const messages = [
    { text: 'Hola, ¿cómo estás?', sender: 'user' },
    { text: '¡Hola! Estoy bien, ¿y tú?', sender: 'persona' },
    { text: 'Me gustaría saber más sobre tu experiencia laboral.', sender: 'user' },
    { text: 'Claro, estaré encantado de compartirlo contigo.', sender: 'persona' },
  ];

  return (
    <div className="chat-container">
      <div className="persona-header">
        <img src={User} alt="User" className="user-image" />
        <div>
          <h2>Nombre de la Persona</h2>
          <p>Trabajo Actual:</p>
        </div>
      </div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" placeholder="Escribe tu mensaje..." />
        <button className="send-button">Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
