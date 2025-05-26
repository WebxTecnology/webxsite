
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as Language) || "en";
  });

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  // Function to get translation for a key
  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",
    "nav.offers": "Offers",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getQuote": "Get a Quote",
    
    // Hero
    "hero.trusted": "Trusted by 200+ businesses",
    "hero.build": "Build Your Dream",
    "hero.website": "Website Today",
    "hero.description": "We create stunning, high-converting websites and e-commerce stores that help your business grow. From concept to launch, we deliver exceptional digital experiences.",
    "hero.startProject": "Start Your Project",
    "hero.viewWork": "View Our Work",
    "hero.customDesign": "100% Custom Design",
    
    // Portfolio
    "portfolio.title": "Our Latest Work",
    "portfolio.description": "Discover our portfolio of successful projects that have helped businesses achieve their digital goals.",
    "portfolio.viewProject": "View Project",
    "portfolio.viewAll": "View All Projects",
    "portfolio.ecommerce": "E-commerce Fashion Store",
    "portfolio.ecommerceDesc": "A modern e-commerce platform with advanced filtering and seamless checkout experience.",
    "portfolio.corporate": "Sport training Website",
    "portfolio.corporateDesc": "Professional Sport training Website with content management and lead generation features.",
    "portfolio.restaurant": "Coach Website",
    "portfolio.restaurantDesc": "Interactive coach website with chat and offers   and reservation system.",
    "portfolio.saas": "Protfolio",
    "portfolio.saasDesc": "A sleek portfolio website showcasing personal projects, skills, and achievements with an interactive and responsive design.",
    "portfolio.healthcare": "Healthcare Platform",
    "portfolio.healthcareDesc": "A professional home maintenance services platform based in Saudi Arabia, offering fast and reliable electrical, plumbing, and carpentry services. Designed with a modern user interface and seamless booking system for a superior customer experience.",
    "portfolio.realestate": " SaaS Projects",
    "portfolio.realestateDesc": "A powerful SaaS platform for lightning-fast cloud deployments. Offers developers real-time monitoring, smart analytics, and 99.9% uptime through a clean, modern UI.",
    "portfolio.category.ecommerce": "E-commerce",
    "portfolio.category.corporate": "Corporate",
    "portfolio.category.restaurant": "training",
    "portfolio.category.saas": "Protfolio",
    "portfolio.category.healthcare": "Healthcare",
    "portfolio.category.realestate": "Web App ",
    "portfolio.tag.ecommerce": "E-commerce",
    "portfolio.tag.react": "React",
    "portfolio.tag.mobile": "Mobile-First",
    "portfolio.tag.corporate": "Sport Training",
    "portfolio.tag.cms": "CMS",
    "portfolio.tag.seo": "SEO",
    "portfolio.tag.restaurant": "Coaching ",
    "portfolio.tag.ordering": "Chat System",
    "portfolio.tag.responsive": "Responsive",
    "portfolio.tag.saas": "Protfolio",
    "portfolio.tag.landing": "Landing Page",
    "portfolio.tag.analytics": "Mobile-First",
    "portfolio.tag.healthcare": "Healthcare",
    "portfolio.tag.hipaa": "HIPAA",
    "portfolio.tag.booking": "Booking",
    "portfolio.tag.realestate": "SaaS platform",
    "portfolio.tag.virtual": "Virtual Tours",
    "portfolio.tag.search": "Search",
    
    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.description": "Don't just take our word for it. Here's what our satisfied clients have to say about working with us.",
    "testimonials.rating": "Average Rating",
    "testimonials.clients": "Happy Clients",
    "testimonials.projects": "Projects Completed",
    "testimonials.experience": "Years Experience",
    "testimonials.success": "Success Rate",
    
    // About
    "about.title": "About WebX Tecnology",
    "about.description": "We're a passionate team of designers and developers dedicated to creating exceptional digital experiences that drive business growth.",
    "about.mission": "Our Mission",
    "about.missionText1": "At WebX Tecnology, we believe that every business deserves a website that not only looks amazing but also performs exceptionally. Our mission is to bridge the gap between stunning design and powerful functionality.",
    "about.missionText2": "We combine creativity with technical expertise to deliver websites that engage users, convert visitors into customers, and help businesses achieve their digital goals.",
    "about.customer": "Customer-centric approach",
    "about.quality": "Quality-driven development",
    "about.onTime": "On-time delivery guarantee",
    "about.years": "Years of Excellence",
    "about.teamTitle": "Meet Our Team",
    "about.team.alex": "Yehia Maged",
    "about.team.alexRole": "Founder & Lead Designer",
    "about.team.alexDesc": "10+ years of experience in web design and digital strategy.",
    "about.team.sarah": "Ahmed Yasser",
    "about.team.sarahRole": "Frontend Developer",
    "about.team.sarahDesc": "Specialist in React, Vue.js, and modern web technologies.",
    "about.team.mike": "Rawan Mohammed ",
    "about.team.mikeRole": "Backend Developer",
    "about.team.mikeDesc": "Expert in Node.js, Python, and cloud infrastructure.",
    "about.team.yomna": "Mayan Muhammed",
    "about.team.yomnaRole": "UI/UX Designer",
    "about.team.yomnaDesc": "Passionate about creating intuitive and user-friendly interfaces.",

    
    // Offers
    "offers.limitedOffer": "🎉 LIMITED TIME OFFER - 30% OFF",
    "offers.title": "Choose Your Perfect Package",
    "offers.description": "Get your dream website at an unbeatable price. This exclusive offer ends soon!",
    "offers.mostPopular": "MOST POPULAR",
    "offers.save": "Save 30%",
    "offers.getStarted": "Get Started Now",
    "offers.offerExpires": "🕒 Offer expires in:",
    "offers.days": "Days",
    "offers.hours": "Hours",
    "offers.minutes": "Minutes",
    
    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "Ready to start your project? Contact us today for a free consultation and quote.",
    "contact.discuss": "Let's Discuss Your Project",
    "contact.formDescription": "Fill out the form below and we'll get back to you within 24 hours. We're excited to learn about your project and help bring your vision to life.",
    "contact.fullName": "Full Name *",
    "contact.email": "Email Address *",
    "contact.phone": "Phone Number",
    "contact.projectType": "Project Type *",
    "contact.selectType": "Select project type",
    "contact.budget": "Budget Range",
    "contact.selectBudget": "Select budget range",
    "contact.details": "Project Details *",
    "contact.detailsPlaceholder": "Tell us about your project, goals, and any specific requirements...",
    "contact.send": "Send Message",
    "contact.info": "Contact Information",
    "contact.phoneInfo": "Phone",
    "contact.emailInfo": "Email",
    "contact.office": "Office",
    "contact.follow": "Follow Us",
    "contact.hours": "Business Hours",
    "contact.monday": "Saturday - Monday: 9:00 AM - 6:00 PM",
    "contact.saturday": "Monday - Thursday: 9:00 AM - 4:00 PM",
    "contact.sunday": "Friday: Closed",
    
    // Footer
    "footer.description": "We create stunning, high-converting websites and e-commerce stores that help your business grow. From concept to launch, we deliver exceptional digital experiences.",
    "footer.services": "Services",
    "footer.webDesign": "Website Design",
    "footer.ecommerce": "E-commerce Development",
    "footer.redesign": "Website Redesign",
    "footer.seo": "SEO Optimization",
    "footer.maintenance": "Maintenance & Support",
    "footer.contactInfo": "Contact Info",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookie": "Cookie Policy",

    // Project types
    "project.business": "Business Website",
    "project.ecommerce": "E-commerce Store",
    "project.redesign": "Website Redesign",
    "project.maintenance": "Website Maintenance",
    "project.other": "Other",
    
    // Budget ranges
    "budget.under1k": "Under $1,000",
    "budget.1k3k": "$1,000 - $3,000",
    "budget.3k5k": "$3,000 - $5,000",
    "budget.5k10k": "$5,000 - $10,000",
    "budget.over10k": "Over $10,000",

    // Language toggle
    "language": "العربية"
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.portfolio": "معرض الأعمال",
    "nav.testimonials": "آراء العملاء",
    "nav.offers": "العروض",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.getQuote": "احصل على عرض سعر",
    
    // Hero
    "hero.trusted": "موثوق به من قبل أكثر من 200 شركة",
    "hero.build": "ابنِ موقعك",
    "hero.website": "الإلكتروني اليوم",
    "hero.description": "نقوم بإنشاء مواقع ويب ومتاجر إلكترونية مذهلة وعالية التحويل تساعد عملك على النمو. من الفكرة إلى الإطلاق، نقدم تجارب رقمية استثنائية.",
    "hero.startProject": "ابدأ مشروعك",
    "hero.viewWork": "شاهد أعمالنا",
    "hero.customDesign": "تصميم مخصص 100%",
    
    // Portfolio
    "portfolio.title": "أحدث أعمالنا",
    "portfolio.description": "اكتشف معرض أعمالنا من المشاريع الناجحة التي ساعدت الشركات على تحقيق أهدافها الرقمية.",
    "portfolio.viewProject": "عرض المشروع",
    "portfolio.viewAll": "عرض جميع المشاريع",
    "portfolio.ecommerce": "متجر أزياء إلكتروني",
    "portfolio.ecommerceDesc": "منصة تجارة إلكترونية حديثة مع تصفية متقدمة وتجربة دفع سلسة.",
    "portfolio.corporate": "موقع رياضي صغير ",
    "portfolio.corporateDesc": "موقع رياضي احترافي مع إدارة المحتوى وميزات توليد العملاء المحتملين.",
    "portfolio.restaurant": " موقع متدرب الشخصي ",
    "portfolio.restaurantDesc": "موقع مدرب شخصي  تفاعلي مع محادثه و عروض وحجز عبر الإنترنت.",
    "portfolio.saas": "صفحه شخصية",
    "portfolio.saasDesc": "موقع شخصي أنيق يعرض المشاريع والمهارات والإنجازات بتصميم تفاعلي ومتجاوب.",
    "portfolio.healthcare": " منصه لخدمات الصيانة",
    "portfolio.healthcareDesc": "منصة احترافية لخدمات الصيانة المنزلية في المملكة العربية السعودية، تقدم خدمات كهرباء وسباكة ونجارة بسرعة واحترافية. يتميز الموقع بتصميم عصري ونظام حجز سلس لتجربة مستخدم ممتازة.",
    "portfolio.realestate": "منصة SaaS ",
    "portfolio.realestateDesc": "منصة SaaS قوية لنشر التطبيقات على السحابة بسرعة فائقة، توفر للمطورين مراقبة فورية، تحليلات ذكية، وواجهة استخدام عصرية مع استقرار بنسبة 99.9%.",
    "portfolio.category.ecommerce": "تجارة إلكترونية",
    "portfolio.category.corporate": "شركات",
    "portfolio.category.restaurant": "تدريب",
    "portfolio.category.saas": "برمجيات كخدمة",
    "portfolio.category.healthcare": "رعاية صحية",
    "portfolio.category.realestate": "مشاريع SaaS",
    "portfolio.tag.ecommerce": "تجارة إلكترونية",
    "portfolio.tag.react": "رياكت",
    "portfolio.tag.mobile": "الأولوية للجوال",
    "portfolio.tag.corporate": "موقع رياضي",
    "portfolio.tag.cms": "نظام إدارة المحتوى",
    "portfolio.tag.seo": "تحسين محركات البحث",
    "portfolio.tag.restaurant": "تدريب",
    "portfolio.tag.ordering": "نظام تحدث",
    "portfolio.tag.responsive": "متجاوب",
    "portfolio.tag.saas": "صفحه شخصية",
    "portfolio.tag.landing": "صفحة هبوط",
    "portfolio.tag.analytics": "متجاوب مع الهاتف",
    "portfolio.tag.healthcare": "خدمة صيانة ",
    "portfolio.tag.hipaa": "خدمات ",
    "portfolio.tag.booking": "حجوزات",
    "portfolio.tag.realestate": "منصة",
    "portfolio.tag.virtual": "جولات افتراضية",
    "portfolio.tag.search": "بحث",
    
    // Testimonials
    "testimonials.title": "ماذا يقول عملاؤنا",
    "testimonials.description": "لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا الراضون عن العمل معنا.",
    "testimonials.rating": "متوسط التقييم",
    "testimonials.clients": "عميل سعيد",
    "testimonials.projects": "مشروع مكتمل",
    "testimonials.experience": "سنوات خبرة",
    "testimonials.success": "معدل النجاح",
    
    // About
    "about.title": "عن WebX Tecnology",
    "about.description": "نحن فريق متحمس من المصممين والمطورين المتخصصين في إنشاء تجارب رقمية استثنائية تدفع نمو الأعمال.",
    "about.mission": "مهمتنا",
    "about.missionText1": "في WebX Tecnology نؤمن بأن كل عمل يستحق موقع ويب لا يبدو مذهلاً فحسب، بل يعمل بشكل استثنائي أيضًا. مهمتنا هي سد الفجوة بين التصميم المذهل والوظائف القوية.",
    "about.missionText2": "نجمع بين الإبداع والخبرة التقنية لتقديم مواقع ويب تجذب المستخدمين وتحول الزوار إلى عملاء وتساعد الشركات على تحقيق أهدافها الرقمية.",
    "about.customer": "نهج يركز على العميل",
    "about.quality": "تطوير يركز على الجودة",
    "about.onTime": "ضمان التسليم في الوقت المحدد",
    "about.years": "سنوات من التميز",
    "about.teamTitle": "تعرف على فريقنا",
    "about.team.alex": "يحيي ماجد ",
    "about.team.alexRole": "المؤسس ومصمم رئيسي",
    "about.team.alexDesc": "أكثر من 10 سنوات من الخبرة في تصميم الويب والاستراتيجية الرقمية.",
    "about.team.sarah": "احمد ياسر",
    "about.team.sarahRole": "مطورة واجهة أمامية",
    "about.team.sarahDesc": "متخصصة في رياكت، Vue.js، وتقنيات الويب الحديثة.",
    "about.team.mike": "روان  محمد",
    "about.team.mikeRole": "مطور خلفية",
    "about.team.mikeDesc": "خبير في Node.js، بايثون، والبنية التحتية السحابية.",
    "about.team.yomna": " مايان محمد",
    "about.team.yomnaRole": "مصمم UI/UX",
    "about.team.yomnaDesc": "متخصصة في انشاء واجهات المستخدم مريحة وسهلة الاستخدام.",
    
    // Offers
    "offers.limitedOffer": "🎉 عرض لفترة محدودة - خصم 30%",
    "offers.title": "اختر باقتك المثالية",
    "offers.description": "احصل على موقع الويب الذي تحلم به بسعر لا يقاوم. هذا العرض الحصري ينتهي قريبًا!",
    "offers.mostPopular": "الأكثر شعبية",
    "offers.save": "وفر 30%",
    "offers.getStarted": "ابدأ الآن",
    "offers.offerExpires": "🕒 ينتهي العرض خلال:",
    "offers.days": "أيام",
    "offers.hours": "ساعات",
    "offers.minutes": "دقائق",
    
    // Contact
    "contact.title": "تواصل معنا",
    "contact.description": "هل أنت مستعد لبدء مشروعك؟ اتصل بنا اليوم للحصول على استشارة وعرض سعر مجاني.",
    "contact.discuss": "دعنا نناقش مشروعك",
    "contact.formDescription": "املأ النموذج أدناه وسنرد عليك في غضون 24 ساعة. نحن متحمسون للتعرف على مشروعك ومساعدتك في تحقيق رؤيتك.",
    "contact.fullName": "الاسم الكامل *",
    "contact.email": "البريد الإلكتروني *",
    "contact.phone": "رقم الهاتف",
    "contact.projectType": "نوع المشروع *",
    "contact.selectType": "اختر نوع المشروع",
    "contact.budget": "نطاق الميزانية",
    "contact.selectBudget": "اختر نطاق الميزانية",
    "contact.details": "تفاصيل المشروع *",
    "contact.detailsPlaceholder": "أخبرنا عن مشروعك وأهدافك وأي متطلبات محددة...",
    "contact.send": "إرسال الرسالة",
    "contact.info": "معلومات الاتصال",
    "contact.phoneInfo": "الهاتف",
    "contact.emailInfo": "البريد الإلكتروني",
    "contact.office": "المكتب",
    "contact.follow": "تابعنا",
    "contact.hours": "ساعات العمل",
    "contact.monday": "السبت - التلاتاء: 9:00 صباحًا - 6:00 مساءً",
    "contact.saturday": "التلاتاء - الخميس: 9:00 صباحًا - 4:00 مساءً",
    "contact.sunday": "جمعه: مغلق",
    
    // Footer
    "footer.description": "نقوم بإنشاء مواقع ويب ومتاجر إلكترونية مذهلة وعالية التحويل تساعد عملك على النمو. من الفكرة إلى الإطلاق، نقدم تجارب رقمية استثنائية.",
    "footer.services": "الخدمات",
    "footer.webDesign": "تصميم مواقع الويب",
    "footer.ecommerce": "تطوير المتاجر الإلكترونية",
    "footer.redesign": "إعادة تصميم المواقع",
    "footer.seo": "تحسين محركات البحث",
    "footer.maintenance": "الصيانة والدعم",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.cookie": "سياسة ملفات تعريف الارتباط",

    // Project types
    "project.business": "موقع للأعمال",
    "project.ecommerce": "متجر إلكتروني",
    "project.redesign": "إعادة تصميم الموقع",
    "project.maintenance": "صيانة الموقع",
    "project.other": "أخرى",
    
    // Budget ranges
    "budget.under1k": "أقل من 1,000 مصري",
    "budget.1k3k": "1,000 - 3,000 مصري",
    "budget.3k5k": "3,000 - 5,000 مصري",
    "budget.5k10k": "5,000 - 10,000 مصري",
    "budget.over10k": "أكثر من 10,000 مصري",

    // Language toggle
    "language": "English"
  }
};
