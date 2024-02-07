import "./App.css";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Profile from "./Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>code test</div>
        <nav className="nav">
          <Link to="/" className="btn">
            Home
          </Link>

          <Link to="/profile" className="btn">
            Profile
          </Link>

          <Link to="/contact" className="btn">
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:name?" element={<Profile />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
