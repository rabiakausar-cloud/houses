// src/components/Button.jsx
import React from 'react';

export const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-12 py-2 rounded-lg  bg-amber-300 ${className}`}
    >
      {label}
    </button>
  );
};
