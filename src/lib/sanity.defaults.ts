import { SiteSettings, HomePageData, FounderData, ServiceItem, MentoriaPackageItem, CustomPackageItem, TestimonialItem } from '@/types/sanity';

export const fallbackSiteSettings: SiteSettings = {
  siteName: 'Gamyasarthi',
  tagline: 'Navigating Career Decisions with Clarity and Confidence',
  domain: 'Gamyasarthi.com',
  logo: { _type: 'image', asset: { _ref: 'local-logo', _type: 'reference' } },
  primaryColor: '#F59E0B',
  secondaryColor: '#1E3A8A',
  contactInfo: {
    email: 'bpunnamaraju@yahoo.com',
    phone: '+91 9949162220',
    whatsapp: '+919949162220',
    location: 'India'
  },
  socialLinks: {
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com'
  },
  primaryCta: {
    title: 'Book a Mentoring Session',
    link: '#contact'
  },
  footer: {
    brandDescription: 'Gamyasarthi provides comprehensive career counseling, personalized mentoring, and stream advisory backed by 20+ years of expertise and certified Mentoria psychometric frameworks.',
    copyright: `© ${new Date().getFullYear()} Gamyasarthi - Bhanumurthy Punnamaraju. All rights reserved.`
  },
  seo: {
    metaTitle: 'Gamyasarthi | Bhanumurthy Punnamaraju - Career Counselling & Mentoring',
    metaDescription: 'With 20+ years of multi-domain experience, Bhanumurthy Punnamaraju guides students, graduates, and professionals toward clarity, purpose, and lasting success.'
  }
};

export const fallbackHomePage: HomePageData = {
  hero: {
    badge: 'Certified Career Mentorship & Strategic Advisory',
    heading: 'Discover Your True Potential & Build a Fulfilling Career',
    subheading: 'With 20+ years of multi-domain industry and academic experience, Bhanumurthy Punnamaraju empowers students and professionals to navigate pivotal career crossroads with clarity, science-backed assessments, and strategic confidence.',
    primaryCtaText: 'Explore Mentoria Packages',
    primaryCtaLink: '#packages',
    secondaryCtaText: 'Schedule a Consultation',
    secondaryCtaLink: '#contact',
    stats: [
      { label: 'Years of Experience', value: '20+' },
      { label: 'Students & Professionals Mentored', value: '1500+' },
      { label: 'Validated Career Paths', value: '850+' },
      { label: 'Psychometric Accuracy', value: '98%' }
    ]
  },
  introduction: {
    title: 'Why Choose Gamyasarthi?',
    description: 'Your career is one of your most significant investments. Gamyasarthi combines deep real-world business insight with the globally recognized 4-pillar Mentoria psychometric methodology to eliminate ambiguity and architect your roadmap to success.'
  },
  valuePropositions: [
    {
      _key: 'vp1',
      title: 'Scientific 4-Pillar Assessment',
      description: 'Comprehensive psychometric evaluations measuring interests, personality, aptitudes, and abilities to map out natural strengths.'
    },
    {
      _key: 'vp2',
      title: '20+ Years Corporate & Academic Wisdom',
      description: 'Practical industry insight from senior executive consulting and academic leadership, not generic theoretical advice.'
    },
    {
      _key: 'vp3',
      title: 'End-to-End Career Tracking',
      description: 'From school stream selection and college admission strategy to CV building, LinkedIn optimization, and job interview preparation.'
    },
    {
      _key: 'vp4',
      title: 'Lifetime Knowledge Gateway',
      description: 'Ongoing access to 850+ career paths, industry webinars, and direct expert helpline resolution whenever you face a crossroads.'
    }
  ]
};

