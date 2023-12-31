import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface User {
  name: string;
  email: string;
}

interface UserContextProps {
  loginWithRedirect: () => void;
  logout: () => void;
  myUser: User | null;
  isLoading: boolean;
  error: any;
}

const UserContext = React.createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loginWithRedirect, logout, user, isLoading, error } = useAuth0();
  const [myUser, setMyUser] = useState<User | null>(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, myUser, isLoading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};