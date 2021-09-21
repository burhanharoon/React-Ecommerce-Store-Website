import React from 'react'

const CheckoutProduct = ({ id, img, title, price, rating }) => {

    // let ratings;
    // const basketContext = useContext(BasketContext)
    // const deleteFromBasket = (id) => {
    //     basketContext.basketDispatch({ type: 'DELETE_FROM_BASKET', payload: id })
    // }

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
                {/* <button onClick={() => deleteFromBasket(id)}>Remove</button> */}
            </div>
        </div>
    )
}

export default CheckoutProduct