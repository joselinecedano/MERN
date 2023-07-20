import React from "react";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../Pages/Index";
import Show from "../Pages/Show";

const Main = () => {
  return (
    // <div>Main</div>
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/skeleton/:id" element={<Show />} />
      </Routes>
    </main>
  );
};

export default Main;
