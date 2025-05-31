import React from 'react';
import './TicketCard.css';

function TicketCard({ name, email, github, avatar }) {
  const avatarURL = avatar ? URL.createObjectURL(avatar) : 'https://via.placeholder.com/100';

  return (
    <div className="ticket-card">
      <div className="ticket-left">
        <img src={avatarURL} alt="Avatar" className="ticket-avatar" />
      </div>
      <div className="ticket-right">
        <h2 className="ticket-name">{name}</h2>
        <p className="ticket-email">{email}</p>
        <p className="ticket-github">@{github}</p>
        <div className="ticket-footer">CODING CONF 2025</div>
      </div>
    </div>
  );
}

export default TicketCard;
