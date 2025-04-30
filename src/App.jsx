import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeLoad = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 3 seconds fake loading

    return () => clearTimeout(fakeLoad);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
