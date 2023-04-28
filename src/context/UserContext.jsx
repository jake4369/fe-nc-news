import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUserState] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );

  const setLoggedInUser = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setLoggedInUserState(user);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
