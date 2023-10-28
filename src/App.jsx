import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allnotification from "./components/Allnotification";
import Easybank from "./pages/Easybank";
import Sectestimonial from "./pages/Sectestimonial";
import Countries from "./pages/Countries";
import AboutCountries from "./pages/AboutCountries";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Allnotification />} />
        <Route path="/sectestimonial" element={<Sectestimonial />} />
        <Route path="/easybank" element={<Easybank />} />
        <Route path="/country" element={<Countries />} />
        <Route path="/about/:segun" element={<AboutCountries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
