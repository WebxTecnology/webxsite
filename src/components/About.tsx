
import { Users, Award, Clock, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import rwnimg from "../assast/rwan.jpeg";
import profimg from "../assast/profile.jpg";


export const About = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "200+",
      label: t("testimonials.clients")
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "500+",
      label: t("testimonials.projects")
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "5+",
      label: t("testimonials.experience")
    },
    {
      icon: <Target className="h-8 w-8" />,
      number: "98%",
      label: t("testimonials.success")
    }
  ];

  const team = [
    {
      nameKey: "about.team.alex",
      roleKey: "about.team.alexRole",
      image: profimg ,
      descriptionKey: "about.team.alexDesc"
    },
    {
      nameKey: "about.team.sarah",
      roleKey: "about.team.sarahRole",
      image: profimg,
      descriptionKey: "about.team.sarahDesc"
    },
    {
      nameKey: "about.team.yomna",
      roleKey: "about.team.yomnaRole",
      image: profimg,
      descriptionKey: "about.team.yomnaDesc"
    },
    {
      nameKey: "about.team.mike",
      roleKey: "about.team.mikeRole",
      image: rwnimg,
      descriptionKey: "about.team.mikeDesc"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t("about.mission")}</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t("about.missionText1")}
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t("about.missionText2")}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-700">{t("about.customer")}</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-700">{t("about.quality")}</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-700">{t("about.onTime")}</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">5+</p>
              <p className="text-blue-100">{t("about.years")}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{t("about.teamTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={t(member.nameKey)}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{t(member.nameKey)}</h4>
                <p className="text-blue-600 font-medium mb-3">{t(member.roleKey)}</p>
                <p className="text-gray-600">{t(member.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
