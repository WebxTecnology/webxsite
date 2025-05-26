
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import protimg from "../assast/profile.jpg";

export const Testimonials = () => {
  const { t, language } = useLanguage();
  
  // These testimonials will need to be added to the translation object
  // For now, we'll create a function to display different testimonials based on the language
  const getLocalizedTestimonials = () => {
    if (language === 'ar') {
      return [
        {
          id: 1,
          name: "سارة محمود",
          company: "شركة تيك ستارت",
          role: "الرئيس التنفيذي",
          content: "قامت شركة WebX Tecnology بتحويل رؤيتنا إلى موقع ويب مذهل تجاوز كل التوقعات. اهتمام الفريق بالتفاصيل وخبرتهم التقنية لا مثيل لها.",
          rating: 5,
          avatar: protimg
        },
        {
          id: 2,
          name: "محمد علي",
          company: "فريش ماركت",
          role: "المؤسس",
          content: "ارتفعت مبيعات متجرنا الإلكتروني بنسبة 150% خلال الشهر الأول من إطلاق موقعنا الجديد. تجربة المستخدم رائعة ومعدلات التحويل مرتفعة للغاية.",
          rating: 5,
          avatar: protimg
        },
        {
          id: 3,
          name: "ليلى أحمد",
          company: "ستوديو إبداعي",
          role: "مدير فني",
          content: "العمل مع WebX Tecnology كان نقلة نوعية لموقع محفظتنا. لقد فهموا رؤيتنا الإبداعية وجسدوها بشكل جميل.",
          rating: 5,
          avatar: protimg
        },
        {
          id: 4,
          name: "خالد سعيد",
          company: "شركاء قانونيون",
          role: "شريك إداري",
          content: "محترفون وموثوقون ويركزون على النتائج. لقد حسّن موقعنا الجديد بشكل كبير من اكتساب العملاء وصورتنا المهنية.",
          rating: 5,
          avatar: protimg
        },
        {
          id: 5,
          name: "نورا حسن",
          company: "مركز العافية",
          role: "المالك",
          content: "كان دمج نظام الحجز سلسًا ويحب عملاؤنا مدى سهولة جدولة المواعيد. أوصي بشدة بـ WebX Tecnology!",
          rating: 5,
          avatar: protimg
        },
        {
          id: 6,
          name: "كريم فاروق",
          company: "حلول التجارة العالمية",
          role: "المدير",
          content: "من المفهوم إلى النشر، كانت العملية بأكملها سلسة واحترافية. يمثل موقعنا الآن علامتنا التجارية وقيمنا بشكل مثالي.",
          rating: 5,
          avatar: protimg
        }
      ];
    } else {
      return [
        {
          id: 1,
          name: "Leila Ahmed",
          company: "TechStart Inc.",
          role: "CEO",
          content: "WebX Tecnology transformed our vision into a stunning website that exceeded all expectations. The team's attention to detail and technical expertise is unmatched.",
          rating: 5,
          avatar: protimg
        },
        {
          id: 2,
          name: "Mohamed Ali",
          company: "Fresh Market Co.",
          role: "Founder",
          content: "Our e-commerce sales increased by 150% within the first month of launching our new website. The user experience is incredible and conversion rates are through the roof.",
          rating: 5,
          avatar: protimg
        },
        {
          id: 3,
          name: "Sarah Mahmoud",
          company: "Creative Studio",
          role: "Art Director",
          content: "Working with WebX Tecnology was a game-changer for our portfolio website. They understood our creative vision and brought it to life beautifully.",
          rating: 5,
          avatar: protimg
        },
        {
          id: 4,
          name: "Kareem Farouk",
          company: "Legal Partners LLP",
          role: "Managing Partner",
          content: "Professional, reliable, and results-driven. Our new website has significantly improved our client acquisition and professional image.",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
          id: 5,
          name: "Nora Hassan",
          company: "Wellness Center",
          role: "Owner",
          content: "The booking system integration was seamless and our clients love how easy it is to schedule appointments. Highly recommend WebX Tecnology!",
          rating: 5,
          avatar: protimg
        },
        {
          id: 6,
          name: "Khaled Said",
          company: "Global Trade Solutions",
          role: "Director",
          content: "From concept to deployment, the entire process was smooth and professional. Our website now perfectly represents our brand and values.",
          rating: 5,
          avatar: protimg
        }
      ];
    }
  };

  const testimonials = getLocalizedTestimonials();

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mb-2" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white px-8 py-6 rounded-xl inline-block">
            <div className="flex items-center space-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">4.9/5</p>
                <p className="text-blue-100">{t("testimonials.rating")}</p>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">200+</p>
                <p className="text-blue-100">{t("testimonials.clients")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
