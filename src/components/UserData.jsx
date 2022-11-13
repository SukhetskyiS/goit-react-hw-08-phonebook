import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export const UserData = () => {
  const token = useSelector(getIsLoggedIn);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
