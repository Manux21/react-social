import { createContext, useEffect, useState } from "react";
import AvatarMike from "../img/Avatar.png";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
     JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // to do
    setCurrentUser({id: 1, name: 'Artem Egorov', profilePicture: AvatarMike})
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser, login}}>
      {children}
    </AuthContext.Provider>
  );
};