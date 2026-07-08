import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
import { Home } from "./components/Home";
import Reservations from "./pages/SubmissionPortal/SubmissionPortal";
import MyRegistry from "./pages/MyRegistry/MyRegistry";
import SubMissionPortal from "./pages/SubMissionPortal/SubMissionPortal";
import Directory from "./pages/Directory/Directory";
import SignUp from "./pages/SignUp/SignUp";
import Menu from "./pages/Directory/Directory";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/my-registry" element={<MyRegistry />} />
        <Route path="/submission-portal" element={<SubMissionPortal />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/reservations" element={<Reservations />} /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
