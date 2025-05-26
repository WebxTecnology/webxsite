
import { Check, Zap, Rocket, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Offers = () => {
  const { t } = useLanguage();
  
  const packages = [
    {
      id: 1,
      name: "Starter Package",
      icon: <Zap className="h-8 w-8" />,
      price: "E£999",
      originalPrice: "E£1,299",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO optimization",
        "Contact form integration",
        "2 rounds of revisions",
        "30-day support"
      ],
      popular: false,
      color: "blue"
    },
    {
      id: 2,
      name: "Professional Package",
      icon: <Rocket className="h-8 w-8" />,
      price: "E£1,999",
      originalPrice: "E£2,599",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "CMS integration",
        "Analytics setup",
        "Social media integration",
        "5 rounds of revisions",
        "60-day support"
      ],
      popular: true,
      color: "blue"
    },
    {
      id: 3,
      name: "Enterprise Package",
      icon: <Crown className="h-8 w-8" />,
      price: "E£3,999",
      originalPrice: "E£5,199",
      description: "For large businesses and e-commerce",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Custom web applications",
        "Advanced integrations",
        "Performance optimization",
        "Security features",
        "Unlimited revisions",
        "6-month support"
      ],
      popular: false,
      color: "blue"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("offers.limitedOffer")}
          </div>
          <h2 className="text-4xl font-bold mb-4">{t("offers.title")}</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t("offers.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-b-lg font-bold text-sm">
                  {t("offers.mostPopular")}
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className={`bg-blue-100 text-blue-600 p-3 rounded-full`}>
                    {pkg.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-center mb-6">{pkg.description}</p>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                    <div className="text-left">
                      <span className="text-sm text-gray-500 line-through block">{pkg.originalPrice}</span>
                      <span className="text-sm text-green-600 font-medium">{t("offers.save")}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {t("offers.getStarted")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
            <p className="text-lg mb-2">{t("offers.offerExpires")}</p>
            <div className="flex items-center space-x-4 text-2xl font-bold">
              <div className="text-center">
                <div>07</div>
                <div className="text-sm text-blue-200">{t("offers.days")}</div>
              </div>
              <div>:</div>
              <div className="text-center">
                <div>15</div>
                <div className="text-sm text-blue-200">{t("offers.hours")}</div>
              </div>
              <div>:</div>
              <div className="text-center">
                <div>32</div>
                <div className="text-sm text-blue-200">{t("offers.minutes")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
