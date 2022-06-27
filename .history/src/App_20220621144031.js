import {Nav, Shop, About, ErrorPage, Home} from "./components"
import {BrowserRouter as Router,Routes, Route} from"react-router-dom"
function App() {
  return (
    <Router>
    <div>
     
      <Nav/>
    
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/shop/:goods" element={<Shop/>}/>
      <Route path="*" element={<ErrorPage/>}/>
   </Routes>
    <Home/> 
    </div>
    </Router>
  );
}

export default App;
