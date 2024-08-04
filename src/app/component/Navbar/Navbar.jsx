"use client";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gradient-to-r from-[#581c87] to-[#FFFFFF] fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <h2 className="brand lg:text-3xl fm">Consumer-Logo</h2>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            <Link href="/media" className="nav-link">Media</Link>
                            <Link href="/join-cv" className="nav-link">Join CV</Link>
                            <Link href="/about-us" className="nav-link">About Us</Link>
                            <Link href="/contact-us" className="nav-link">Contact Us</Link>
                            <div className="ml-auto flex items-end">
                            <Link href="/login" className="login px-4 py-1 text:lg lg:px-4 lg:text-xl lg:py-1">
                                Login
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="ml-auto sm:hidden">
                        <button className="menu-btn">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
