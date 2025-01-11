import { useState } from "react";
import { Link } from "react-scroll";

//import { AiOutlineClose ,AiOutlineMenu } from "react-icons/ai"; //Ant Design Icons

export default function Navbar1() {
  return (
    <div className="fixed top-0 w-full z-100  bg-[#111010]">
      <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white">
        <h1 className="w-full font-bold text-3xl text-green-300 ">TECH.CO</h1>
        <ul className="flex cursor-pointer">
          <li className="pl-4 hover:text-green-300 italic font-thin text-end ">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="pl-4 hover:text-green-300 italic font-thin text-end ">
          <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li className="pl-4 hover:text-green-300 italic font-thin text-end ">
          <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <a href="">
            <li className="pl-4 hover:text-green-300 italic font-thin text-end pr-7">
              Code
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
