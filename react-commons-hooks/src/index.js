import ReactDom from "react-dom";
import App from "./App";
import AppContextProvider from "./store/AppContextProvider";

ReactDom.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
