// src/Router.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Game from "./pages/Game/Game";
import Header from "./components/Header/Header";
import { ModalContextProvider } from "./contexts/ModalContext";

function Router() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/game-on" element={<Game />} />
        </Routes>
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default Router;
