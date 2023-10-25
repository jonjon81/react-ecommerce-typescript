import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import React, { FC } from 'react';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default PrivateRoute;