export const fallbackFounder: FounderData = {
  name: 'Bhanumurthy Punnamaraju',
  title: 'Senior Career Mentor, Consultant & Educator',
  brandName: 'Gamyasarthi',
  photo: { _type: 'image', asset: { _ref: 'local-founder', _type: 'reference' } },
  bio: 'With 20+ years of experience across teaching, consulting, and diverse professional domains, I help individuals navigate career decisions with clarity and confidence. My guidance combines practical industry insights with personalized mentoring to identify strengths, explore opportunities, build career strategies, and make informed choices for long-term professional growth.',
  philosophy: 'Every individual possesses a unique blueprint of strengths, interests, and potential. Successful careers are never accidents of luck—they are built on self-awareness, informed research, and strategic execution.',
  experienceYears: '20+',
  keyHighlights: [
    'Over two decades of rich leadership in higher education, institutional mentoring, and corporate consulting.',
    'Certified career strategist skilled in psychometric assessment interpretation and multi-year roadmap design.',
    'Mentored students from premier schools, universities, and early-to-mid career professionals transitioning roles.',
    'Dedicated to ethical, transparent, and student-first guidance without commercial bias.'
  ],
  credentials: [
    'Senior Academician & Domain Consultant',
    'Certified Mentoria Career Coach & Psychometric Practitioner',
    'Expert in Stream Selection, College Admissions & Executive Career Pivots',
    'Advisor to Educational Institutions & Corporate Talent Forums'
  ]
};

export const fallbackServices: ServiceItem[] = [
  {
    _id: 'service-career-counselling',
    title: 'Career Counselling & Guidance',
    shortDescription: 'Scientific psychometric assessment combined with 1-on-1 expert coaching to identify your core strengths and align them with lucrative modern careers.',
    fullDescription: 'Make informed career choices backed by scientific psychometrics and actionable roadmaps. We evaluate your core personality traits, interests, and capabilities, eliminating confusion and charting a structured trajectory toward high-demand sectors.',
    icon: 'Compass',
    order: 1,
    targetAudience: 'School students (Grades 8-12), College Undergraduates, Postgraduates & Working Professionals',
    features: [
      'Comprehensive 4-pillar psychometric evaluation',
      'In-depth 1-on-1 counseling session with customized action report',
      'Stream & subject combination selection for high schoolers',
      'Identification of top 3 best-fit career pathways'
    ]
  },
  {
    _id: 'service-admission-guidance',
    title: 'Admission & College Guidance',
    shortDescription: 'Strategic advice on institutional selection, course eligibility, application readiness, and entrance roadmap in India and overseas.',
    fullDescription: 'Navigate the complex landscape of university admissions with ease. From shortlisting reputable colleges in India and abroad to understanding entrance exam timelines and eligibility requirements.',
    icon: 'GraduationCap',
    order: 2,
    targetAudience: 'High school seniors, undergraduate degree holders and study abroad aspirants',
    features: [
      'Unbiased shortlisting of top institutions and universities',
      'Admission timeline planning and portfolio guidance',
      'Overseas admission roadmap and country comparison',
      'SOP brainstorming and personal statement review'
    ]
  },
  {
    _id: 'service-professional-growth',
    title: 'Professional Growth & Career Pivots',
    shortDescription: 'Strategic coaching for working professionals looking to break plateaus, switch domains, or accelerate into leadership roles.',
    fullDescription: 'For working executives seeking fulfillment and rapid upward mobility. We audit your professional trajectory, identify transferable skills, and design a customized roadmap for career transitions, executive education, or domain specialization.',
    icon: 'Briefcase',
    order: 3,
    targetAudience: 'Early career executives, mid-level managers and individuals seeking career transitions',
    features: [
      'Executive career trajectory audit & capability mapping',
      'High-impact CV & LinkedIn profile restructuring',
      'Targeted job application pipeline and interview prep',
      'Industry networking strategy and executive upskilling roadmap'
    ]
  },
  {
    _id: 'service-workshops-webinars',
    title: 'Workshops & Institutional Seminars',
    shortDescription: 'High-impact group workshops and keynote seminars for schools, colleges, and corporate organizations on future-ready careers.',
    fullDescription: 'Interactive group sessions designed to demystify career trends, emerging AI and tech opportunities, and essential 21st-century workplace skills for students and educators.',
    icon: 'Users',
    order: 4,
    targetAudience: 'Schools, colleges, coaching institutes, parent teacher associations and corporate organizations',
    features: [
      'Future of Work & Emerging Careers in 2026 and beyond',
      'Parent-student career alignment interactive workshops',
      'Employability and professional readiness masterclasses',
      'Customized modules for educational institutions'
    ]
  }
];

