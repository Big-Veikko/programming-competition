import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage/Home";
import Event from "./pages/EventPage/Event";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import { DirectoryPage } from "./pages/DirectoryPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/directory" element={<DirectoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
