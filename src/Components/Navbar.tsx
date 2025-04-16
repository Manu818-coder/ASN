import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

const Navbar = () => {
  return (
    <nav>
      <div>
        {/* Use Next.js Image component here */}
        <Image 
          src="/path/to/logo.png" 
          alt="Logo" 
          width={100} 
          height={100} 
        />
      </div>
      <div>
        {/* Navbar content */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
