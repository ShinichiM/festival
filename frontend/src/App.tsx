import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Schedule } from "./pages/Schedule";
import { Events } from "./pages/Events";
import { Tickets } from "./pages/Tickets";
import { Error } from "./pages/Error";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
