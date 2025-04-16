// components/Navbar.tsx
import React from "react";
import { Link } from "react-scroll"; // This is for smooth scrolling to sections

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <img src="/logo.png" alt="ASN Logo" className="h-16 w-auto" />
      <div className="space-x-6">
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="text-lg font-semibold text-blue-900 hover:text-blue-700"
        >
          Services
        </Link>
        <Link
          to="testimonials"
          smooth={true}
          duration={500}
          className="text-lg font-semibold text-blue-900 hover:text-blue-700"
        >
          Testimonials
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-lg font-semibold text-blue-900 hover:text-blue-700"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
