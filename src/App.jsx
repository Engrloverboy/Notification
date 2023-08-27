import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allnotification from "./components/Allnotification";
import Alltestimonial from "./components/Alltestimonial";
import Easybanknavbar from "./components/Easybanknavbar";
import Workit from "./components/Workit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Allnotification />} />
        <Route path="/testimonial" element={<Alltestimonial />} />
        <Route path="/workit" element={<Workit />} />
        <Route path="/easybanknavbar" element={<Easybanknavbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
