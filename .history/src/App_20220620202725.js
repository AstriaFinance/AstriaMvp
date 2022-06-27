import {Nav, Shop, About} from "./components"
import {BrowserRouter as Router, Switch, Route} from"react-router-dom"
function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>


    </div>
    </Router>
  );
}

export default App;
