import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Checkout } from "./Components/Checkout";
import { reducer } from "./reducer";

export const BasketContext = React.createContext()

const products = [
  {
    id: 100,
    img: "https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_UY218_.jpg",
    title: "Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys",
    price: 39.99,
    rating: 4,
  },
  {
    id: 101,
    img: "https://m.media-amazon.com/images/I/71pzrs70x4L._AC_UL320_.jpg",
    title: "MASTERTOP 20PCS Vacuum Storage Bags",
    price: 2,
    rating: 4
  },
  {
    id: 102,
    img: "https://images-na.ssl-images-amazon.com/images/I/41k21rsIfzS.jpg",
    title: "Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H",
    price: 1299,
    rating: 5
  },
  {
    id: 103,
    img: "https://m.media-amazon.com/images/I/81XvEK3g4KL._AC_UL320_.jpg",
    title: "PowerColor Red Devil AMD Radeon RX 6600 XT Gaming Graphics Card with 8GB GDDR6 Memory",
    price: 880,
    rating: 3
  },
  {
    id: 104,
    img: "https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_UY218_.jpg",
    title: "Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys ",
    price: 39.99,
    rating: 4
  },
  {
    id: 105,
    img: "https://m.media-amazon.com/images/I/71pzrs70x4L._AC_UL320_.jpg",
    title: "MASTERTOP 20PCS Vacuum Storage Bags",
    price: 2,
    rating: 4
  }
]

const initialState = {
  basket: []
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <BasketContext.Provider value={{ state: state, products: products, basketDispatch: dispatch }} >
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </BasketContext.Provider>
  );
}

export default App;
