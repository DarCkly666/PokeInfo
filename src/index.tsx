import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonView from "./views/PokemonView";
import Navbar from "./components/Navbar";
import FilterProvider from "./context/FilterProvider";
import ThemeProvider from "./context/ThemeProvider";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <FilterProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pokemon/:id" element={<PokemonView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
