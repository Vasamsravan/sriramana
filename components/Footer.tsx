import Link from 'next/link';

const Footer = () => {
  return (
    <div className='container'>
      <div className='grid place-items-center gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <div>
          <Link href='/' className='mb-4 flex items-center gap-2'>
            <span className='text-xl font-bold text-gold'>Sri Ramana</span>
            <span className='text-xl'>Events</span>
          </Link>
          <p className='mb-4 text-zinc-400'>
            Creating unforgettable moments through exquisite decorations and flawless event management.
          </p>
          <div className='flex gap-4'>
            <a href='#' className='text-zinc-400 hover:text-gold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5'
              >
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
              </svg>
              <span className='sr-only'>Facebook</span>
            </a>
            <Link
              href={'https://www.instagram.com/sriramana_events/'}
              className='text-zinc-400 hover:text-gold'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
              </svg>
              <span className='sr-only'>Instagram</span>
            </Link>
            <Link href='#' className='text-zinc-400 hover:text-gold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5'
              >
                <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
              </svg>
              <span className='sr-only'>Twitter</span>
            </Link>
          </div>
        </div>
        {/* <div>
          <h3 className='mb-4 text-lg font-semibold'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='#home' className='text-zinc-400 hover:text-gold'>
                Home
              </Link>
            </li>
            <li>
              <Link href='#gallery' className='text-zinc-400 hover:text-gold'>
                Gallery
              </Link>
            </li>
            <li>
              <Link href='#services' className='text-zinc-400 hover:text-gold'>
                Services
              </Link>
            </li>
            <li>
              <Link href='#testimonials' className='text-zinc-400 hover:text-gold'>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href='#contact' className='text-zinc-400 hover:text-gold'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='mb-4 text-lg font-semibold'>Our Services</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='#' className='text-zinc-400 hover:text-gold'>
                Wedding Decorations
              </Link>
            </li>
            <li>
              <Link href='#' className='text-zinc-400 hover:text-gold'>
                Birthday Celebrations
              </Link>
            </li>
            <li>
              <Link href='#' className='text-zinc-400 hover:text-gold'>
                Corporate Events
              </Link>
            </li>
            <li>
              <Link href='#' className='text-zinc-400 hover:text-gold'>
                Haldi Ceremonies
              </Link>
            </li>
            <li>
              <Link href='#' className='text-zinc-400 hover:text-gold'>
                Engagement Parties
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
      <div className='mt-8 border-t border-zinc-800 pt-8 text-center'>
        <p className='text-zinc-400'>© {new Date().getFullYear()} Sri Ramana Events. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
