// src/components/InputField.jsx
import React from 'react';

export const Input= ({  type , name, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col mb-4">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
