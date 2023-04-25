import React, { createContext, useState } from "react";

export const IsLoadingContext = createContext();

export const IsLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </IsLoadingContext.Provider>
  );
};

export const useIsLoading = () => {
  const context = React.useContext(IsLoadingContext);
  if (context === undefined) {
    throw new Error("useIsLoading must be used within an IsLoadingProvider");
  }
  return context;
};
