import React, { useState } from 'react';
import FormInput from './components/FormInput';

export default function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const doSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: 'username',
      placeholder: 'Username',
      type: 'text',
      errorMessage: "Username shouldn't contain special characters",
      pattern: '^[A-Za-z0-9]{3,16}$',
      label: 'Username',
    },
    {
      id: 2,
      name: 'email',
      placeholder: 'Email',
      type: 'text',
      errorMessage: 'Please enter a valid email address',
      label: 'Email',
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Sorry, passwords didn't match",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={doSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
