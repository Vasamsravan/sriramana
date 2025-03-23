'use client';

import { Button } from '@/components/ui/button';
import MapsLink from '@/components/ui/Maps';
import { MapPinHouse } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
});

const categories = ['Home', 'Gallery', 'Services', 'Testimonials', 'Contact'];

const Navigation = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-sm'>
      <div className='container flex h-16 items-center justify-between'>
        <Link href='/' className={`flex items-center gap-2`}>
          <span className={`${bebas.className} text-xl font-bold text-gold tracking-widest`}>Sri Ramana Events</span>
        </Link>
        <nav className='hidden md:flex'>
          <ul>
            <li className='flex items-center gap-6'>
              {[...categories].map((category, index) => (
                <Link
                  key={index}
                  href={`#${category.toLowerCase()}`}
                  scroll={false}
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById(`${category.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className='text-sm hover:text-gold'
                >
                  {category}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
        <MapsLink latitude={17.421188} longitude={78.5892182}>
          <Button className='cursor-pointer bg-gold text-black hover:bg-gold/90'>
            <MapPinHouse />
            Hyderabad
          </Button>
        </MapsLink>
      </div>
    </header>
  );
};

export default Navigation;
