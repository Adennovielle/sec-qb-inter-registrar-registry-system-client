import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
import { Home } from "./components/Home";
import Reservations from "./pages/Reservations/Reservations";
import OrderOnline from "./pages/Order-online/OrderOnline";
import SignUp from "./pages/SignUp/SignUp";
import Menu from "./pages/Menu/Menu";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
