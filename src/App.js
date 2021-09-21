import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import ProductDisc from "./Components/ProductDisc";


const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path="/" component={Home} exact />
        <Route path="/products/:id" component={ProductDisc} />
      </Switch>
    </Router>
  );
}

export default App;
