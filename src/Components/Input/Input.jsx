import React from 'react';
import './Input.css';

function Input({ label, name, type = 'text', placeholder, value, onChange }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="input-label">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}

export default Input;
