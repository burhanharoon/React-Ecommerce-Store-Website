import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BasketContext } from '../App';

export const Products = () => {

  let rating;
  // Declaring the basketContext here which came from the App.js
  const basketContext = useContext(BasketContext)

  //  Add to basket function using useContext and useReducer 
  const addToBasket = (product) => {
    const newItem = {
      id: product.id,
      img: product.img,
      title: product.title,
      price: product.price,
      rating: product.rating
    }
    basketContext.basketDispatch({ type: 'ADD_TO_BASKET', payload: newItem })
  }

  return (

    <div className='flex flex-wrap justify-center'>
      {basketContext.products.map(product => {
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
