import {Nav, Shop, About} from "./components"
import {BrowserRouter as Router, Switch, Route} from"react-router-dom"
function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
   </Switch>

    </div>
    </Router>
  );
}

export default App;
