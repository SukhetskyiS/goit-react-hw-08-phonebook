import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export const PublicRoute = () => {
  const token = useSelector(getIsLoggedIn);

  return token ? <Navigate to="/contacts" /> : <Outlet />;
};
export default PublicRoute;
