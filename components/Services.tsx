import { Card, CardContent } from '@/components/ui/card';
import { ServicesData } from '@/lib/Sources';

const Services = () => {
  return (
    <section id='services' className='bg-black py-20'>
      <div className='container'>
        <div className='mb-12 text-center'>
          <h2 className='mb-2 text-3xl font-bold md:text-4xl'>Our Services</h2>
          <p className='mx-auto max-w-2xl text-zinc-400'>
            We offer comprehensive event management services tailored to your specific needs and preferences.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {ServicesData.map((service, index) => (
            <Card key={index} className='border-zinc-800 bg-zinc-900/50 transition-transform hover:-translate-y-1'>
              <CardContent className='p-6'>
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full`}
                  style={{ backgroundColor: service.bgColor, color: service.color }}
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
                  >
                    {service.paths.map((path, i) => (
                      <path key={i} d={path} />
                    ))}
                  </svg>
                </div>
                <h3 className='mb-2 text-xl font-semibold'>{service.title}</h3>
                <p className='text-zinc-400'>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
