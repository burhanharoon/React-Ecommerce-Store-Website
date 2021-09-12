import React from 'react'

export const Basketitem = ({ img, title, price, rating }) => {

    let ratings = new Array(rating);

    return (
        <>


            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {title}
                        </div>
                        <div className="text-sm opacity-50 flex">
                            {
                                ratings.fill().map(rating => {
                                    <p>⭐</p>
                                })
                            }
                        </div>
                    </div>
                </div>
            </td>

            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">DELETE</button>
            </th>

        </>

    )
}
