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
    <section id='contact' className='bg-black py-20'>
      <div className='container'>
        <div className='mb-12 text-center'>
          <h2 className='mb-2 text-3xl font-bold md:text-4xl'>Get In Touch</h2>
          <p className='mx-auto max-w-2xl text-zinc-400'>
            Ready to create an unforgettable event? Contact us to discuss your vision and requirements.
          </p>
        </div>

        <div className='grid gap-10 md:grid-cols-2'>
          <div className='rounded-lg border border-zinc-800 bg-zinc-900/30 p-6'>
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
                    className='w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white'
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
                    className='w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white'
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
                  className='w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white'
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
                  className='w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white'
                  placeholder='Tell us about your event and requirements'
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <Button className='w-full bg-gold text-black hover:bg-gold/90'>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
              {response && (
                <p
                  className={`${Sucess ? 'text-green-500' : 'text-red-500'} font-bold items-center flex justify-center`}
                >
                  {response}
                </p>
              )}
            </form>
          </div>

          <div>
            <h3 className='mb-4 text-xl font-semibold'>Contact Information</h3>
            <div className='mb-8 space-y-4'>
              <div className='flex items-start gap-4'>
                <MapPin className='mt-1 h-5 w-5 text-gold' />
                <div>
                  <p className='font-medium'>Our Location</p>
                  <p className='text-zinc-400'>
                    Near Bangaru Maisamma temple, Sri Sai enclave, phase 2, Road no: 1, Boduppal, Hyderabad, 500092.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <Mail className='mt-1 h-5 w-5 text-gold' />
                <div>
                  <p className='font-medium'>Email Us</p>
                  <p className='text-zinc-400'>sriramaanaevents@email.com</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <Phone className='mt-1 h-5 w-5 text-gold' />
                <div>
                  <p className='font-medium'>Call Us</p>
                  <p className='text-zinc-400'>+91 8187810086</p>
                </div>
              </div>
            </div>

            <h3 className='mb-4 text-xl font-semibold'>
              Business Hours: <span className={`text-sm font-bold ${bebas.className}`}>{getBusinessStatus()}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
