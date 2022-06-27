import { Nav, Home, Shop } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VideoExplainer" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
