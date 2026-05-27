export type Locale = "en" | "fr" | "tn";

export const locales: { code: Locale; label: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "tn", label: "تونسي", flag: "🇹🇳", dir: "rtl" },
];

// ─────────────────────────────────────────────────────────
// TRANSLATION DICTIONARY
// ─────────────────────────────────────────────────────────
export const translations = {
  // ── NAVBAR ──────────────────────────────────────────────
  nav: {
    services: { en: "Services", fr: "Services", tn: "خدماتنا" },
    portfolio: { en: "Portfolio", fr: "Portfolio", tn: "مشاريعنا" },
    pricing: { en: "Pricing", fr: "Tarifs", tn: "الأسعار" },
    blog: { en: "Insights", fr: "Blog", tn: "مقالات" },
    about: { en: "About", fr: "À propos", tn: "من إحنا" },
    contact: { en: "Contact", fr: "Contact", tn: "اتصل بينا" },
    talkToUs: { en: "Talk to us", fr: "Parlez-nous", tn: "كلمنا" },
  },

  // ── HERO ────────────────────────────────────────────────
  hero: {
    badge: {
      en: "Premium digital studio — Tunis, Tunisia",
      fr: "Studio digital premium — Tunis, Tunisie",
      tn: "ستوديو رقمي متميّز — تونس",
    },
    title1: {
      en: "We build powerful websites,",
      fr: "Nous créons des sites web puissants,",
      tn: "نبنيولكم مواقع ويب قوية،",
    },
    titleHighlight: {
      en: "platforms",
      fr: "plateformes",
      tn: "منصات",
    },
    titleAnd: {
      en: "and",
      fr: "et",
      tn: "و",
    },
    titleHighlight2: {
      en: "business systems",
      fr: "systèmes d'entreprise",
      tn: "أنظمة تجارية",
    },
    titleEnd: {
      en: "for modern companies.",
      fr: "pour les entreprises modernes.",
      tn: "للشركات العصرية.",
    },
    subtitle: {
      en: "From a professional website to a full SaaS platform — we help businesses build a stronger digital presence, automate their operations and grow faster.",
      fr: "D'un site web professionnel à une plateforme SaaS complète — nous aidons les entreprises à renforcer leur présence digitale, automatiser leurs opérations et croître plus vite.",
      tn: "من موقع ويب مهني لمنصة SaaS كاملة — نعاونوا الشركات تبني حضور رقمي قوي، تأتمت عملياتها، وتكبر أسرع.",
    },
    ctaStart: {
      en: "Start your project",
      fr: "Démarrer votre projet",
      tn: "ابدأ مشروعك",
    },
    ctaWhatsapp: {
      en: "Free consultation on WhatsApp",
      fr: "Consultation gratuite sur WhatsApp",
      tn: "استشارة مجانية على واتساب",
    },
    trust1: { en: "{clients}+ businesses served", fr: "{clients}+ entreprises accompagnées", tn: "+{clients} شركة موثوقة" },
    trust2: { en: "{rating}★ client satisfaction", fr: "{rating}★ satisfaction client", tn: "{rating}★ رضا العملاء" },
    trust3: { en: "Delivery in {delivery} days", fr: "Livraison en {delivery} jours", tn: "تسليم في {delivery} يوم" },
    clientsTitle: {
      en: "Built for all kinds of businesses",
      fr: "Conçu pour tous types d'entreprises",
      tn: "مصمّم لكل أنواع الأعمال",
    },
    clients: {
      en: ["Startups", "Restaurants", "Clinics & Doctors", "Real Estate", "Local Businesses", "Agencies", "E-commerce", "Entrepreneurs"],
      fr: ["Startups", "Restaurants", "Cliniques & Médecins", "Immobilier", "Commerces locaux", "Agences", "E-commerce", "Entrepreneurs"],
      tn: ["ستارتابات", "مطاعم", "عيادات وأطباء", "عقارات", "محلات محلية", "وكالات", "تجارة إلكترونية", "رياديين"],
    },
  },

  // ── STATS ───────────────────────────────────────────────
  // NOTE: the big `value` shown for each stat is sourced live from
  // src/config/metrics.ts (see the Stats component). Only the labels
  // and sub-labels live here.
  stats: {
    s1: { en: "Businesses served", fr: "Entreprises accompagnées", tn: "شركة خدمناها", sub: { en: "in Tunisia & internationally", fr: "en Tunisie et à l'international", tn: "في تونس وخارجها" } },
    s2: { en: "Days to deliver", fr: "Jours de livraison", tn: "يوم للتسليم", sub: { en: "average Starter project", fr: "projet Starter en moyenne", tn: "للمشاريع العادية" } },
    s3: { en: "Client retention", fr: "Fidélité client", tn: "رضا العملاء", sub: { en: "clients who come back", fr: "clients qui reviennent", tn: "عملاء يرجعولنا" } },
    s4: { en: "Satisfaction rate", fr: "Taux de satisfaction", tn: "تقييم العملاء", sub: { en: "across all projects", fr: "sur tous les projets", tn: "على كل المشاريع" } },
  },

  // ── SECTION LABELS ──────────────────────────────────────
  sections: {
    whatWeDo: { en: "What we do", fr: "Ce que nous faisons", tn: "شنوة نعملوا" },
    servicesTitle: { en: "Everything your business needs to grow online", fr: "Tout ce qu'il faut à votre entreprise pour croître en ligne", tn: "كل شي محتاجه تعملك تكبر أونلاين" },
    servicesDesc: { en: "From a simple professional website to a complete business management platform — we cover the full spectrum so you only work with one trusted team.", fr: "D'un simple site professionnel à une plateforme de gestion complète — nous couvrons tout le spectre pour que vous ne travailliez qu'avec une seule équipe de confiance.", tn: "من موقع مهني بسيط لمنصة إدارة أعمال كاملة — نغطيوا كل شي باش تشتغل مع فريق واحد موثوق." },
    exploreServices: { en: "Explore all services", fr: "Explorer tous les services", tn: "اكتشف كل الخدمات" },

    ourWork: { en: "Our work", fr: "Nos réalisations", tn: "أعمالنا" },
    portfolioTitle: { en: "Real results for real businesses", fr: "Des résultats concrets pour de vraies entreprises", tn: "نتائج حقيقية لأعمال حقيقية" },
    portfolioDesc: { en: "A selection of websites, platforms and systems we've built for businesses across Tunisia and beyond.", fr: "Une sélection de sites web, plateformes et systèmes que nous avons construits pour des entreprises en Tunisie et ailleurs.", tn: "مختارات من المواقع والمنصات والأنظمة لي بنيناها لشركات في تونس وبرا." },
    viewPortfolio: { en: "View full portfolio", fr: "Voir le portfolio complet", tn: "شوف كل مشاريعنا" },

    whyFirlou: { en: "Why Firlou", fr: "Pourquoi Firlou", tn: "علاش Firlou" },
    whyTitle: { en: "The studio that treats your business like its own", fr: "Le studio qui traite votre entreprise comme la sienne", tn: "الستوديو لي يحسب مشروعك مشروعه" },
    whyDesc: { en: "We're not a generic agency. We're two passionate founders who care deeply about your results — and it shows in every project we ship.", fr: "Nous ne sommes pas une agence générique. Nous sommes deux fondateurs passionnés qui se soucient profondément de vos résultats.", tn: "مش وكالة عادية. إحنا زوز مؤسسين شغوفين نهتموا بنتائجك — وهذا يبان في كل مشروع نسلموه." },

    howWeWork: { en: "How we work", fr: "Comment nous travaillons", tn: "كيفاش نخدموا" },
    processTitle: { en: "A clear, transparent process — no surprises", fr: "Un processus clair et transparent — sans surprises", tn: "عملية واضحة وشفافة — بلا مفاجآت" },
    processDesc: { en: "You always know where your project stands and what comes next.", fr: "Vous savez toujours où en est votre projet et ce qui vient ensuite.", tn: "دائماً تعرف وين وصل مشروعك وشنوة جي بعدها." },

    clientResults: { en: "Client results", fr: "Résultats clients", tn: "نتائج عملاؤنا" },
    testimonialsTitle: { en: "Businesses that trusted us — and grew", fr: "Des entreprises qui nous ont fait confiance — et ont grandi", tn: "أعمال وثقت فينا — وكبرت" },
    testimonialsDesc: { en: "We measure success by the real impact we create.", fr: "Nous mesurons le succès par l'impact réel que nous créons.", tn: "نقيسوا النجاح بالأثر الحقيقي لي نحقّقوه." },

    pricing: { en: "Pricing", fr: "Tarifs", tn: "الأسعار" },
    pricingTitle: { en: "Transparent pricing, built for Tunisian businesses", fr: "Des tarifs transparents, pensés pour les entreprises tunisiennes", tn: "أسعار واضحة، مصممة للشركات التونسية" },
    pricingDesc: { en: "Clear starting points with full flexibility. Projects smaller or larger than our plans are always welcome.", fr: "Des points de départ clairs avec toute la flexibilité. Les projets plus petits ou plus grands sont toujours les bienvenus.", tn: "نقاط انطلاق واضحة مع مرونة كاملة. المشاريع الأصغر أو الأكبر دائماً مرحب بها." },
    seePricing: { en: "See full pricing details", fr: "Voir les détails complets des tarifs", tn: "شوف تفاصيل الأسعار" },
  },

  // ── SERVICES ────────────────────────────────────────────
  services: {
    "digital-presence": {
      title: { en: "Digital Presence", fr: "Présence Digitale", tn: "الحضور الرقمي" },
      description: {
        en: "Modern websites and optimized digital experiences that help your business look professional, attract clients and get discovered online.",
        fr: "Sites web modernes et expériences digitales optimisées qui aident votre entreprise à paraître professionnelle, attirer des clients et être découverte en ligne.",
        tn: "مواقع عصرية وتجارب رقمية محسّنة تخلّي مشروعك يبان احترافي، يجلب عملاء، ويتلقى أونلاين.",
      },
      features: {
        en: ["Professional website", "SEO optimization", "Google-ready setup"],
        fr: ["Site professionnel", "Optimisation SEO", "Référencement Google"],
        tn: ["موقع احترافي", "تحسين محركات البحث", "إعداد Google"],
      },
      badge: { en: "Most requested", fr: "Le plus demandé", tn: "الأكثر طلباً" },
    },
    "web-development": {
      title: { en: "Custom Websites", fr: "Sites Web Sur Mesure", tn: "مواقع مخصصة" },
      description: {
        en: "Tailor-made websites built to reflect your brand, convert visitors into clients and perform perfectly on every device.",
        fr: "Sites web sur mesure conçus pour refléter votre marque, convertir les visiteurs en clients et fonctionner parfaitement sur tous les appareils.",
        tn: "مواقع مخصصة مبنية باش تعكس علامتك التجارية، تحوّل الزوار لعملاء، وتشتغل زين على كل الأجهزة.",
      },
      features: {
        en: ["Mobile-first design", "WhatsApp integration", "Fast loading"],
        fr: ["Design mobile-first", "Intégration WhatsApp", "Chargement rapide"],
        tn: ["تصميم موبايل أولاً", "تكامل واتساب", "تحميل سريع"],
      },
    },
    "saas-mvp": {
      title: { en: "Startup & SaaS Development", fr: "Développement Startup & SaaS", tn: "تطوير ستارتاب و SaaS" },
      description: {
        en: "We turn your business idea into a fully working product. From MVP to investor-ready platform, we handle the entire build.",
        fr: "Nous transformons votre idée d'entreprise en un produit entièrement fonctionnel. Du MVP à la plateforme prête pour les investisseurs.",
        tn: "نحوّلوا فكرتك التجارية لمنتج يشتغل كامل. من MVP للمنصة الجاهزة للمستثمرين.",
      },
      features: {
        en: ["Rapid launch", "Subscription billing", "Scalable architecture"],
        fr: ["Lancement rapide", "Facturation abonnement", "Architecture évolutive"],
        tn: ["إطلاق سريع", "نظام اشتراك", "بنية تحتية قابلة للتوسع"],
      },
    },
    "admin-dashboards": {
      title: { en: "Business Management Systems", fr: "Systèmes de Gestion d'Entreprise", tn: "أنظمة إدارة الأعمال" },
      description: {
        en: "Custom dashboards and management tools built around how your business actually works — track everything from one place.",
        fr: "Tableaux de bord personnalisés et outils de gestion conçus autour du fonctionnement réel de votre entreprise.",
        tn: "لوحات تحكم مخصصة وأدوات إدارة مبنية حسب طريقة عملك — تتبّع كل شي من مكان واحد.",
      },
      features: {
        en: ["Real-time data", "Role-based access", "Reports & exports"],
        fr: ["Données en temps réel", "Accès par rôle", "Rapports & exports"],
        tn: ["بيانات آنية", "صلاحيات حسب الدور", "تقارير وتصدير"],
      },
    },
    "automation-systems": {
      title: { en: "Workflow & Business Automation", fr: "Automatisation des Processus", tn: "أتمتة العمليات التجارية" },
      description: {
        en: "Stop wasting time on repetitive tasks. We automate your business processes so your team can focus on what matters.",
        fr: "Arrêtez de perdre du temps sur des tâches répétitives. Nous automatisons vos processus pour que votre équipe se concentre sur l'essentiel.",
        tn: "وقّف تضيّع الوقت في المهام المتكررة. نأتمت عملياتك التجارية باش فريقك يركّز على المهم.",
      },
      features: {
        en: ["CRM automation", "Email & notifications", "Custom workflows"],
        fr: ["Automatisation CRM", "Emails & notifications", "Workflows personnalisés"],
        tn: ["أتمتة CRM", "إيميلات وإشعارات", "سير عمل مخصص"],
      },
    },
    "ai-integration": {
      title: { en: "AI-Powered Features", fr: "Fonctionnalités IA", tn: "مميزات الذكاء الاصطناعي" },
      description: {
        en: "Add intelligent features to your business: smart chatbots, automated assistants, content generation and data analysis.",
        fr: "Ajoutez des fonctionnalités intelligentes : chatbots, assistants automatisés, génération de contenu et analyse de données.",
        tn: "زيد مميزات ذكية لمشروعك: شاتبوت ذكي، مساعدين آليين، توليد محتوى وتحليل بيانات.",
      },
      features: {
        en: ["AI chatbots", "Smart automation", "Data insights"],
        fr: ["Chatbots IA", "Automatisation intelligente", "Insights données"],
        tn: ["شاتبوت ذكي", "أتمتة ذكية", "تحليل البيانات"],
      },
      badge: { en: "New", fr: "Nouveau", tn: "جديد" },
    },
    "internal-platforms": {
      title: { en: "Internal Business Platforms", fr: "Plateformes Internes d'Entreprise", tn: "منصات داخلية للأعمال" },
      description: {
        en: "Custom platforms built for your team — inventory management, CRM, booking systems, HR tools and more.",
        fr: "Plateformes sur mesure pour votre équipe — gestion des stocks, CRM, systèmes de réservation, outils RH et plus.",
        tn: "منصات مخصصة لفريقك — إدارة المخزون، CRM، أنظمة حجز، أدوات موارد بشرية وأكثر.",
      },
      features: {
        en: ["Tailored to your ops", "Secure access control", "Fully customizable"],
        fr: ["Adapté à vos opérations", "Contrôle d'accès sécurisé", "Entièrement personnalisable"],
        tn: ["مكيّف لعملياتك", "تحكم آمن في الوصول", "قابل للتخصيص الكامل"],
      },
    },
    "api-backend": {
      title: { en: "Custom Business Systems", fr: "Systèmes Métier Personnalisés", tn: "أنظمة أعمال مخصصة" },
      description: {
        en: "Robust digital infrastructure that powers your business behind the scenes — APIs, databases, integrations and automation engines.",
        fr: "Infrastructure digitale robuste qui propulse votre entreprise en coulisses — APIs, bases de données, intégrations et moteurs d'automatisation.",
        tn: "بنية رقمية قوية تشغّل مشروعك من الخلف — APIs، قواعد بيانات، تكاملات ومحركات أتمتة.",
      },
      features: {
        en: ["API integrations", "Secure data systems", "Third-party connections"],
        fr: ["Intégrations API", "Systèmes de données sécurisés", "Connexions tierces"],
        tn: ["تكاملات API", "أنظمة بيانات آمنة", "ربط بأطراف خارجية"],
      },
    },
  },

  // ── PROCESS ─────────────────────────────────────────────
  process: {
    note: {
      en: "Every step is transparent. You're always informed, always in control.",
      fr: "Chaque étape est transparente. Vous êtes toujours informé, toujours en contrôle.",
      tn: "كل خطوة شفافة. دائماً مطّلع، دائماً في السيطرة.",
    },
    steps: [
      {
        title: { en: "Discovery Call", fr: "Appel de Découverte", tn: "مكالمة الاكتشاف" },
        description: {
          en: "We start with a free consultation to understand your business, goals, budget and timeline. No commitment required.",
          fr: "Nous commençons par une consultation gratuite pour comprendre votre activité, vos objectifs, votre budget et votre calendrier.",
          tn: "نبدأوا باستشارة مجانية نفهموا فيها مشروعك، أهدافك، ميزانيتك والجدول الزمني. بدون التزام.",
        },
        duration: { en: "Day 1", fr: "Jour 1", tn: "اليوم الأول" },
      },
      {
        title: { en: "Planning", fr: "Planification", tn: "التخطيط" },
        description: {
          en: "We produce a clear project plan, feature list and technical scope. You know exactly what you're getting and when.",
          fr: "Nous produisons un plan de projet clair, une liste de fonctionnalités et un périmètre technique. Vous savez exactement ce que vous obtenez et quand.",
          tn: "نعملوا خطة مشروع واضحة، قائمة مميزات، ونطاق تقني. تعرف بالضبط شنوة راهو يجيك ومتى.",
        },
        duration: { en: "Days 2–3", fr: "Jours 2–3", tn: "الأيام 2–3" },
      },
      {
        title: { en: "UI/UX Design", fr: "Design UI/UX", tn: "تصميم واجهة المستخدم" },
        description: {
          en: "We design every screen before writing code — wireframes, mockups and a premium design system tailored to your brand.",
          fr: "Nous concevons chaque écran avant d'écrire du code — wireframes, maquettes et système de design premium adapté à votre marque.",
          tn: "نصممّوا كل شاشة قبل الكود — تخطيطات ومحاكيات ونظام تصميم متميز مكيّف لعلامتك.",
        },
        duration: { en: "Week 1–2", fr: "Semaine 1–2", tn: "الأسبوع 1–2" },
      },
      {
        title: { en: "Development", fr: "Développement", tn: "التطوير" },
        description: {
          en: "We build with modern technologies — clean, tested, scalable code. You receive progress updates throughout.",
          fr: "Nous développons avec des technologies modernes — du code propre, testé et évolutif. Vous recevez des mises à jour régulières.",
          tn: "نبنيوا بتقنيات حديثة — كود نظيف، مختبر وقابل للتوسع. تتلقى تحديثات طول المشروع.",
        },
        duration: { en: "Week 2–4", fr: "Semaine 2–4", tn: "الأسبوع 2–4" },
      },
      {
        title: { en: "Testing", fr: "Tests", tn: "الاختبار" },
        description: {
          en: "We thoroughly test for performance, responsiveness, accessibility and security before anything goes live.",
          fr: "Nous testons minutieusement les performances, la réactivité, l'accessibilité et la sécurité avant tout lancement.",
          tn: "نختبروا بشكل شامل الأداء، الاستجابة، وصولية الموقع، والأمان قبل أي إطلاق.",
        },
        duration: { en: "Final days", fr: "Derniers jours", tn: "الأيام الأخيرة" },
      },
      {
        title: { en: "Launch & Support", fr: "Lancement & Support", tn: "الإطلاق والدعم" },
        description: {
          en: "We deploy, monitor and support your product after launch. We're here for the long term — not just the handover.",
          fr: "Nous déployons, surveillons et supportons votre produit après le lancement. Nous sommes là sur le long terme.",
          tn: "نطلقوا، نراقبوا ونساندوا منتجك بعد الإطلاق. إحنا هنا للمدى البعيد — مش بس للتسليم.",
        },
        duration: { en: "Ongoing", fr: "En continu", tn: "مستمر" },
      },
    ],
  },

  // ── WHY CHOOSE US ───────────────────────────────────────
  why: {
    reasons: [
      {
        title: { en: "Fast delivery", fr: "Livraison rapide", tn: "تسليم سريع" },
        description: {
          en: "We work efficiently and transparently. Most projects are delivered on time, with no surprises.",
          fr: "Nous travaillons efficacement et en toute transparence. La plupart des projets sont livrés à temps.",
          tn: "نخدموا بكفاءة وشفافية. أغلب المشاريع تتسلّم في وقتها بدون مفاجآت.",
        },
      },
      {
        title: { en: "Modern technologies", fr: "Technologies modernes", tn: "تقنيات عصرية" },
        description: {
          en: "We use the latest tools — Next.js, React, AI integrations — to ensure your product is future-proof.",
          fr: "Nous utilisons les derniers outils — Next.js, React, intégrations IA — pour assurer la pérennité de votre produit.",
          tn: "نستخدموا أحدث الأدوات — Next.js، React، تكاملات AI — باش منتجك يدوم للمستقبل.",
        },
      },
      {
        title: { en: "Mobile-first design", fr: "Design mobile-first", tn: "تصميم موبايل أولاً" },
        description: {
          en: "Every project is designed and tested for mobile first. Your clients will have a perfect experience on any device.",
          fr: "Chaque projet est conçu et testé pour mobile d'abord. Vos clients auront une expérience parfaite sur tout appareil.",
          tn: "كل مشروع يتصمّم ويختبر للموبايل أولاً. عملاؤك يحصلوا على تجربة مثالية على أي جهاز.",
        },
      },
      {
        title: { en: "Scalable architecture", fr: "Architecture évolutive", tn: "بنية قابلة للتوسع" },
        description: {
          en: "We build systems that grow with your business. What we build today won't become a bottleneck tomorrow.",
          fr: "Nous construisons des systèmes qui grandissent avec votre entreprise. Ce que nous construisons aujourd'hui ne deviendra pas un goulot d'étranglement demain.",
          tn: "نبنيوا أنظمة تكبر مع مشروعك. ما نبنيوه اليوم ما يصيرش عائق غداً.",
        },
      },
      {
        title: { en: "Premium UI/UX", fr: "UI/UX Premium", tn: "تصميم UI/UX متميّز" },
        description: {
          en: "We obsess over design quality. Every detail is crafted to look professional, trustworthy and impressive.",
          fr: "Nous sommes obsédés par la qualité du design. Chaque détail est conçu pour paraître professionnel, digne de confiance et impressionnant.",
          tn: "عندنا هوس بجودة التصميم. كل تفصيلة مصممة تبان احترافية، موثوقة ومميزة.",
        },
      },
      {
        title: { en: "Direct communication", fr: "Communication directe", tn: "تواصل مباشر" },
        description: {
          en: "You work directly with the founders — no middlemen, no account managers. Fast responses via WhatsApp.",
          fr: "Vous travaillez directement avec les fondateurs — sans intermédiaires. Réponses rapides via WhatsApp.",
          tn: "تشتغل مباشرة مع المؤسسين — بلا وسطاء. ردود سريعة على واتساب.",
        },
      },
      {
        title: { en: "Long-term support", fr: "Support à long terme", tn: "دعم طويل المدى" },
        description: {
          en: "We don't disappear after launch. We offer ongoing support, updates and evolution as your business grows.",
          fr: "Nous ne disparaissons pas après le lancement. Nous offrons un support continu, des mises à jour et une évolution au fil de votre croissance.",
          tn: "ما نغيبوش بعد الإطلاق. نوفروا دعم مستمر، تحديثات وتطوير كيما يكبر مشروعك.",
        },
      },
      {
        title: { en: "Trusted & reliable", fr: "Fiable et de confiance", tn: "موثوق وأمين" },
        description: {
          en: "{clients}+ successful projects and a {retention}% client retention rate. Our clients keep coming back — and referring us.",
          fr: "{clients}+ projets réussis et un taux de rétention de {retention}%. Nos clients reviennent — et nous recommandent.",
          tn: "+{clients} مشروع ناجح ونسبة رضا {retention}%. عملاؤنا يرجعوا دائماً — ويوصوا بينا.",
        },
      },
    ],
  },

  // ── BUILT FOR BUSINESSES ────────────────────────────────
  built: {
    eyebrow: { en: "Built for every business", fr: "Conçu pour toute entreprise", tn: "مصمم لكل الأعمال" },
    title: {
      en: "Whether you're a startup, a local business or a growing company — we create digital systems",
      fr: "Que vous soyez une startup, un commerce local ou une entreprise en croissance — nous créons des systèmes digitaux",
      tn: "سواء كنت ستارتاب، محل محلي، أو شركة في نمو — نبنيوا أنظمة رقمية",
    },
    titleHighlight: {
      en: "tailored to your goals.",
      fr: "adaptés à vos objectifs.",
      tn: "مكيّفة لأهدافك.",
    },
    subtitle: {
      en: "We understand the Tunisian market and speak your language — Arabic, French or English. No generic templates, no one-size-fits-all solutions.",
      fr: "Nous comprenons le marché tunisien et parlons votre langue — arabe, français ou anglais. Pas de modèles génériques.",
      tn: "نفهموا السوق التونسي ونحكي بلغتك — عربي، فرنسي أو إنجليزي. ما فيش قوالب عامة.",
    },
    ctaProject: { en: "Tell us about your project", fr: "Parlez-nous de votre projet", tn: "حكينا على مشروعك" },
    ctaWhatsapp: { en: "Free consultation on WhatsApp", fr: "Consultation gratuite sur WhatsApp", tn: "استشارة مجانية على واتساب" },
    types: [
      {
        title: { en: "Startups & SaaS", fr: "Startups & SaaS", tn: "ستارتابات وSaaS" },
        description: {
          en: "Launch your MVP fast and scale with confidence. We've helped founders go from idea to product in weeks.",
          fr: "Lancez votre MVP rapidement et évoluez avec confiance. Nous avons aidé des fondateurs à passer de l'idée au produit en quelques semaines.",
          tn: "أطلق MVP بسرعة وتوسّع بثقة. عاونّا مؤسسين يعدّوا من الفكرة للمنتج في أسابيع.",
        },
      },
      {
        title: { en: "Local Businesses", fr: "Commerces locaux", tn: "المحلات المحلية" },
        description: {
          en: "Boutiques, shops, service providers — get a professional website that attracts and converts local clients.",
          fr: "Boutiques, commerces, prestataires de services — obtenez un site professionnel qui attire et convertit les clients locaux.",
          tn: "بوتيكات، محلات، مقدّمي خدمات — احصل على موقع احترافي يجلب ويحوّل العملاء المحليين.",
        },
      },
      {
        title: { en: "Restaurants & Cafés", fr: "Restaurants & Cafés", tn: "المطاعم والمقاهي" },
        description: {
          en: "Digital menus, online reservations, WhatsApp ordering — everything your restaurant needs to thrive online.",
          fr: "Menus digitaux, réservations en ligne, commande via WhatsApp — tout ce dont votre restaurant a besoin.",
          tn: "منيوهات رقمية، حجوزات أونلاين، طلبات واتساب — كل شي يحتاجه مطعمك يكبر أونلاين.",
        },
      },
      {
        title: { en: "Doctors & Clinics", fr: "Médecins & Cliniques", tn: "أطباء وعيادات" },
        description: {
          en: "Patient management systems, appointment booking, clinic dashboards — digital tools built for healthcare.",
          fr: "Systèmes de gestion des patients, prise de rendez-vous, tableaux de bord cliniques — outils digitaux pour la santé.",
          tn: "أنظمة إدارة المرضى، حجز المواعيد، لوحات تحكم العيادات — أدوات رقمية للقطاع الصحي.",
        },
      },
      {
        title: { en: "Agencies & Freelancers", fr: "Agences & Freelancers", tn: "وكالات وفريلانسرز" },
        description: {
          en: "A premium portfolio and client management system that makes your services impossible to ignore.",
          fr: "Un portfolio premium et un système de gestion client qui rend vos services impossibles à ignorer.",
          tn: "بورتفوليو متميز ونظام إدارة عملاء يخلّي خدماتك مستحيل تتجاهلها.",
        },
      },
      {
        title: { en: "Growing Companies", fr: "Entreprises en croissance", tn: "شركات في نمو" },
        description: {
          en: "Internal platforms, ERP-lite systems, automation tools — we build what your team needs to operate better.",
          fr: "Plateformes internes, systèmes ERP-lite, outils d'automatisation — nous construisons ce dont votre équipe a besoin.",
          tn: "منصات داخلية، أنظمة ERP خفيفة، أدوات أتمتة — نبنيوا ما يحتاجه فريقك يخدم أحسن.",
        },
      },
    ],
  },

  // ── PRICING ─────────────────────────────────────────────
  pricing: {
    plans: [
      {
        slug: "starter",
        name: { en: "Starter", fr: "Starter", tn: "البداية" },
        description: {
          en: "Perfect for local businesses, restaurants, doctors and freelancers who need a professional online presence fast.",
          fr: "Parfait pour les commerces locaux, restaurants, médecins et freelancers qui ont besoin d'une présence en ligne professionnelle rapidement.",
          tn: "مثالي للمحلات المحلية، المطاعم، الأطباء والفريلانسرز لي يحتاجوا حضور أونلاين احترافي بسرعة.",
        },
        features: {
          en: ["Modern landing page or small website", "Fully mobile responsive design", "WhatsApp & contact form integration", "Basic SEO optimization", "Google Maps & social media links", "Fast delivery — 7 to 14 days", "1 month of post-launch support"],
          fr: ["Page de destination ou petit site web moderne", "Design entièrement responsive", "Intégration WhatsApp & formulaire de contact", "Optimisation SEO de base", "Liens Google Maps & réseaux sociaux", "Livraison rapide — 7 à 14 jours", "1 mois de support post-lancement"],
          tn: ["صفحة هبوط أو موقع صغير عصري", "تصميم متجاوب كامل على الموبايل", "تكامل واتساب وفورم الاتصال", "تحسين SEO أساسي", "روابط خرائط جوجل وسوشيال ميديا", "تسليم سريع — 7 إلى 14 يوم", "شهر دعم بعد الإطلاق"],
        },
        cta: { en: "Start your website", fr: "Créer votre site", tn: "ابدأ موقعك" },
      },
      {
        slug: "professional",
        name: { en: "Professional", fr: "Professionnel", tn: "الاحترافي" },
        description: {
          en: "For businesses that need more than a website — a complete digital system with management tools and automation.",
          fr: "Pour les entreprises qui ont besoin de plus qu'un site web — un système digital complet avec des outils de gestion.",
          tn: "للشركات لي تحتاج أكثر من موقع — نظام رقمي كامل بأدوات إدارة وأتمتة.",
        },
        features: {
          en: ["Advanced multi-page website", "Custom admin dashboard & CMS", "Authentication & user roles", "Business management tools", "Workflow & process automation", "API integrations", "SEO & performance optimization", "3 months of priority support"],
          fr: ["Site web multi-pages avancé", "Tableau de bord admin & CMS personnalisé", "Authentification & rôles utilisateurs", "Outils de gestion d'entreprise", "Automatisation des flux", "Intégrations API", "Optimisation SEO & performance", "3 mois de support prioritaire"],
          tn: ["موقع متعدد الصفحات متقدم", "لوحة تحكم ادمن وCMS مخصص", "مصادقة وأدوار المستخدمين", "أدوات إدارة الأعمال", "أتمتة سير العمل", "تكاملات API", "تحسين SEO والأداء", "3 أشهر دعم أولوية"],
        },
        cta: { en: "Book a free call", fr: "Réserver un appel gratuit", tn: "احجز مكالمة مجانية" },
        badge: { en: "Most popular", fr: "Le plus populaire", tn: "الأكثر شيوعاً" },
      },
      {
        slug: "custom",
        name: { en: "Custom", fr: "Sur Mesure", tn: "مخصص" },
        description: {
          en: "For SaaS platforms, AI systems, enterprise solutions and large-scale custom projects. Fully tailored.",
          fr: "Pour les plateformes SaaS, systèmes IA, solutions entreprise et grands projets personnalisés. Entièrement sur mesure.",
          tn: "لمنصات SaaS، أنظمة AI، حلول المؤسسات والمشاريع الكبيرة المخصصة. مكيّف بالكامل.",
        },
        features: {
          en: ["Full product discovery & strategy", "SaaS & multi-tenant architecture", "AI & automation integrations", "Complex business systems", "Scalable cloud infrastructure", "Long-term partnership & SLAs"],
          fr: ["Découverte produit & stratégie complète", "Architecture SaaS & multi-tenant", "Intégrations IA & automatisation", "Systèmes métier complexes", "Infrastructure cloud évolutive", "Partenariat long terme & SLAs"],
          tn: ["اكتشاف المنتج والاستراتيجية الكاملة", "بنية SaaS متعددة المستأجرين", "تكاملات AI وأتمتة", "أنظمة أعمال معقدة", "بنية سحابية قابلة للتوسع", "شراكة طويلة المدى"],
        },
        cta: { en: "Request a quotation", fr: "Demander un devis", tn: "اطلب عرض سعر" },
      },
    ],
    suffix: { en: "starting", fr: "à partir de", tn: "ابتداءً من" },
    talkLabel: { en: "Let's talk", fr: "Discutons", tn: "نتفاهموا" },
  },

  // ── CTA ─────────────────────────────────────────────────
  cta: {
    social1: { en: "{clients}+ businesses served", fr: "{clients}+ entreprises accompagnées", tn: "+{clients} شركة خدمناها" },
    social2: { en: "Response within 2 hours", fr: "Réponse en 2 heures", tn: "رد في 2 ساعة" },
    social3: { en: "Free consultation call", fr: "Appel de consultation gratuit", tn: "استشارة مجانية" },
    title: {
      en: "Ready to build something",
      fr: "Prêt à construire quelque chose",
      tn: "جاهز تبني شي",
    },
    titleHighlight: { en: "remarkable", fr: "de remarquable", tn: "رائع" },
    titleEnd: { en: "for your business?", fr: "pour votre entreprise?", tn: "لمشروعك؟" },
    subtitle: {
      en: "Tell us about your project and we'll get back to you within 24 hours with a clear plan and an honest quote. No commitment required.",
      fr: "Parlez-nous de votre projet et nous vous répondrons sous 24 heures avec un plan clair et un devis honnête. Sans engagement.",
      tn: "حكينا على مشروعك ونرجعولك في 24 ساعة بخطة واضحة وسعر صريح. بدون التزام.",
    },
    ctaStart: { en: "Start your project", fr: "Démarrer votre projet", tn: "ابدأ مشروعك" },
    ctaWhatsapp: { en: "Free consultation on WhatsApp", fr: "Consultation gratuite WhatsApp", tn: "استشارة مجانية واتساب" },
    note: {
      en: "Available in Arabic, French and English · Based in Tunis, serving clients worldwide",
      fr: "Disponible en arabe, français et anglais · Basé à Tunis, clients dans le monde entier",
      tn: "متاح بالعربي، الفرنسي والإنجليزي · في تونس، نخدموا عملاء في كل العالم",
    },
  },

  // ── FOOTER ──────────────────────────────────────────────
  footer: {
    tagline: {
      en: "Premium digital studio for businesses that want to grow faster.",
      fr: "Studio digital premium pour les entreprises qui veulent croître plus vite.",
      tn: "ستوديو رقمي متميّز للشركات لي تحب تكبر أسرع.",
    },
    sections: {
      studio: { en: "Studio", fr: "Studio", tn: "الستوديو" },
      resources: { en: "Resources", fr: "Ressources", tn: "الموارد" },
      legal: { en: "Legal", fr: "Légal", tn: "قانوني" },
    },
    links: {
      services: { en: "Services", fr: "Services", tn: "الخدمات" },
      portfolio: { en: "Portfolio", fr: "Portfolio", tn: "المشاريع" },
      pricing: { en: "Pricing", fr: "Tarifs", tn: "الأسعار" },
      about: { en: "About", fr: "À propos", tn: "من إحنا" },
      insights: { en: "Insights", fr: "Blog", tn: "مقالات" },
      contact: { en: "Contact", fr: "Contact", tn: "اتصل بينا" },
      bookCall: { en: "Book a call", fr: "Réserver un appel", tn: "احجز مكالمة" },
      privacy: { en: "Privacy", fr: "Confidentialité", tn: "الخصوصية" },
      terms: { en: "Terms", fr: "Conditions", tn: "الشروط" },
    },
    rights: { en: "All rights reserved.", fr: "Tous droits réservés.", tn: "جميع الحقوق محفوظة." },
    craftedBy: { en: "Crafted with care by", fr: "Conçu avec soin par", tn: "صُنع بعناية من طرف" },
  },

  // ── PAGE HEADERS ────────────────────────────────────────
  pages: {
    services: {
      eyebrow: { en: "Our services", fr: "Nos services", tn: "خدماتنا" },
      title: { en: "Everything your business needs to succeed online", fr: "Tout ce dont votre entreprise a besoin pour réussir en ligne", tn: "كل شي يحتاجه مشروعك ينجح أونلاين" },
      description: { en: "One trusted team covering design, frontend, backend, automation and AI — so you can move fast without juggling multiple vendors.", fr: "Une équipe de confiance couvrant design, frontend, backend, automatisation et IA — pour avancer vite sans gérer plusieurs prestataires.", tn: "فريق واحد موثوق يغطي التصميم، الفرونتند، الباكند، الأتمتة والـAI — تتحرك بسرعة بدون إدارة عدة موردين." },
    },
    portfolio: {
      eyebrow: { en: "Our portfolio", fr: "Notre portfolio", tn: "مشاريعنا" },
      title: { en: "Work we're proud to show", fr: "Des réalisations dont nous sommes fiers", tn: "أعمال نفخر بها" },
      description: { en: "Platforms, websites and systems built for businesses across Tunisia and beyond.", fr: "Plateformes, sites web et systèmes construits pour des entreprises en Tunisie et à l'international.", tn: "منصات ومواقع وأنظمة مبنية لشركات في تونس وخارجها." },
    },
    about: {
      eyebrow: { en: "About Firlou", fr: "À propos de Firlou", tn: "على Firlou" },
      title: { en: "Two developers. One mission: help businesses grow online.", fr: "Deux développeurs. Une mission : aider les entreprises à croître en ligne.", tn: "زوز مطوّرين. مهمة واحدة: نعاونوا الأعمال تكبر أونلاين." },
      description: { en: "We're a premium digital studio from Tunis, building modern websites, business systems and digital products for companies that want to stand out.", fr: "Nous sommes un studio digital premium de Tunis, construisant des sites web modernes et des produits digitaux pour les entreprises qui veulent se démarquer.", tn: "إحنا ستوديو رقمي متميّز من تونس، نبنيوا مواقع عصرية وأنظمة أعمال ومنتجات رقمية للشركات لي تحب تتميّز." },
    },
    contact: {
      eyebrow: { en: "Contact us", fr: "Contactez-nous", tn: "تواصل معنا" },
      title: { en: "Let's build something great for your business", fr: "Construisons quelque chose de formidable pour votre entreprise", tn: "نبنيوا شي رائع لمشروعك" },
      description: { en: "Tell us about your project — we'll get back to you within 24 hours with a clear plan and an honest quote.", fr: "Parlez-nous de votre projet — nous vous répondrons sous 24 heures avec un plan clair et un devis honnête.", tn: "حكينا على مشروعك — نرجعولك في 24 ساعة بخطة واضحة وسعر صريح." },
    },
    pricing: {
      eyebrow: { en: "Pricing", fr: "Tarifs", tn: "الأسعار" },
      title: { en: "Transparent, flexible pricing", fr: "Tarifs transparents et flexibles", tn: "أسعار شفافة ومرنة" },
      description: { en: "Clear starting points — and full flexibility for projects above or below them.", fr: "Des points de départ clairs — et toute la flexibilité pour les projets en dehors de ces fourchettes.", tn: "نقاط انطلاق واضحة — ومرونة كاملة للمشاريع الأكبر أو الأصغر." },
    },
    blog: {
      eyebrow: { en: "Insights", fr: "Blog", tn: "مقالات" },
      title: { en: "Ideas, guides and business stories", fr: "Idées, guides et histoires d'entreprises", tn: "أفكار، أدلة وقصص أعمال" },
      description: { en: "Practical articles on digital transformation, web development and business growth.", fr: "Articles pratiques sur la transformation digitale, le développement web et la croissance des entreprises.", tn: "مقالات عملية على التحول الرقمي، تطوير الويب ونمو الأعمال." },
    },
  },
} as const;

export type TranslationKey = keyof typeof translations;

// ─────────────────────────────────────────────────────────
// Helper: get a string from a translation node
// ─────────────────────────────────────────────────────────
export function t(node: { en: string; fr: string; tn: string }, locale: Locale): string {
  return node[locale] ?? node.en;
}

// Like `t`, but replaces `{token}` placeholders with dynamic values.
// Used to inject live numbers (from src/config/metrics.ts) into
// translated copy without duplicating those numbers per language.
export function ti(
  node: { en: string; fr: string; tn: string },
  locale: Locale,
  vars: Record<string, string | number>,
): string {
  let out = t(node, locale);
  for (const [key, value] of Object.entries(vars)) {
    out = out.split(`{${key}}`).join(String(value));
  }
  return out;
}
