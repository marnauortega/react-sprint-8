import { useState, useEffect, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import manageLocalStorage from "./components/util/localStorage";
import fetchData from "./components/util/fetchData";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login, { LoginForm, RegisterForm, Welcome } from "./pages/Login/Login";
import ShipList from "./pages/ShipList";
import Ship from "./pages/Ship/Ship";

const App = () => {
  const [shipList, setShipList] = useState([]);
  useEffect(() => {
    fetchData("https://swapi.dev/api/starships/", setShipList);
  }, []);

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchData("https://swapi.dev/api/people/", setCharacters);
  }, []);

  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchData("https://swapi.dev/api/films/", setFilms);
  }, []);

  const [logged, setLogged] = useState(false);
  const [users, setUsers] = useState([{ id: 0, name: "name", email: "email@email.com", password: "password" }]);
  manageLocalStorage("users", users, setUsers);

  return (
    <>
      <BrowserRouter>
        <Header logged={logged} setLogged={setLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}>
            <Route path="login" element={<LoginForm users={users} setLogged={setLogged} />} />
            <Route path="register" element={<RegisterForm users={users} setUsers={setUsers} />} />
            <Route path="registered" element={<Welcome newUser={true} />} />
            <Route path="logged" element={<Welcome />} />
            <Route index element={<Navigate to="login" />} />
          </Route>
          <Route
            path="starships"
            element={
              <ProtectedRoute logged={logged}>
                <ShipList shipList={shipList} />
              </ProtectedRoute>
            }
          />
          <Route
            path="starships/:id"
            element={
              <ProtectedRoute logged={logged}>
                <Ship shipList={shipList} characters={characters} films={films} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
