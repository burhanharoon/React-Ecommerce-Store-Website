import React from 'react'
import { connect } from 'react-redux'

const CheckoutProduct = ({ id, img, title, price, rating, basket, dispatch }) => {

    let ratings
    const deleteFromBasket = (id) => {
        dispatch({
            type: 'DELETE_FROM_BASKET',
            payload: id
        })
    }

    return (
        <div className="basket-product">
            <div className="item">
                <div className="product-image">
                    <img src={img} alt="Placholder Image 2" className="product-frame" />
                </div>
                <div className="product-details">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="price">{price}</div>
            <div className="quantity">
                <input type="number" min="1" className="quantity-field" />
            </div>
            <div className="subtotal">{price}</div>
            <div className="remove">
                <button onClick={() => deleteFromBasket(id)}>Remove</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { basket } = state
    return { basket }
}

export default connect(mapStateToProps)(CheckoutProduct)