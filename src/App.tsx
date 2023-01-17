import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "src/pages/Home";
import Search from "src/pages/Search";
import Product from "src/pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Search />} />
        <Route path="/items/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;