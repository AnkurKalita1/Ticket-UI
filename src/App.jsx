// src/App.js
import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import UploadAvatar from './Components/UploadAvatar/UploadAvatar';
import TicketCard from './Components/TicketCard/TicketCard';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    avatar: null,
  });

  const [showTicket, setShowTicket] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (file) => {
    setFormData((prev) => ({ ...prev, avatar: file }));
  };

  const handleGenerate = () => {
    if (formData.name && formData.email && formData.github && formData.avatar) {
      setShowTicket(true);
    } else {
      alert('Please fill all fields and upload an avatar.');
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Coding Conf 2025 Ticket Generator</h1>
      <div className="form-section">
        <Input
          label="Name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="GitHub Username"
          name="github"
          placeholder="johndoe"
          value={formData.github}
          onChange={handleChange}
        />
        <UploadAvatar onFileSelect={handleFileSelect} />
        <Button text="Generate Ticket" onClick={handleGenerate} />
      </div>
      {showTicket && (
        <TicketCard
          name={formData.name}
          email={formData.email}
          github={formData.github}
          avatar={formData.avatar}
        />
      )}
    </div>
  );
}

export default App;
