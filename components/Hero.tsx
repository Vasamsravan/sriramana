'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='home' className='relative'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/wedding-flower-decoration.jpg?height=1080&width=1920'
          alt='Elegant event decoration'
          fill
          className='object-cover opacity-40'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black'></div>
      </div>
      <div className='container relative z-10 flex min-h-[90vh] flex-col items-center justify-center text-center'>
        <h1 className='mb-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl'>
          Creating <span className='text-gold'>Unforgettable</span> Moments for Your Special Events
        </h1>
        <p className='mb-8 max-w-2xl text-lg text-zinc-300'>
          Exquisite decorations and flawless event management for weddings, birthdays, anniversaries, and more.
        </p>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Link href='https://www.instagram.com/sriramana_events/' rel='noopener noreferrer' target='_blank' className='text-sm hover:text-gold'>
            <Button className='bg-[#FCAF45] text-black hover:bg-gold/90'>Join Our Community</Button>
          </Link>

          <Link
            href='#contact'
            className='text-sm hover:text-gold'
            scroll={false}
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Button variant='outline' className='border-gold text-gold hover:bg-gold/10'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
