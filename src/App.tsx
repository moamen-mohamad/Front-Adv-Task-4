import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const navLinks = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Service", path: "/service" },
    { id: 4, label: "New Property", path: "/NewProperty" },
    { id: 5, label: "Contact", path: "/contact" },
  ];

  return (
    <BrowserRouter>
      <Navbar
        logo="/assets/images/full-logo.png"
        navLinks={navLinks}
        loginPath="/login"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1 style={{ padding: "100px 0 0 60px" }}>About Page</h1>} />
        <Route path="/service" element={<h1 style={{ padding: "100px 0 0 60px" }}>Services Page</h1>} />
        <Route path="/NewProperty" element={<h1 style={{ padding: "100px 0 0 60px" }}>New Property Page</h1>} />
        <Route path="/contact" element={<h1 style={{ padding: "100px 0 0 60px" }}>Contact Page</h1>} />
        <Route path="/login" element={<h1 style={{ padding: "100px 0 0 60px" }}>Login Page</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
