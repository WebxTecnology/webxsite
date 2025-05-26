
import { ExternalLink, Code, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ecoimg from "../assast/econ.png";
import sportimg from "../assast/sport.jpg";
import cochimg from "../assast/coch.jpg";
import personimg from "../assast/preson.jpg";
import fiximg from "../assast/fix.png";
import saasimg from "../assast/saas.png";



export const Portfolio = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      titleKey: "portfolio.ecommerce",
      descriptionKey: "portfolio.ecommerceDesc",
      image: ecoimg,
      tags: ["portfolio.tag.ecommerce", "portfolio.tag.react", "portfolio.tag.mobile"],
      categoryKey: "portfolio.category.ecommerce"
    },
    {
      id: 2,
      titleKey: "portfolio.corporate",
      descriptionKey: "portfolio.corporateDesc",
      image: sportimg,
      tags: ["portfolio.tag.corporate", "portfolio.tag.cms", "portfolio.tag.seo"],
      categoryKey: "portfolio.category.corporate"
    },
    {
      id: 3,
      titleKey: "portfolio.restaurant",
      descriptionKey: "portfolio.restaurantDesc",
      image:  cochimg,
      tags: ["portfolio.tag.restaurant", "portfolio.tag.ordering", "portfolio.tag.responsive"],
      categoryKey: "portfolio.category.restaurant"
    },
    {
      id: 4,
      titleKey: "portfolio.saas",
      descriptionKey: "portfolio.saasDesc",
      image: personimg,
      tags: ["portfolio.tag.saas", "portfolio.tag.landing", "portfolio.tag.analytics"],
      categoryKey: "portfolio.category.saas"
    },
    {
      id: 5,
      titleKey: "portfolio.healthcare",
      descriptionKey: "portfolio.healthcareDesc",
      image: fiximg,
      tags: ["portfolio.tag.healthcare", "portfolio.tag.hipaa", "portfolio.tag.booking"],
      categoryKey: "portfolio.category.healthcare"
    },
    {
      id: 6,
      titleKey: "portfolio.realestate",
      descriptionKey: "portfolio.realestateDesc",
      image: saasimg,
      tags: ["portfolio.tag.realestate", "portfolio.tag.virtual", "portfolio.tag.search"],
      categoryKey: "portfolio.category.realestate"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("portfolio.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("portfolio.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    <span>{t("portfolio.viewProject")}</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">{t(project.categoryKey)}</span>
                  <div className="flex space-x-1">
                    <Code className="h-4 w-4 text-gray-400" />
                    <Smartphone className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(project.titleKey)}</h3>
                <p className="text-gray-600 mb-4">{t(project.descriptionKey)}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {t(tag)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            {t("portfolio.viewAll")}
          </button>
        </div>
      </div>
    </section>
  );
};
