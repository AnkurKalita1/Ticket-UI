import React, { useRef } from 'react';
import './UploadAvatar.css';

export default function UploadAvatar({ onFileSelect }) {
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-wrapper" onClick={handleClick}>
      <p className="upload-instruction">Click or drop to upload avatar</p>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden-input"
      />
    </div>
  );
}
