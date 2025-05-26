
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const isRtl = language === "ar";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">WebX Tecnology</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/webx2tec/" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/webx.tecnology/" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.webDesign")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.ecommerce")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.redesign")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.seo")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.maintenance")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                <span>01040305878</span>
              </div>
              <div className="flex items-center">
                <Mail className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                <span>WebX-Tecnology.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                <span>{isRtl ? 'الاسكندريه ، مصر' : 'Alexandria, Egypt'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} WebXTecnology. {t("footer.rights")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.terms")}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.cookie")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
