import React from "react";

const SelectedItemsContext = React.createContext();

const SelectedItemsProvider = ({ children }) => {
  const [val, setVal] = React.useState(0);
  const [selectedItems, setSelectedItems] = React.useState([
    // {
    //   id: 1,
    //   name: "Bunny Hats",
    //   desription: "mens skinny jeans",
    //   price: 10.0,
    //   qty: 2,
    // },
  ]);
  return (
    <SelectedItemsContext.Provider
      value={{ val, setVal, selectedItems, setSelectedItems }}
    >
      {children}
    </SelectedItemsContext.Provider>
  );
};

export { SelectedItemsContext, SelectedItemsProvider };
