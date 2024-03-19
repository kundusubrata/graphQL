import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={"Loading..."} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
