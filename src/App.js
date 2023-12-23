import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={ProductDetail} />
    </Switch>
  );
}

export default App;
