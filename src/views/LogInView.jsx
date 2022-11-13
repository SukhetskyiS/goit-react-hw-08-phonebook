import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label htmlFor="email">
        Email
        <input
          className="input-form"
          id="email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          className="input-form"
          id="password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
      </label>

      <button type="submit">Log In</button>
    </form>
  );
};
