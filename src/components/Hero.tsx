import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Award, Users, BookOpen, Compass } from 'lucide-react';
import { urlForImage } from '@/lib/sanity.image';
import { HomePageData, FounderData } from '@/types/sanity';

interface HeroProps {
  homeData: HomePageData;
  founderData: FounderData;
}

export default function Hero({ homeData, founderData }: HeroProps) {
  const founderPhotoUrl = founderData?.photo?.asset
    ? urlForImage(founderData.photo)?.width(800).height(900).quality(95).url()
    : '/founder.jpeg';

  const defaultStats = [
    { label: 'Years of Experience', value: '20+', icon: Award },
    { label: 'Students & Professionals Mentored', value: '1,500+', icon: Users },
    { label: 'Career Pathways Covered', value: '850+', icon: BookOpen },
    { label: 'Psychometric Accuracy', value: '98%', icon: Compass },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-amber-50/30 pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative gradient blur background */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-40 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {homeData?.hero?.badge && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                {homeData.hero.badge}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {homeData?.hero?.heading ? (
                <>
                  <span className="block text-slate-950">Navigate Your Career With</span>
                  <span className="bg-gradient-to-r from-blue-900 via-indigo-800 to-amber-600 bg-clip-text text-transparent">
                    Clarity & Confidence
                  </span>
                </>
              ) : (
                'Discover Your True Potential & Build a Fulfilling Career'
              )}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {homeData?.hero?.subheading}
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Certified Mentoria Psychometric Coach</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>20+ Years Corporate & Academic Wisdom</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Stream & College Admission Roadmaps</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Executive Career Pivot Guidance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href={homeData?.hero?.primaryCtaLink || '#mentoria-packages'}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all duration-200 text-base"
              >
                <span>{homeData?.hero?.primaryCtaText || 'Explore Mentoria Packages'}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={homeData?.hero?.secondaryCtaLink || '#contact-us'}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-7 py-3.5 rounded-full border border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 text-base"
              >
                <span>{homeData?.hero?.secondaryCtaText || 'Schedule Consultation'}</span>
              </Link>
            </div>
          </div>

          {/* Right Image / Hero Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 via-blue-600 to-indigo-800 rounded-3xl transform rotate-3 scale-102 opacity-70 blur-xs transition-transform duration-300 group-hover:rotate-6" />

              {/* Main Card with Founder photo */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-[440px] sm:h-[480px] w-full bg-slate-100">
                  <Image
                    src={founderPhotoUrl || '/founder.jpeg'}
                    alt={founderData?.name || 'Bhanumurthy Punnamaraju'}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Overlay Founder Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900">
                          {founderData?.name || 'Bhanumurthy Punnamaraju'}
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-blue-900">
                          {founderData?.title || 'Senior Career Mentor & Educator'}
                        </p>
                      </div>
                      <div className="bg-amber-400 text-blue-950 text-xs font-black px-3 py-1.5 rounded-full shadow-xs">
                        20+ Yrs Exp
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Tag */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Mentoria Certified</p>
                  <p className="text-[10px] text-slate-500">Holistic 4-Pillar Method</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {defaultStats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-4 bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-slate-100 shadow-xs">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-900">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
