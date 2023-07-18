import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import WL1 from "./container/WL1/WL1";
import WL2 from "./container/WL2/WL2";
import WL3 from "./container/WL3/WL3";
import WL4 from "./container/WL4/WL4";
import UseApp from "./container/UseApp/UseApp";
import WNFT from "./container/WNFT/WNFT";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/whitelist1" element={<WL1 />} />
        <Route path="/whitelist2" element={<WL2 />} />
        <Route path="/whitelist3" element={<WL3 />} />
        <Route path="/whitelist4" element={<WL4 />} />
        <Route path="/wnft" element={<WNFT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
