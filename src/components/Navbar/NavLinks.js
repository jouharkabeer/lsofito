import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-lsofito-blue" smooth to="/about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-lsofito-blue" smooth to="/services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-lsofito-blue" to="/">
                Products
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-lsofito-blue" to="/contact">
                Contact Us
            </HashLink> */}
            <Link className="text-white bg-lsofito-blue hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/contact">
                Contact Us
            </Link>
        </>
    )
}

export default NavLinks;