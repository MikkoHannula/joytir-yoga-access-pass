import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Home.tsx
// -------------------
// Main landing page for Joytir Yoga.
// - All visible text is bilingual and switches with the global language context.
// - To update hero, about, or experience sections, edit the translations object.
// - For navigation, see Header.tsx.
//
// To add new sections, follow the structure below and add translations for both languages.

const translations = {
  en: {
    heroTitle: 'Find Your Inner Balance with Joytir Yoga',
    heroSubtitle: "Join Camille on a journey to wellness through mindful yoga practice",
    aboutHeadline: "About Camille",
    aboutText: "Camille is a certified yoga instructor with over 8 years of experience, specializing in Hatha. Her approach combines traditional yoga philosophy with a joyful ambience.",
    readFullBio: "Read Full Biography →",
    yearsHeadline: "Years of Practice",
    yearsText: "Discover my journey through yoga.",
    certifiedTrainer: "Certified Trainer",
    certifiedTrainerDesc: "Registered Yoga Teacher (IYT-500) with IndeaYoga, trained in India.",
    experienceHeadline: "8+ Years Experience",
    experienceDesc: "Teaching experiences across various countries and centers.",
    expCertHeadline: "Experience & Certifications",
    viewFullExperience: "View Full Experience",
    footerSlogan: "Finding joy and peace through the practice of yoga.",
  },
  fr: {
    heroTitle: 'Trouvez votre équilibre intérieur avec Joytir Yoga',
    heroSubtitle: "Rejoignez Camille pour un voyage vers le bien-être à travers une pratique de yoga consciente.",
    aboutHeadline: "À propos de Camille",
    aboutText: "Camille est professeure de yoga certifiée avec plus de 8 ans d’expérience, spécialisée en Hatha. Son approche allie la philosophie traditionnelle du yoga à une ambiance joyeuse.",
    readFullBio: "Lire la biographie complète →",
    yearsHeadline: "Années de pratique",
    yearsText: "Découvrez mon parcours à travers le yoga.",
    certifiedTrainer: "Formatrice certifiée",
    certifiedTrainerDesc: "Professeure de yoga diplômée (IYT-500) avec IndeaYoga, formée en Inde.",
    experienceHeadline: "8+ ans d’expérience",
    experienceDesc: "Expériences d’enseignement dans divers pays et centres.",
    expCertHeadline: "Expérience & Certifications",
    viewFullExperience: "Voir toute l’expérience",
    footerSlogan: "Trouver la joie et la paix grâce à la pratique du yoga.",
  }
};

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const handleViewFullExperience = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const handleReadFullBiography = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-start pt-20 overflow-hidden bg-yoga-100" style={{
        backgroundImage: 'url("/Yoga%20mountain%202.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 z-0">
          {/* Use a semi-transparent dark blue gradient for overlay to ensure background is visible and text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-blue-900/30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-emerald-400 drop-shadow-lg">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-sky-100 drop-shadow">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/biography">
                <Button variant="outline" className="border-sky-300 text-sky-900 hover:bg-sky-200/80 hover:text-sky-900">
                  {t.aboutHeadline}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yoga-200 rounded-full opacity-50" />
              <img 
                src="/yoga-class.jpg" 
                alt="Camille Cussaguet" 
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h6 className="text-yoga-500 font-medium mb-2 text-emerald-400">{t.aboutHeadline}</h6>
              <p className="text-muted-foreground mb-6">
                {t.aboutText}
              </p>
              <Link to="/biography" onClick={handleReadFullBiography}>
                <Button variant="link" className="text-yoga-500 p-0 hover:text-yoga-600">
                  {t.readFullBio}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Years of Practice Section */}
      <section className="section-padding yoga-gradient">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-medium mb-4 text-emerald-400">{t.yearsHeadline}</h2>
            <p className="text-yoga-900">
              {t.yearsText}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Card className="yoga-card w-full md:w-96">
              <CardContent className="pt-6">
                <div className="bg-yoga-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yoga-500">
                    <path d="M12 2L5 12l7 10 7-10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{t.certifiedTrainer}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.certifiedTrainerDesc}
                </p>
              </CardContent>
            </Card>
            <Card className="yoga-card w-full md:w-96">
              <CardContent className="pt-6">
                <div className="bg-yoga-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yoga-500">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{t.experienceHeadline}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.experienceDesc}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Link to="/experience" onClick={handleViewFullExperience}>
              <Button className="bg-white text-yoga-500 hover:bg-yoga-50">
                {t.viewFullExperience}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
