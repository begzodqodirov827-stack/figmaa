import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Products from "./pages/Products.jsx";
import About from "./pages/About";
import Advantages from "./pages/Advantages";
import OpenClub from "./pages/OpenClub";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <Router>
      <div className="app-container">

        <Header />

        <main className="main-content">
          <Routes>

            {/* Products asosiy sahifa */}
            <Route path="/products" element={<Products />} />

            <Route path="/about" element={<About />} />

            <Route
              path="/advantages"
              element={<Advantages />}
            />

            <Route
              path="/open-club"
              element={<OpenClub />}
            />

            <Route
              path="/contacts"
              element={<Contacts />}
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}