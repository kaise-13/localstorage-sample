import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../parts/HomePage";
import { NewSite } from "../parts/NewSite";

export const Router: FC = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newSite" element={<NewSite />} />
          </Routes>
        </BrowserRouter>
    )
}