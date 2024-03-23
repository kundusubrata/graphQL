import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CompleteRegistration from "./pages/auth/CompleteRegistration";


import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Nav />
          <ToastContainer position="top-center" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/complete-regestration" element={<CompleteRegistration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
