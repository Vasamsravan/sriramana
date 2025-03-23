'use client';

import { Crown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const AuthorCredit = () => {
  const [show, setShow] = useState(false);


  return (
    <div className='fixed bottom-4 left-4 z-50'>
      <div
        className={`pointer-events-auto flex items-center justify-start h-[30px] gap-3 rounded-full bg-[#1c1c1e] border border-[#ffffff25] overflow-hidden transition-all duration-300 shadow-lg ${
          show ? 'w-36' : 'w-8'
        }`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {/* Icon */}
        <Crown size={16} className='fill-white ml-2 shrink-0' />

        {/* Text */}
        <Link href={'https://www.instagram.com/dreamy.player/'} rel='noopener noreferrer' target='_blank'>
          <span
            className={`ml-2 text-white transition-opacity duration-300 text-sm ${show ? 'opacity-100' : 'opacity-0'}`}
          >
            Dreamy
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AuthorCredit;

// Static route
// #1c1c1e
