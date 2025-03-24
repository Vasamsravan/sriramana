'use client';

import ComingSoon from '@/components/ui/ComingSoon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BirthdayObj, HaldiObj, WeddingObj } from '@/lib/Sources';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id='gallery' className='bg-zinc-900 py-20'>
      <div className='container'>
        <div className='mb-12 text-center'>
          <h2 className='mb-2 text-3xl font-bold md:text-4xl'>Our Event Gallery</h2>
          <p className='mx-auto max-w-3xl text-zinc-400'>
            Browse through our collection of beautifully decorated events and get inspired for your next celebration.
          </p>
        </div>

        <Tabs defaultValue='wedding' className='w-full'>
          <TabsList className='mx-auto mb-8 grid w-full lg:max-w-lg lg:grid-cols-5 grid-cols-2 h-28 lg:h-9 ring-white/10 ring-1'>
            <TabsTrigger value='wedding'>Weddings</TabsTrigger>
            <TabsTrigger value='haldi'>Haldi</TabsTrigger>
            <TabsTrigger value='birthday'>Birthdays</TabsTrigger>
            <TabsTrigger value='anniversaries'>Anniversaries</TabsTrigger>
            <TabsTrigger value='events'>Events</TabsTrigger>
          </TabsList>
          <TabsContent value='wedding' className='mt-0'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {WeddingObj.map((item, index) => (
                <div key={index} className='group relative overflow-hidden rounded-lg'>
                  <Image
                    src={`/images/${item.image}`}
                    alt={`wedding stage decoration ${index + 1}`}
                    width={800}
                    height={600}
                    loading='lazy'
                    className={`h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setIsLoading(false)}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='text-lg font-semibold text-white'>{item.Title}</h3>
                    <p className='text-sm text-zinc-300'>{item.Description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value='haldi' className='mt-0'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {HaldiObj.map((item, index) => (
                <div key={index} className='group relative overflow-hidden rounded-lg'>
                  {/* Skeleton Loader */}
                  {isLoading && (
                    <div className='absolute inset-0 animate-pulse bg-gray-700' /> // Skeleton
                  )}
                  <Image
                    src={`/images/${item.image}`}
                    alt={`Haldi decoration ${index + 1}`}
                    width={800}
                    height={600}
                    loading='lazy'
                    className={`h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setIsLoading(false)}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='text-lg font-semibold text-white'>{item.Title}</h3>
                    <p className='text-sm text-zinc-300'>{item.Description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value='birthday' className='mt-0'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {BirthdayObj.map((item, index) => (
                <div key={index} className='group relative overflow-hidden rounded-lg'>
                  <Image
                    src={`/images/${item.image}`}
                    alt={`${index + 1} Birthday decoration`}
                    width={800}
                    height={600}
                    loading='lazy'
                    className={`h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setIsLoading(false)}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='text-lg font-semibold text-white'>{item.Title}</h3>
                    <p className='text-sm text-zinc-300'>{item.Description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value='anniversaries' className='mt-0'>
            {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'> */}
              <ComingSoon />
              {/* {[1, 2, 3, 4, 5, 6].map(item => (
                <div key={item} className='group relative overflow-hidden rounded-lg'>
                  <Image
                    src={`/placeholder.svg?height=600&width=800&text=Corporate+${item}`}
                    alt={`Corporate event decoration ${item}`}
                    width={800}
                    height={600}
                    loading='lazy'
                    className={`h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setIsLoading(false)}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='text-lg font-semibold text-white'>Professional Corporate Setup</h3>
                    <p className='text-sm text-zinc-300'>Sophisticated and elegant business event designs</p>
                  </div>
                </div>
              ))} */}
            {/* </div> */}
          </TabsContent>
          <TabsContent value='events' className='mt-0'>
            <ComingSoon />
            {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {[1, 2, 3, 4, 5, 6].map(item => (
                <div key={item} className='group relative overflow-hidden rounded-lg'>
                  <Image
                    src={`/placeholder.svg?height=600&width=800&text=Haldi+${item}`}
                    alt={`Haldi ceremony decoration ${item}`}
                    width={800}
                    height={600}
                    loading='lazy'
                    className={`h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setIsLoading(false)}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='text-lg font-semibold text-white'>Traditional Haldi Ceremony</h3>
                    <p className='text-sm text-zinc-300'>Vibrant yellow themes with traditional elements</p>
                  </div>
                </div>
              ))}
            </div> */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
