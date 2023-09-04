import React, { useRef, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center py-2 shadow-md">
      <div className="logo mr-auto md:mx-5">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="nav mt-1 tracking-wider">
        <ul className="flex items-center space-x-6 font-bold text-sm md:text-md ">
          <li className="hover:text-pink-600">
            <Link href="/tshirts">Tshirts</Link>
          </li>
          <li className="hover:text-pink-600">
            <Link href="/hoodies">Hoodies</Link>
          </li>
          <li className="hover:text-pink-600">
            <Link href="/mugs">Mugs</Link>
          </li>
          <li className="hover:text-pink-600">
            <Link href="/stickers">Stickers</Link>
          </li>
        </ul>
      </div>

      <div onClick={toggleCart} className="cart absolute right-0 top-4 mx-5 ">
        <AiOutlineShoppingCart className="text-xl md:text-2xl cursor-pointer" />
      </div>

      <div
        ref={ref}
        className="sideCart w-72 h-full absolute top-0 right-0 bg-pink-100 px-2 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="my-4 font-semibold"> No items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
                  <div className="w-1/3 font-semibold flex items-center justify-center space-x-3">
                    <AiFillMinusCircle
                      onClick={() =>
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="mx-1 text-lg text-pink-500 cursor-pointer"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillMinusCircle
                      onClick={() =>
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="mx-1 text-lg text-pink-500 cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex mt-5">
          <Link href="/checkout">
            <button className="flex mx-auto text-white bg-pink-500 border-0 py-1 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mx-auto  text-white bg-pink-500 border-0 py-1 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
