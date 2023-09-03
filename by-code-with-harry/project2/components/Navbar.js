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
  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center py-2">
      <div className="logo mr-auto md:mx-5">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="nav mt-1 tracking-wider">
        <ul className="flex items-center space-x-5 font-bold text-sm md:text-md ">
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
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>
    </div>
  );
};
export default Navbar;
