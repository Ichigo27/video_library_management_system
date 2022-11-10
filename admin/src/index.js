import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { ListsContextProvider } from "./context/listsContext/ListContext";
import { MovieContextProvider } from "./context/moviesContext/MoviesContext";
import { UserContextProvider } from "./context/userContext/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListsContextProvider>
          <UserContextProvider>
          <App />
        </UserContextProvider>
        </ListsContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
