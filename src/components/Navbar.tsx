import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import Link from 'next/link'; // Import Link component from Next.js

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
          <li><Link href="/">Home</Link></li>  {/* Use Link component here */}
          <li><Link href="/about">About</Link></li>  {/* Use Link component here */}
          <li><Link href="/contact">Contact</Link></li>  {/* Use Link component here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
