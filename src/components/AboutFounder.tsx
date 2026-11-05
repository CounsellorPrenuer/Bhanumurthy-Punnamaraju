import Image from 'next/image';
import Link from 'next/link';
import { Award, CheckCircle2, Sparkles, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { urlForImage } from '@/lib/sanity.image';
import { FounderData } from '@/types/sanity';

interface AboutFounderProps {
  founder: FounderData;
}

export default function AboutFounder({ founder }: AboutFounderProps) {
  const photoUrl = founder?.photo?.asset
    ? urlForImage(founder.photo)?.width(800).height(1000).quality(95).url()
    : '/founder.jpeg';

  const defaultHighlights = [
    '20+ years of high-impact experience spanning teaching, executive advisory, and student mentorship.',
    'Certified in Mentoria’s scientific psychometric framework, analyzing personality, interests, and abilities.',
    'Helped 1500+ students & professionals gain clarity on stream choices, college degrees, and career pivots.',
    'Unbiased, transparent, and personalized strategy tailored to each individual’s strengths.',
  ];

  const defaultCredentials = [
    'Senior Academician & Management Consultant',
    'Certified Career Coach & Psychometric Assessment Specialist',
    'Expert in Grade 8–12 Stream Selection & College Admissions',
    'Executive Career Strategist for Working Professionals',
  ];

  return (
    <section id="about-founder" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Meet The Mentor
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-blue-900">{founder?.name || 'Bhanumurthy Punnamaraju'}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {founder?.title || 'Senior Career Mentor, Consultant & Educator'}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo & Stats Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative card backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-indigo-900 to-amber-500 rounded-3xl transform -rotate-2 scale-102 opacity-80" />

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-[480px] sm:h-[520px] w-full bg-slate-100">
                  <Image
                    src={photoUrl || '/founder.jpeg'}
                    alt={founder?.name || 'Bhanumurthy Punnamaraju'}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Bottom details card inside image */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-400 text-blue-950 flex items-center justify-center font-black text-xl shadow-xs">
                        20+
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Years of Multidisciplinary Leadership</h4>
                        <p className="text-xs text-slate-600">Educator • Consultant • Career Architect</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-4 shadow-xl border border-blue-800 max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-bold text-amber-300">Mentoria Certified</span>
                </div>
                <p className="text-[11px] text-slate-200 leading-tight">
                  Guiding you with proven psychometric science & corporate wisdom.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy, and Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Empowering Aspirations Through Evidence-Based Mentorship
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {founder?.bio ||
                  'With 20+ years of experience across teaching, consulting, and diverse professional domains, I help individuals navigate career decisions with clarity and confidence. My guidance combines practical industry insights with personalized mentoring to identify strengths, explore opportunities, build career strategies, and make informed choices for long-term professional growth.'}
              </p>
            </div>

            {/* Guiding Philosophy Block */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-amber-50/50 border border-blue-100/80 shadow-xs relative">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-blue-900 text-amber-400 shrink-0 mt-1">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-blue-950 uppercase tracking-wide">
                    Mentorship Philosophy
                  </h4>
                  <p className="mt-2 text-slate-700 italic text-sm sm:text-base leading-relaxed">
                    &ldquo;{founder?.philosophy ||
                      'Every individual possesses a unique blueprint of strengths, interests, and potential. Successful careers are never accidents of luck—they are built on self-awareness, informed research, and strategic execution.'}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Checklist */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-900" />
                Key Highlights & Capabilities
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {(founder?.keyHighlights && founder.keyHighlights.length > 0
                  ? founder.keyHighlights
                  : defaultHighlights
                ).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials Badges */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {(founder?.credentials && founder.credentials.length > 0
                  ? founder.credentials
                  : defaultCredentials
                ).map((cred, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="#contact-us"
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Connect with Bhanumurthy Sir</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#mentoria-packages"
                className="inline-flex items-center gap-2 text-blue-950 font-bold hover:text-amber-600 transition-colors px-4 py-3"
              >
                <span>View Mentorship Plans</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
