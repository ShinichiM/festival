import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Schedule } from "./pages/Schedule";
import { Events } from "./pages/Events";
import { Tickets } from "./pages/Tickets";
import { Error } from "./pages/Error";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react"

function App() {
  const [navSelected, setNavSelected] = useState<string>("");
  return (
    <Router>
      <Navigation navSelected={navSelected} setNavSelected={setNavSelected}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/events/:event" element={<Events />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
