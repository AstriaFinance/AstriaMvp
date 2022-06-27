import {Nav, Shop, About} from "./components"
import {BrowserRouter, Switch, Route} from"react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>
      <Switch>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
   </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
