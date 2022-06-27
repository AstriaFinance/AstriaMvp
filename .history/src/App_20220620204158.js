import {Nav, Shop, About} from "./components"
import {BrowserRouter as Router,Routes, Route} from"react-router-dom"
function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/shop" element={<Shop/>}/>
   </Routes>

    </div>
    </Router>
  );
}

export default App;
