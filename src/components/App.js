import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Registration from "./Registration";

function App() {
  return (
    <div className="App w-screen overflow-x-hidden bg-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
