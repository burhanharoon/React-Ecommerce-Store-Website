import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Header = ({ basket }) => {

  return (
    <div className="sticky top-0 z-10">
      <div className="navbar shadow-lg bg-info text-neutral-content">
        <div className="px-2 mx-2 navbar-start">
          <Link to='/'>
            <span className="text-lg font-bold">Bruhh Store</span>
          </Link>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">Home</Link>
            <Link to="/contact" className="btn btn-ghost btn-sm rounded-btn">Contact</Link>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <Link to="/checkout">
            <button className="btn btn-square btn-ghost relative">
              <div className="indicator-item badge absolute top-0 left-0">{basket.length}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { basket } = state
  return { basket }
}

export default connect(mapStateToProps)(Header)
