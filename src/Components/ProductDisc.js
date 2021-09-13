import React, { useContext } from 'react'
import { BasketContext } from '../App';
import { Link } from "react-router-dom";


export const ProductDisc = ({ match }) => {
    const basketContext = useContext(BasketContext)
    const product = basketContext.products.find(product => product.id == match.params.id)

    return (
        <div className="p-10 flex flex-col ">
            <Link to="/"><button className="btn btn-blue m-3">Go back</button></Link>
            <div>{product.title}</div>
        </div>
    )
}
