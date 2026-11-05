import {
  getSiteSettings,
  getHomePageData,
  getFounderData,
  getServices,
  getMentoriaPackages,
  getCustomPackages,
  getTestimonials
} from '@/lib/sanity.fetch';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutFounder from '@/components/AboutFounder';
import ServicesSection from '@/components/ServicesSection';
import MentoriaPackagesSection from '@/components/MentoriaPackagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default async function Home() {
  const [
    settings,
    homeData,
    founder,
    services,
    packages,
    customPackages,
    testimonials
  ] = await Promise.all([
    getSiteSettings(),
    getHomePageData(),
    getFounderData(),
    getServices(),
    getMentoriaPackages(),
    getCustomPackages(),
    getTestimonials()
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-blue-950 font-sans">
      {/* 
        Exact requested page flow:
        Home → About Founder → Services → Mentoria Packages → Testimonials → Contact Us
      */}
      <Navbar settings={settings} />

      <main className="flex-1">
        <Hero homeData={homeData} founderData={founder} />
        <AboutFounder founder={founder} />
        <ServicesSection services={services} />
        <MentoriaPackagesSection packages={packages} customPackages={customPackages} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection settings={settings} />
      </main>

      <Footer settings={settings} />
    </div>
  );
}
