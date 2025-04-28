/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export const UserContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
} | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
