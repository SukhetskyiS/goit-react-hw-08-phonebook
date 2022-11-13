import { PhoneBook } from 'views/ContactsView';
import { Login } from 'views/LogInView';
import { Registration } from 'views/RegistrationView';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUser } from 'redux/auth/authOperation';
import { Layout } from './Layout';
import AppBar from './AppBar';
import { UserData } from './UserData';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<UserData />}>
              <Route path="/contacts" element={<PhoneBook />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
