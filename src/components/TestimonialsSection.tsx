import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '@/types/sanity';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-blue-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Students, Parents & Professionals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real experiences from individuals who unlocked career clarity and decisive confidence under Bhanumurthy Sir&apos;s mentorship.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item._id || index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-amber-50 text-amber-500">
                    <Quote className="w-6 h-6 rotate-180 fill-current" />
                  </div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-900 to-indigo-800 text-white font-bold flex items-center justify-center text-lg shrink-0 shadow-sm">
                  {item.name ? item.name.charAt(0) : 'G'}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role} {item.company ? `• ${item.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats & Trust Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 py-4 px-8 rounded-full bg-white shadow-xs border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              100% Verified Reviews
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>Over 1,500+ Counseling Sessions Completed</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-blue-900 font-bold">4.9 / 5 Average Client Satisfaction</span>
          </div>
        </div>

      </div>
    </section>
  );
}
