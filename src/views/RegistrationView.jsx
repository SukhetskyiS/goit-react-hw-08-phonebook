import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registation } from 'redux/auth/authOperation';

export const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(registation({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label htmlFor="name">
        Name
        <input
          className="input-form"
          type="text"
          name="name"
          id="name"
          value={name}
          required
          onChange={handleChange}
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          className="input-form"
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={handleChange}
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          className="input-form"
          type="password"
          name="password"
          id="password"
          value={password}
          required
          onChange={handleChange}
        />
      </label>

      <button type="submit">Registration</button>
    </form>
  );
};
