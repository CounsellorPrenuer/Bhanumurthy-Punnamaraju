import Link from 'next/link';
import { Compass, GraduationCap, Briefcase, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/types/sanity';

interface ServicesSectionProps {
  services: ServiceItem[];
}

const iconMap: Record<string, React.ElementType> = {
  Compass: Compass,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Users: Users,
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 border-t border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Our Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Career & Advisory Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Comprehensive counseling solutions engineered for students, university aspirants, early graduates, and experienced executives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = (service.icon && iconMap[service.icon]) || Compass;

            return (
              <div
                key={service._id || index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Top card section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-900 to-indigo-800 text-white flex items-center justify-center shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-7 h-7 text-amber-400" />
                    </div>
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.fullDescription || service.shortDescription}
                  </p>

                  {/* Target Audience Badge */}
                  {service.targetAudience && (
                    <div className="mb-6 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs font-semibold text-amber-900">
                      <span className="font-bold text-amber-950 uppercase tracking-wider block mb-0.5">Recommended For:</span>
                      {service.targetAudience}
                    </div>
                  )}

                  {/* Key Features Bullet List */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Card CTA */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="#contact-us"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-amber-600 transition-colors group/link"
                  >
                    <span>Enquire About This Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <span className="inline-block w-2 h-2 rounded-full bg-blue-900 group-hover:bg-amber-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Personalized Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                Need Help Deciding The Right Service For Your Goal?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                Speak directly with Bhanumurthy Punnamaraju to understand the best assessment or roadmap suitable for your situation.
              </p>
            </div>
            
            <Link
              href="#contact-us"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 shrink-0 text-base"
            >
              <span>Get Free Initial Advice</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
