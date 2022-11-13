import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsLoggedIn } from 'redux/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <nav className="navbar">
        <NavLink end to="/">
          Home
        </NavLink>
        {!isLoggedIn && (
          <ul>
            <li>
              <NavLink to="/register">Registration</NavLink>
            </li>
            <li>
              <NavLink to="/login">Sign In</NavLink>
            </li>
          </ul>
        )}
      </nav>
      {isLoggedIn && (
        <>
          <UserMenu />
          <NavLink to="/contacts">Contacts</NavLink>
        </>
      )}
    </header>
  );
};
