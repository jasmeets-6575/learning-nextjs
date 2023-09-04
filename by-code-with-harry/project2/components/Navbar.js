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

const Navbar = () => {
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
        className="sideCart absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol>
          <li>Tshirt - Wear the Code</li>
        </ol>
      </div>
    </div>
  );
};
export default Navbar;
