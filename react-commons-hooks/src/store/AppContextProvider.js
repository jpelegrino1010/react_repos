import { useReducer, useState } from "react";
import AppContext from "./app-context";

const defaultItems = { items: [] };
const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newItems = [...state.items, action.item];
      return { ...state, items: newItems };
  }

  return state;
};

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(itemReducer, defaultItems);

  const addItem = (item) => {
    dispatch({ type: "ADD", item });
  };

  const updateItem = (item) => {
    console.log(item);
  };

  const deleteItem = (id) => {
    console.log(id);
  };

  const itemContext = {
    items: state.items,
    add: addItem,
    update: updateItem,
    delete: deleteItem,
  };

  return (
    <AppContext.Provider value={itemContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
