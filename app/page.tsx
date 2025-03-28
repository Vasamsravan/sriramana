import AuthorCredit from '@/components/AuthorCredits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className='dark min-h-screen bg-black text-white'>
      <AuthorCredit />
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <footer className='border-t border-zinc-800 bg-gray-900 py-12'>
        <Footer />
      </footer>
    </div>
  );
}
