import React from 'react'
import Products from "./Products";

 const Home = () => {
    return (
        <div >
            <h1 className="text-3xl font-bold flex justify-center pt-6">
                Our Products
            </h1>
            <Products />
        </div>
    )
}

export default Home