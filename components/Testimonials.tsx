import { Card, CardContent } from '@/components/ui/card';
import { TestimonialsData } from '@/lib/Sources';
import { Outfit } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'], weight: '400' });
// const patrick = Patrick_Hand({ subsets: ['latin'], weight: '400' });

const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-[#201f31] py-20'>
      <div className='container'>
        <div className='mb-12 text-center'>
          <h2 className='mb-2 text-3xl font-bold md:text-4xl'>Client Testimonials</h2>
          <p className='mx-auto max-w-2xl text-zinc-400'>
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {TestimonialsData.map((testimonial, index) => (
            <Card key={index} className='border-white/5 bg-gray-700/20'>
              <CardContent className='flex flex-col p-6'>
                <div className='mb-4 text-gold'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='inline'
                    >
                      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                    </svg>
                  ))}
                </div>
                <p className={`mb-4 flex-1 text-zinc-300 tracking-wide ${outfit.className}`}>`{testimonial.quote}`</p>
                <div>
                  <p className='font-semibold'>{testimonial.name}</p>
                  <p className='text-sm text-zinc-400'>{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
