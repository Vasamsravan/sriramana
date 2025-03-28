'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='home' className='relative lg:-mt-16'>
      <div className='absolute inset-0 z-0 -mt-32'>
        <Image
          src='/wedding-flower-decoration.jpg?height=1080&width=1920'
          alt='Elegant event decoration'
          fill
          className='object-cover opacity-40'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#201f31]/20 via-[#201f31]/40 to-[#201f31]'></div>
      </div>
      <div className='container relative z-10 flex min-h-[90vh] flex-col items-center justify-center text-center'>
        <h1 className='mb-4 max-w-4xl text-4xl font-bold text-gray-200 leading-tight md:text-5xl lg:text-6xl'>
          Creating <span className='text-gold'>Unforgettable</span> Moments for Your Special Events
        </h1>
        <p className='mb-8 max-w-2xl text-lg text-gray-400'>
          Exquisite decorations and flawless event management for weddings, birthdays, anniversaries, and more.
        </p>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Link href='https://www.instagram.com/sriramana_events/' rel='noopener noreferrer' target='_blank'>
            <Button className='rounded-md bg-yellow-400/5 text-yellow-400 ring-1 ring-yellow-400/30 hover:bg-yellow-400/10 text-sm'>
              Join Our Community
            </Button>
          </Link>

          <Link
            href='#contact'
            scroll={false}
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Button className='rounded-full bg-indigo-400/5 text-indigo-400 ring-1 ring-indigo-400/30 hover:bg-indigo-400/10'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
