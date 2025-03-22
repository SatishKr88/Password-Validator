import React, { useState } from 'react';
import validator from 'validator';
import './style.css';

function Home() {
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage('Password is strong');
    } else {
      setErrorMessage('Password is not strong');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Check Password</h2>
      <label>
        Password:
        <input
          className="name"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input className="submit" type="submit" value="Submit" />
      <div>{errorMessage}</div>
    </form>
  );
}

export default Home;
