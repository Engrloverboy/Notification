import React from "react";
import Allnotification from "./components/Allnotification";
import Alltestimonial from "./components/Alltestimonial";

const App = () => {
  return (
    <div>
      <Allnotification />
      <Alltestimonial/>
    </div>
  );
};

export default App;

{/* <BrowserRouter>
  <Routes>
    <Route index element={<Allnotification />} />
    <Route path="/testimonial" element={<Alltestimonial />} />
  </Routes>
</BrowserRouter> */}
