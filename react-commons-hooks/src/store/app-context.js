import React from "react";

const AppContext = React.createContext({
  items: [],
  add: (item) => {},
  update: (item) => {},
  delete: (id) => {},
});

export default AppContext;
