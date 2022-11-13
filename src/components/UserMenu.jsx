import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';

function UserMenu() {
  const name = useSelector(state => state.auth.user?.name);
  const email = useSelector(state => state.auth.user?.email);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <ul>
        <li>
          <p>Hello {name}</p>
          <p>{email}</p>
          <button type="button" onClick={handleLogOut}>
            Logout
          </button>
        </li>
      </ul>
    </>
  );
}

export default UserMenu;
