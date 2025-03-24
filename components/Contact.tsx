'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { getBusinessStatus } from '@/lib/utils';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Convergence } from 'next/font/google';

const bebas = Convergence({
  weight: '400',
  subsets: ['latin'],
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', eventType: 'Other' });
  const [loading, setLoading] = useState(false);
  const [Sucess, setSucess] = useState(false);
  const [response, setResponse] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log(res, formData);
      const data = await res.json();
      setResponse(data.message);
      setSucess(data.success);

      if (data.success) {
        // ✅ Clear form on success
        setFormData({ name: '', email: '', message: '', eventType: '' });
      }
    } catch {
      setResponse('Something went wrong. Try again.');
    }

    setLoading(false);
  };

  return (
    <section id='contact' className='bg-gray-900 py-20 border-b border-white/5'>
      <div className='container'>
        <div className='mb-12 text-center'>
          <h2 className='mb-2 text-3xl font-bold md:text-4xl'>Get In Touch</h2>
          <p className='mx-auto max-w-2xl text-gray-400'>
            Ready to create an unforgettable event? Contact us to discuss your vision and requirements.
          </p>
        </div>

        <div className='grid gap-10 md:grid-cols-2'>
          <div className='rounded-lg p-6 border border-white/5'>
            {/* <p className='text-green-400 animate-pulse flex items-center justify-center font-bold underline underline-offset-2'>Available Soon</p> */}
            <h3 className='mb-4 text-xl font-semibold'>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                  <label htmlFor='name' className='text-sm font-medium'>
                    Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    className='w-full rounded-md bg-white/5 px-3 py-2 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500'
                    placeholder='Your Name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor='email' className='text-sm font-medium'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    className='w-full rounded-md bg-white/5 px-3 py-2 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500'
                    placeholder='Your Email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label htmlFor='event' className='text-sm font-medium'>
                  Event Type
                </label>
                <select
                  id='event'
                  name='eventType'
                  className='w-full rounded-md bg-gray-800 px-3 py-2 text-white outline outline-1 outline-white/10'
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value=''>Select Event Type</option>
                  <option value='wedding'>Wedding</option>
                  <option value='birthday'>Birthday</option>
                  <option value='corporate'>Corporate Event</option>
                  <option value='haldi'>Haldi Ceremony</option>
                  <option value='engagement'>Engagement</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className='space-y-2'>
                <label htmlFor='message' className='text-sm font-medium'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='w-full rounded-md bg-white/5 px-3 py-2 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500'
                  placeholder='Tell us about your event and requirements'
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <Button className='w-full bg-indigo-500 text-white hover:bg-indigo-400'>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
              <div className='flex items-center justify-center'>
                {response && (
                  <p
                    className={`${
                      Sucess
                        ? 'text-green-600 rounded-full ring-2 ring-green-500/30 bg-green-400/10'
                        : 'text-rose-600 rounded-full ring-2 ring-rose-500/30 bg-rose-500/10'
                    } py-1 w-max px-2 text-sm font-bold items-center flex justify-center gap-2`}
                  >
                    {Sucess ? (
                      <span className='relative flex items-center justify-center rounded-full h-4 w-4 bg-green-400/10 animate-pulse'>
                        <span className='h-2 w-2 rounded-full bg-green-400'></span>
                      </span>
                    ) : (
                      <span className='relative flex items-center justify-center rounded-full h-4 w-4 bg-rose-400/10 animate-pulse'>
                        <span className='h-2 w-2 rounded-full bg-rose-400'></span>
                      </span>
                    )}{' '}
                    {response}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div>
            <h3 className='mb-4 text-xl font-semibold'>Contact Information</h3>
            <div className='mb-8 space-y-4'>
              <div className='flex items-start gap-4'>
                <MapPin className='mt-1 h-20 w-20 lg:h-5 lg:w-5 text-indigo-500' />
                <div>
                  <p className='font-medium'>Our Location</p>
                  <p className='text-gray-400'>
                    Near Bangaru Maisamma temple, Sri Sai enclave, phase 2, Road no: 1, Boduppal, Hyderabad, 500092.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <Mail className='mt-1 h-5 w-5 text-indigo-500' />
                <div>
                  <p className='font-medium'>Email Us</p>
                  <p className='text-gray-400'>sriramanaevents@gmail.com</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <Phone className='mt-1 h-5 w-5 text-indigo-500' />
                <div>
                  <p className='font-medium'>Call Us</p>
                  <p className='text-gray-400'>+91 8187810086</p>
                </div>
              </div>
            </div>

            <h3 className='mb-4 text-xl font-semibold flex items-center gap-2'>
              Business Hours:
              {getBusinessStatus() ? (
                <>
                  <span className='relative flex items-center justify-center rounded-full h-4 w-4 bg-green-400/10 mt-1'>
                    <span className='h-2 w-2 rounded-full bg-green-400'></span>
                  </span>
                  <span className={`${bebas.className} font-bold text-sm mt-1`}>Open now</span>
                </>
              ) : (
                <>
                  <span className='relative flex items-center justify-center rounded-full h-4 w-4 bg-rose-500/10'>
                    <span className='h-2 w-2 rounded-full bg-rose-500'></span>
                  </span>
                  <span className={`${bebas.className} font-bold text-sm`}>
                    Closed (Will respond during business hours)
                  </span>
                </>
              )}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
