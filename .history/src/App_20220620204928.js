import {Nav, Shop, About, ErrorPage} from "./components"
import {BrowserRouter as Router,Routes, Route, Link} from"react-router-dom"
function App() {
  return (
    <Router>
    <div>
      <Nav/>
    
      <Routes>
        <Link to="/">home</Link>
        <Link>shop</Link>
        <Link>About</Link>
      <Route path="/about" element={<About/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="*" element={<ErrorPage/>}/>
   </Routes>

    </div>
    </Router>
  );
}

export default App;