export const fallbackPackages: MentoriaPackageItem[] = [
  {
    _id: 'pkg-grade-8-9',
    title: 'Grades 8 - 9 Students Plans',
    category: '8-9 STUDENTS',
    order: 1,
    description: 'Foundational career discovery to help early high schoolers understand their natural interests, pick the right subjects, and build confidence.',
    plans: [
      {
        _key: 'plan-1',
        planName: 'Discover',
        type: 'STANDARD',
        price: '₹ 5,500',
        duration: 'Single Stage Guidance',
        sessions: '1 Counselling Session',
        isPopular: false,
        features: [
          'Psychometric assessment to measure your interests',
          '1 career counselling session with Mentoria\'s expert career coaches',
          'Lifetime access to Knowledge Gateway',
          'Invites to live webinars by industry experts'
        ],
        excludedFeatures: [
          'Customised reports after each session with education pathways',
          'Guidance on studying abroad',
          'CV building during internships/graduation'
        ]
      },
      {
        _key: 'plan-2',
        planName: 'Discover plus+',
        type: 'PREMIUM',
        price: '₹ 15,000',
        duration: 'Multi-Year Mentorship Until Graduation',
        sessions: '8 Counselling Sessions (1 every year)',
        isPopular: true,
        badge: 'Most Popular',
        features: [
          'Psychometric assessments to measure your interests, personality and abilities',
          '8 career counselling sessions (1 every year) with Mentoria\'s expert career coaches until graduation',
          'Lifetime access to Knowledge Gateway',
          'Invites to live webinars by industry experts',
          'Customised reports after each session with education pathways',
          'Guidance on studying abroad',
          'CV building during internships/graduation'
        ],
        excludedFeatures: []
      }
    ]
  },
  {
    _id: 'pkg-grade-10-12',
    title: 'Grades 10 - 12 Students Plans',
    category: '10-12 STUDENTS',
    order: 2,
    description: 'Crucial stream selection and college admission planning to transition smoothly into the right undergraduate degree.',
    plans: [
      {
        _key: 'plan-1',
        planName: 'Achieve Online',
        type: 'STANDARD',
        price: '₹ 5,999',
        duration: 'Stream & Course Selection',
        sessions: '1 Counselling Session',
        isPopular: false,
        features: [
          'Psychometric assessment to measure your interests, personality and abilities',
          '1 career counselling session',
          'Lifetime access to Knowledge Gateway',
          'Pre-recorded webinars by industry experts'
        ],
        excludedFeatures: [
          'Customised reports after each session with education pathways',
          'Guidance on studying abroad',
          'CV reviews during internships/graduation'
        ]
      },
      {
        _key: 'plan-2',
        planName: 'Achieve Plus+',
        type: 'PREMIUM',
        price: '₹ 10,599',
        duration: 'Comprehensive High School to College Roadmap',
        sessions: '4 Counselling Sessions',
        isPopular: true,
        badge: 'Recommended for Class 10-12',
        features: [
          'Psychometric assessment to measure your interests, personality and abilities',
          '4 career counselling sessions',
          'Lifetime access to Knowledge Gateway',
          'Attend live webinars by industry experts',
          'Customised reports after each session with education pathways',
          'Guidance on studying abroad',
          'CV reviews during internships/graduation'
        ],
        excludedFeatures: []
      }
    ]
  },
  {
    _id: 'pkg-college-graduates',
    title: 'College Graduates Plans',
    category: 'COLLEGE GRADUATES',
    order: 3,
    description: 'Postgraduate specialization, certification strategy, and professional corporate job market launchpad.',
    plans: [
      {
        _key: 'plan-1',
        planName: 'Ascend Online',
        type: 'STANDARD',
        price: '₹ 6,499',
        duration: 'Graduate Launch',
        sessions: '1 Counselling Session',
        isPopular: false,
        features: [
          'Psychometric assessment to measure your interests, personality and abilities',
          '1 career counselling session',
          'Lifetime access to Knowledge Gateway',
          'Pre-recorded webinars by industry experts'
        ],
        excludedFeatures: [
          'Customised reports after each session with information on certificate/online courses',
          'Guidance on studying abroad',
          'CV reviews for job application'
        ]
      },
      {
        _key: 'plan-2',
        planName: 'Ascend Plus+',
        type: 'PREMIUM',
        price: '₹ 10,599',
        duration: '3 Sessions Comprehensive Career Acceleration',
        sessions: '3 Counselling Sessions',
        isPopular: true,
        badge: 'Most Comprehensive',
        features: [
          'Psychometric assessment to measure your interests, personality and abilities',
          '3 career counselling sessions',
          'Lifetime access to Knowledge Gateway',
          'Attend live webinars by industry experts',
          'Customised reports after each session with information on certificate/online courses',
          'Guidance on studying abroad',
          'CV reviews for job application'
        ],
        excludedFeatures: []
      }
    ]
  },
  {
    _id: 'pkg-working-professionals',
    title: 'Working Professionals Plans',
    category: 'WORKING PROFESSIONALS',
    order: 4,
    description: 'Clarity for mid-career transitions, skill up-gradation, and aligning passion with sustained corporate compensation.',
    plans: [
      {
        _key: 'plan-1',
        planName: 'Ascend Online',
        type: 'STANDARD',
        price: '₹ 6,499',
        duration: 'Pivot Assessment & Clarity',
        sessions: '1 Counselling Session',
        isPopular: false,
        features: [
          'Psychometric assessment to measure your interests, personality and abilities',
          '1 career counselling session',
          'Lifetime access to Knowledge Gateway',
          'Pre-recorded webinars by industry experts'
        ],
        excludedFeatures: [
          'Customised reports after each session with information on certificate/online courses',
          'Guidance on studying abroad',
          'CV reviews for job application'
        ]
      },
      {
        _key: 'plan-2',
        planName: 'Ascend Plus+',
        type: 'PREMIUM',
        price: '₹ 10,599',
        duration: 'Executive Strategic Career Pivot',
        sessions: '3 Counselling Sessions',
        isPopular: true,
        badge: 'Top Executive Choice',
        features: [
          'Psychometric assessment to measure your interests, personality and abilities',
          '3 career counselling sessions',
          'Lifetime access to Knowledge Gateway',
          'Attend live webinars by industry experts',
          'Customised reports after each session with information on certificate/online courses',
          'Guidance on studying abroad',
          'CV reviews for job application'
        ],
        excludedFeatures: []
      }
    ]
  }
];

