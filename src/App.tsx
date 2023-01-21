import React, { useContext } from "react";
import Home from "./pages/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { userInputs } from "./data/formSource";
import "./styles/dark.scss";
import { DarkModeContext } from "./context/darkModeContex";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `app dark` : `app`}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New title="Add New User" inputs={userInputs} />}
            />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
