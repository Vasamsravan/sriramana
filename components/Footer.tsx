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
          <p className='mb-4 text-[#aaa]'>
            Creating unforgettable moments through exquisite decorations and flawless event management.
          </p>
          <div className='flex gap-4'>
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
          </div>
        </div>
      </div>
      <div className='mt-8 border-t border-zinc-800 pt-8 text-center'>
        <p className='text-[#ccc]'>© {new Date().getFullYear()} Sri Ramana Events. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