export const fallbackCustomPackages: CustomPackageItem[] = [
  {
    _id: 'addon-cv-building',
    title: 'CV Building',
    price: '₹ 2,000',
    description: 'Is your CV making a great first impression on your behalf? Our HR experts will help you build the kind of CV that stands out from the crowd and increases your chances of getting interview calls.',
    order: 1,
    category: 'Application Readiness'
  },
  {
    _id: 'addon-linkedin-building',
    title: 'LinkedIn Profile Building',
    price: '₹ 2,000',
    description: 'Revamp your LinkedIn profile with recommendations from recruitment experts to showcase your career journey and increase your chances of interview calls.',
    order: 2,
    category: 'Application Readiness'
  },
  {
    _id: 'addon-linkedin-cv-combo',
    title: 'LinkedIn Profile + CV Building',
    price: '₹ 3,500',
    description: 'Build the kind of profile recruiters would love to spend time on. Get your CV and LinkedIn profile built by our HR/Recruitment experts.',
    order: 3,
    category: 'Application Readiness'
  },
  {
    _id: 'addon-job-strategy',
    title: 'Job Application Strategy',
    price: '₹ 4,000',
    description: 'Build the right pipeline for job interviews through a customised job application tracker with information on companies, job postings and steps you need to follow to land your dream job.',
    order: 4,
    category: 'Job Strategy'
  },
  {
    _id: 'addon-career-report',
    title: 'Career Report',
    price: '₹ 2,500',
    description: 'Get a detailed report of your psychometric assessment for a scientific analysis of your interests, personality and abilities. Find out where your interests lie and which future paths you can potentially consider.',
    order: 5,
    category: 'Assessments'
  },
  {
    _id: 'addon-career-report-counselling',
    title: 'Career Report + Career Counselling',
    price: '₹ 4,000',
    description: 'Connect with India\'s top career coaches to analyse your psychometric report, get a detailed action plan for your development areas and shortlist the top three career paths you\'re most likely to enjoy and excel at.',
    order: 6,
    category: 'Assessments'
  },
  {
    _id: 'addon-knowledge-gateway-helpline',
    title: 'Knowledge Gateway + Career Helpline Access',
    price: '₹ 250 / month',
    description: 'Unlock holistic information on your career paths and get direct access to Mentoria\'s experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love.',
    order: 7,
    category: 'Ongoing Support'
  },
  {
    _id: 'addon-one-to-one-expert',
    title: 'One-to-One Session with a Career Expert',
    price: '₹ 3,500 per interaction for 1 hour',
    description: 'Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field.',
    order: 8,
    category: 'Expert Consultation'
  },
  {
    _id: 'addon-overseas-planner',
    title: 'Overseas Admission Planner',
    price: '₹ 3,000 for a planner with top 10 colleges',
    description: 'Planning your masters studies? Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner.',
    order: 9,
    category: 'Overseas Admissions'
  },
  {
    _id: 'addon-sop-brainstorm',
    title: 'Overseas Admission: SOP Brainstorm',
    price: '₹ 3,000 for a 1-hour session',
    description: 'Increase your chances of getting admissions in your dream college by structuring your SOP in the most ideal manner through discussions with an overseas admissions expert.',
    order: 10,
    category: 'Overseas Admissions'
  },
  {
    _id: 'addon-sop-review',
    title: 'Overseas Admission: SOP Review',
    price: '₹ 2,500',
    description: 'Is your SOP/Essay good enough to get you shortlisted? Get it reviewed by our team of overseas admissions experts to make sure you make the cut.',
    order: 11,
    category: 'Overseas Admissions'
  },
  {
    _id: 'addon-interview-prep',
    title: 'Interview Prep Session',
    price: '₹ 2,000',
    description: 'Ace your upcoming interviews with guidance from India\'s top HR experts and increase your chances of landing your dream job.',
    order: 12,
    category: 'Interview Preparation'
  }
];

