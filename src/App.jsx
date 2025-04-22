import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
