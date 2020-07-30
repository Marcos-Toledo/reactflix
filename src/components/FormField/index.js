import React from "react";

const FormField = ({ label, type, name, value, onChange }) => {
  return (
    type != 'textarea' ?
      <div>
        <label>
          { label }
          <input
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    :
      <div>
        <label>
          { label }
          <textarea
            name={ name }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
  );
} 

export default FormField;