export const fallbackTestimonials: TestimonialItem[] = [
  {
    _id: 'testimonial-1',
    name: 'Dr. Ramesh Sundaram',
    role: 'Parent of Class 11 Student',
    company: 'Hyderabad',
    content: 'We were completely confused between MPC and BiPC for my son. Bhanumurthy sir\'s counseling and the Mentoria psychometric assessment gave us absolute clarity. He explained the career pathways with unmatched patience and depth.',
    rating: 5,
    order: 1,
    featured: true
  },
  {
    _id: 'testimonial-2',
    name: 'Priyanka Reddy',
    role: 'Engineering Graduate & Tech Analyst',
    company: 'Bengaluru',
    content: 'I felt stuck in a job that did not match my strengths. Sir helped me identify my transferable analytical capabilities and assisted with my resume and interview readiness. I landed my target product role within 3 months!',
    rating: 5,
    order: 2,
    featured: true
  },
  {
    _id: 'testimonial-3',
    name: 'Aditya Kulkarni',
    role: 'Class 12 Student',
    company: 'Visakhapatnam',
    content: 'The Discover Plus package gave me peace of mind. Knowing that I have an experienced mentor who understands both academic courses and real-world corporate demands made all the difference during my college applications.',
    rating: 5,
    order: 3,
    featured: true
  }
];
