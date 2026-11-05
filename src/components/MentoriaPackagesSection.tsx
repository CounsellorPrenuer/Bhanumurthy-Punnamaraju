'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { MentoriaPackageItem, CustomPackageItem } from '@/types/sanity';

interface MentoriaPackagesSectionProps {
  packages: MentoriaPackageItem[];
  customPackages: CustomPackageItem[];
}

export default function MentoriaPackagesSection({
  packages,
  customPackages,
}: MentoriaPackagesSectionProps) {
  // Tabs for the main categories as structured in the images
  const tabCategories = [
    '8-9 STUDENTS',
    '10-12 STUDENTS',
    'COLLEGE GRADUATES',
    'WORKING PROFESSIONALS',
  ] as const;

  const [activeTab, setActiveTab] = useState<string>('8-9 STUDENTS');

  // Filter package matching the active tab
  const currentPackage = packages.find((pkg) => pkg.category === activeTab) || packages[0];

  return (
    <section id="mentoria-packages" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Official Mentoria Partner
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mentoria&apos;s Career Guidance Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Replicated with precision from Mentoria&apos;s proven framework. Select your target stage below to explore standard and premium career roadmaps.
          </p>
        </div>

        {/* Audience Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-inner max-w-4xl justify-center gap-1">
            {tabCategories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-200/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Description */}
        {currentPackage?.description && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-slate-600 font-medium italic text-base">
              &ldquo;{currentPackage.description}&rdquo;
            </p>
          </div>
        )}

        {/* Cards Grid: Replicating Mentoria 1, 2, 3, 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          {currentPackage?.plans?.map((plan, idx) => {
            const isPremium = plan.type === 'PREMIUM';

            return (
              <div
                key={plan._key || idx}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPremium
                    ? 'bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white shadow-2xl border-2 border-amber-400 ring-4 ring-amber-400/20'
                    : 'bg-white text-slate-900 shadow-lg border border-slate-200 hover:shadow-xl'
                }`}
              >
                {/* Popular or Recommended Tag */}
                {isPremium && (
                  <div className="absolute -top-4 right-8 bg-gradient-to-r from-amber-400 to-yellow-500 text-blue-950 font-black text-xs px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    {plan.badge || 'Recommended / Most Popular'}
                  </div>
                )}

                <div>
                  {/* Plan Type Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                        isPremium
                          ? 'bg-blue-800/80 text-amber-300 border border-blue-700'
                          : 'bg-slate-100 text-blue-900 border border-slate-200'
                      }`}
                    >
                      {plan.type} PLAN
                    </span>

                    {plan.sessions && (
                      <span className={`text-xs font-semibold ${isPremium ? 'text-slate-300' : 'text-slate-500'}`}>
                        {plan.sessions}
                      </span>
                    )}
                  </div>

                  {/* Plan Name & Price */}
                  <h3 className={`text-2xl sm:text-3xl font-extrabold mb-2 ${isPremium ? 'text-white' : 'text-slate-900'}`}>
                    {plan.planName}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className={`text-4xl sm:text-5xl font-black tracking-tight ${isPremium ? 'text-amber-400' : 'text-blue-900'}`}>
                      {plan.price}
                    </span>
                    {plan.duration && (
                      <span className={`text-xs font-medium ${isPremium ? 'text-slate-300' : 'text-slate-500'}`}>
                        / {plan.duration}
                      </span>
                    )}
                  </div>

                  <hr className={`my-6 ${isPremium ? 'border-blue-800' : 'border-slate-100'}`} />

                  {/* Included Features List */}
                  <div className="space-y-4 mb-8">
                    <h4 className={`text-xs font-bold uppercase tracking-wider ${isPremium ? 'text-amber-300' : 'text-slate-700'}`}>
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features?.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                          <div className={`p-1 rounded-full shrink-0 mt-0.5 ${
                            isPremium ? 'bg-amber-400/20 text-amber-300' : 'bg-blue-100 text-blue-900'
                          }`}>
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>
                          <span className={isPremium ? 'text-slate-200' : 'text-slate-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Excluded Features List (if any) */}
                    {plan.excludedFeatures && plan.excludedFeatures.length > 0 && (
                      <>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-4">
                          Not Included:
                        </h4>
                        <ul className="space-y-2">
                          {plan.excludedFeatures.map((ex, exIdx) => (
                            <li key={exIdx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-400 opacity-60">
                              <div className="p-0.5 rounded-full shrink-0 mt-0.5 bg-slate-100 text-slate-400">
                                <X className="w-3.5 h-3.5 stroke-[2]" />
                              </div>
                              <span className="line-through">{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6">
                  <Link
                    href="#contact-us"
                    className={`w-full py-4 px-6 rounded-full font-bold text-center text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                      isPremium
                        ? 'bg-amber-400 hover:bg-amber-300 text-blue-950 hover:shadow-amber-400/20 hover:shadow-lg'
                        : 'bg-blue-900 hover:bg-blue-800 text-white hover:shadow-blue-900/20 hover:shadow-lg'
                    }`}
                  >
                    <span>BUY NOW / ENQUIRE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CUSTOM ADD-ON PACKAGES SECTION (Replicating Mentoria 5 and 6) */}
        <div className="mt-28 pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              Tailored Guidance Options
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Want To Customise Your Mentorship Plan?
            </h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              If you want to subscribe to specific services from Mentoria that resolve your immediate career challenges, you can choose one or more of the following:
            </p>
          </div>

          {/* Add-on cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customPackages.map((addon) => (
              <div
                key={addon._id}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-lg font-bold text-slate-900">
                      {addon.title}
                    </h4>
                    {addon.category && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-100 shrink-0">
                        {addon.category}
                      </span>
                    )}
                  </div>

                  <p className="text-2xl font-black text-blue-900 mb-3">
                    {addon.price}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {addon.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href="#contact-us"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-blue-900/10 hover:bg-blue-900 text-blue-900 hover:text-white font-bold text-xs transition-all duration-200"
                  >
                    <span>BUY NOW / SELECT</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
