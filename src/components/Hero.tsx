
import { ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroimg from "../assast/hero.jpeg";
export const Hero = () => {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`animate-fade-in ${isRtl ? 'order-2' : 'order-1'}`}>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">{t("hero.trusted")}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t("hero.build")}
              <span className="text-blue-600 block">{t("hero.website")}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t("hero.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact"> <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group">
                {t("hero.startProject")}
                <ArrowRight className={`${isRtl ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} h-5 w-5 transition-transform`} />
              </button></a>
             <a href="#portfolio"> <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
                {t("hero.viewWork")}
              </button></a>
             
            </div>
          </div>
          
          <div className={`relative animate-scale-in ${isRtl ? 'order-1' : 'order-2'}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
              <img
                src={heroimg}
                alt="Modern website design"
                className="w-full h-62 object-cover rounded-lg"
              />
            </div>
            <div className={`absolute -bottom-4 ${isRtl ? '-right-4' : '-left-4'} bg-blue-600 text-white p-4 rounded-lg shadow-lg transform -rotate-2`}>
              <p className="font-semibold">{t("hero.customDesign")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
