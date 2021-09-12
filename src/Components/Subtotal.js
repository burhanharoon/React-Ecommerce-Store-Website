import React, { useContext } from 'react'
import { BasketContext } from '../App';
import CurrencyFormat from 'react-currency-format';

export const Subtotal = () => {

    let total = 0;
    const basketContext = useContext(BasketContext)
    const totalValueOfBasket = () => {
        if (basketContext.state.basket.length > 0) {

            basketContext.state.basket.map(product => {
                return total += product.price;
            })
            console.log(total);
            return total;
        }
        else {
            return total;
        }
    }

    return (
        // Used -> npm i react-currency-format
        <CurrencyFormat renderText={(value) => (
            <aside>
                <div className="summary">
                    <div className="summary-total-items"><span className="total-items"></span> Items in your Bag: {basketContext.state.basket.length}</div>
                    <div className="summary-subtotal">
                        <div className="subtotal-title">Subtotal</div>
                        <div className="subtotal-value final-value" id="basket-subtotal">{value}</div>
                        <div className="summary-promo hide">
                            <div className="promo-title">Promotion</div>
                            <div className="promo-value final-value" id="basket-promo"></div>
                        </div>
                    </div>
                    <div className="summary-delivery">
                        <select name="delivery-collection" className="summary-delivery-selection">
                            <option value="0" selected="selected">Select Collection or Delivery</option>
                            <option value="collection">Collection</option>
                            <option value="first-class">Royal Mail 1st Class</option>
                            <option value="second-class">Royal Mail 2nd Class</option>
                            <option value="signed-for">Royal Mail Special Delivery</option>
                        </select>
                    </div>
                    <div className="summary-total">
                        <div className="total-title">Total</div>
                        <div className="total-value final-value" id="basket-total">{value}</div>
                    </div>
                    <div className="summary-checkout">
                        <button className="checkout-cta">Go to Secure Checkout</button>
                    </div>
                </div>
            </aside>

        )}
            decimalScale={2}
            value={totalValueOfBasket()}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
    )
}
