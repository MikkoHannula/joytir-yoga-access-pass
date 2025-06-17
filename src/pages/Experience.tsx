import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    heroTitle: "Experience & Certifications",
    heroSubtitle: "A journey of continuous learning and growth in yoga",
    certsTitle: "Certifications & Training",
    certs: [
      {
        year: "2017",
        place: "Mysore, India",
        title: "500h Hatha Yoga Teacher Training",
        org: "IndeaYoga",
        desc: "Completed an intensive 500-hour Hatha Yoga teacher training at the birthplace of yoga, deepening both personal practice and teaching skills."
      },
      {
        year: "2018",
        place: "Finland",
        title: "BodyBalance Instructor Certification",
        org: "Les Mills",
        desc: "Certified to teach Les Mills BodyBalance."
      }
    ],
    expTitle: "Professional Experience",
    exp: [
      {
        role: "Yoga Instructor",
        org: "Various Hostels",
        place: "New Zealand",
        period: "2017–2018",
        desc: "Taught yoga classes to international travelers in hostels, sharing yoga with a diverse and global community."
      },
      {
        role: "Yoga Instructor & BodyBalance Certified",
        org: "Fitness 24/7",
        place: "Tikkurila, Finland",
        period: "2018–2019",
        desc: "Taught regular yoga classes and completed Les Mills BodyBalance certification."
      },
      {
        role: "Yoga Instructor",
        org: "ASAF",
        place: "Roissy CDG, France",
        period: "2019–2022",
        desc: "Led yoga classes for airport staff and local community, fostering well-being in a dynamic environment."
      },
      {
        role: "Yoga Instructor",
        org: "CSEEI Air France",
        place: "Roissy CDG, France",
        period: "2022–Present",
        desc: "Currently teaching yoga to Air France employees, supporting workplace wellness."
      }
    ],
    approachTitle: "My Approach to Hatha Yoga",
    approach: "I believe in a yoga that is accessible, grounded, and fully embodied. My approach begins with the physical practice: through movement, breath, and body awareness, we gradually open the door to more subtle layers—emotional or spiritual—without ever rushing the process. Each session is an invitation to slow down, ground yourself, reconnect with your sensations, and create space—both in the body and in the mind. I place special attention on breath, alignment, and the quality of awareness in each posture. The intention: to cultivate grounding, clarity, and lasting well-being—on the mat and beyond.",
    specialtiesTitle: "Teaching Speciality",
    yogaStyles: ["Hatha Yoga", "Vinyasa Flow"]
  },
  fr: {
    heroTitle: "Expérience & Certifications",
    heroSubtitle: "Un parcours d’apprentissage et d’évolution continue dans le yoga",
    certsTitle: "Certifications & Formations",
    certs: [
      {
        year: "2017",
        place: "Mysore, Inde",
        title: "Formation Professeur de Hatha Yoga 500h",
        org: "IndeaYoga",
        desc: "Formation intensive de 500 heures en Hatha Yoga au berceau du yoga, approfondissant la pratique personnelle et l’enseignement."
      },
      {
        year: "2018",
        place: "Finlande",
        title: "Certification Instructeur BodyBalance",
        org: "Les Mills",
        desc: "Certifiée pour enseigner Les Mills BodyBalance."
      }
    ],
    expTitle: "Expérience professionnelle",
    exp: [
      {
        role: "Professeure de yoga",
        org: "Auberges de jeunesse",
        place: "Nouvelle-Zélande",
        period: "2017–2018",
        desc: "Cours de yoga pour des voyageurs internationaux, partageant le yoga avec une communauté diverse et mondiale."
      },
      {
        role: "Professeure de yoga & certifiée BodyBalance",
        org: "Fitness 24/7",
        place: "Tikkurila, Finlande",
        period: "2018–2019",
        desc: "Cours réguliers de yoga et certification Les Mills BodyBalance."
      },
      {
        role: "Professeure de yoga",
        org: "ASAF",
        place: "Roissy CDG, France",
        period: "2019–2022",
        desc: "Cours de yoga pour le personnel aéroportuaire et la communauté locale, favorisant le bien-être dans un environnement dynamique."
      },
      {
        role: "Professeure de yoga",
        org: "CSEEI Air France",
        place: "Roissy CDG, France",
        period: "2022–Présent",
        desc: "Enseigne actuellement le yoga aux employés d’Air France, soutenant le bien-être au travail."
      }
    ],
    approachTitle: "Mon approche du Hatha Yoga",
    approach: "Je crois en un yoga accessible, ancré et pleinement incarné. Mon approche commence par la pratique physique : à travers le mouvement, la respiration et la conscience corporelle, nous ouvrons progressivement la porte à des couches plus subtiles — émotionnelles ou spirituelles — sans jamais brusquer le processus. Chaque séance est une invitation à ralentir, à s’ancrer, à se reconnecter à ses sensations et à créer de l’espace — dans le corps comme dans l’esprit. J’accorde une attention particulière à la respiration, à l’alignement et à la qualité de la présence dans chaque posture. L’intention : cultiver l’ancrage, la clarté et un bien-être durable — sur le tapis et au-delà.",
    specialtiesTitle: "Spécialité d’enseignement",
    yogaStyles: ["Hatha Yoga", "Vinyasa Flow"]
  }
};

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-yoga-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-emerald-400">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center text-emerald-400">
              {t.certsTitle}
            </h2>
            <div className="space-y-6">
              {t.certs.map((cert, i) => (
                <Card className="overflow-hidden" key={i}>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="bg-yoga-100 p-6 flex flex-col justify-center">
                        <div className="text-yoga-500 font-medium">{cert.year}</div>
                        <div className="text-sm text-muted-foreground">{cert.place}</div>
                      </div>
                      <div className="p-6 md:col-span-3">
                        <h3 className="font-serif font-medium text-xl mb-1">{cert.title}</h3>
                        <div className="text-yoga-500 mb-2">{cert.org}</div>
                        <p className="text-muted-foreground">{cert.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 yoga-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center text-emerald-400">
              {t.expTitle}
            </h2>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-16 md:left-20 w-px bg-yoga-300" />
              <div className="space-y-12">
                {t.exp.map((exp, i) => (
                  <div className="relative" key={i}>
                    <div className="absolute left-16 md:left-20 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yoga-300 z-10" />
                    <div className="pl-24 md:pl-32">
                      <h3 className="font-serif font-medium text-xl mb-1">{exp.role}</h3>
                      <div className="flex flex-wrap gap-x-2 mb-2">
                        <span className="text-yoga-700">{exp.org}</span>
                        <span className="text-yoga-500">•</span>
                        <span className="text-yoga-700">{exp.place}</span>
                      </div>
                      <div className="text-yoga-900 font-medium mb-3">{exp.period}</div>
                      <p className="text-yoga-800">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Hatha Yoga Approach Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">{t.approachTitle}</h2>
          <p className="text-muted-foreground mb-4">
            {t.approach}
          </p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center text-emerald-400">
              {t.specialtiesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div />
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif font-medium text-xl mb-3">Yoga Styles</h3>
                  <ul className="space-y-2">
                    {t.yogaStyles.map((style, i) => (
                      <li className="flex items-center gap-2" key={i}>
                        <div className="w-2 h-2 rounded-full bg-yoga-300" />
                        <span>{style}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
