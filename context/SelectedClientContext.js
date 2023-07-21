import React from "react";

const SelectedClientContext = React.createContext();

const SelectedClientProvider = ({ children }) => {
  const [selectedClient, setSelectedClient] = React.useState(null);
  return (
    <SelectedClientContext.Provider
      value={{ selectedClient, setSelectedClient }}
    >
      {children}
    </SelectedClientContext.Provider>
  );
};

export { SelectedClientContext, SelectedClientProvider };
