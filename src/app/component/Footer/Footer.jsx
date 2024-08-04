"use client"
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import { FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-r from-[#581c87] to-[#FFFFFF]">
      <div className="px-8  lg:px-16 flex flex-col justify-between md:flex-row">
        <div className="mt-4 md:mt-0">
          <h3 className="text-white stroke-2 font-bold text-2xl mb-4">Consumer-V</h3>
          <p className="w-[250px] md:w-[200px] lg:w-[285px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            tempore sapiente voluptas repellat velit.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <h6 className="font-bold mb-4 text-purple-900">About Us</h6>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">What we do</a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Journey So far</a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Board and Gc</a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Our Team</a>
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h6 className="font-bold mb-4 text-purple-900">Our Work</h6>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Product Testing</a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Legal Helpdesk</a>
            </li>
          </ul>
        </div>
        
        <div className="mt-4 md:mt-0">
          <h6 className="font-bold mb-4 text-purple-900">Magazines, Newsletters & <br/>Buying Guides</h6>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Magazines</a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Newsletters</a> 
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800"> Buying Guides</a>
            </li>
          </ul>
        </div>

        <div className="mt-4 md:mt-0">
          <h6 className="font-bold mb-4 text-purple-900">More</h6>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Media</a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Videos</a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Career</a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-700 text-red-800">Newsletter Archive</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:px-16 mt-10 flex flex-col justify-between md:flex-row">
        <div>
          <p className="text-md font-bold">2024 H-Service. All rights reserved</p>
        </div>

        <div className="relative flex items-center justify-center mt-4 md:mt-0">
          <div className="bg-violet-800 rounded-full w-16 h-16 text-center flex items-center justify-center z-40  ring-white ring-2 shadow-xl bg-gradient-to-r from-[#fffff] to-viloet-500 hover:from-indigo-200 hover:to-blue-800 ">
            <FaFacebookF className="text-lg text-purple-700" color="white" size={25}/>
          </div>
          <div className="bg-violet-800 rounded-full w-16 h-16 text-center flex items-center justify-center z-30  ring-white ring-2 -ml-4 shadow-xl  bg-gradient-to-r from-[#fffff] to-viloet-500 hover:from-indigo-200 hover:to-blue-800 ">
            <AiFillInstagram className="text-lg text-purple-700" color="white" size={25} />
          </div>
          <div className="bg-violet-800 rounded-full w-16 h-16 text-center flex items-center justify-center z-10  ring-white ring-2 -ml-4 shadow-xl  bg-gradient-to-r from-[#fffff] to-viloet-500 hover:from-indigo-200 hover:to-blue-800 ">
            <BsTwitterX className="text-lg text-purple-700"  color="white" size={25}/>
          </div>
          <div className="bg-violet-800 rounded-full w-16 h-16 text-center flex items-center justify-center z-0  ring-white ring-2 -ml-4 shadow-xl  bg-gradient-to-r from-[#fffff] to-viloet-500 hover:from-indigo-200 hover:to-blue-800 ">
            <FaWhatsapp className="text-lg text-purple-700"  color="white" size={25}/>
          </div>
        </div>
      </div>
    </footer>
  );
}
