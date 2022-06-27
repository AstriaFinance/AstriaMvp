import {Nav, Shop, About, ErrorPage} from "./components"
import {BrowserRouter as Router,Routes, Route, Link} from"react-router-dom"
function App() {
  return (
    <Router>
    <div>
      <button>kkkk</button>
      <Nav/>
    
      <Routes>
     
      <Route path="/about" element={<About/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="*" element={<ErrorPage/>}/>
   </Routes>

    </div>
    </Router>
  );
}

export default App;
