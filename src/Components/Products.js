import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

const Products = ({ dispatch }) => {

  let rating;

  //  Add to basket function using useContext and useReducer 
  const addToBasket = (product) => {
    const newItem = {
      id: product.id,
      img: product.img,
      title: product.title,
      price: product.price,
      rating: product.rating
    }
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: newItem
    })
  }

  return (

    <div className='flex flex-wrap justify-center'>
      {products.map(product => {
        return (
          <div className="flex m-4 w-1/4 shadow" key={product.id}>

            <div className="card bordered h-96">

              <img src={product.img} alt='product' className="h-1/3 object-contain" />

              <div className="card-body">
                <Link to={`/products/${product.id}`}><h2 className="card-title h-3/6 line-clamp-3">{product.title} </h2></Link>
                <div className='flex'>
                  {rating = new Array(product.rating)
                    .fill()
                    .map((_, i) => (
                      <p key={i}>⭐</p>
                    ))}
                </div>

                <div className="flex justify-between items-center card-actions">
                  <p className="product__price text-2xl">
                    <small>$</small>
                    <strong>{product.price}</strong>
                  </p>
                  <button onClick={() => addToBasket(product)} className="btn btn-info">Add to cart</button>
                </div>

              </div>
            </div>
          </div>)
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return { state }
}

export default connect(mapStateToProps)(Products)