import React, { useState } from 'react';

const FormInput = (props) => {
  const { label, onChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => {
          if (inputProps.name === 'confirmPassword') {
            setFocused(true);
          }
        }}
        value={inputProps.value}
        className={`${
          focused ? 'border-blue-500' : 'border-gray-300'
        } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      />
      {focused && (
        <h3 className="text-red-500 text-xs italic mt-1">{errorMessage}</h3>
      )}
    </div>
  );
};

export default FormInput;
