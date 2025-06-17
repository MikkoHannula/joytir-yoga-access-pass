import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    heroTitle: "About Camille Cussaguet",
    heroSubtitle: "Yoga teacher and lifelong student",
    journeyTitle: "My Journey",
    journey: [
      "The first time I tried yoga, I was just 20... and I didn’t like it! It was in 2013, on a second attempt, that the revelation happened. Little by little, I started to reclaim my body, better understand my emotions, and tame my mind. I discovered the power of yoga, not only on the mat, but in all aspects of my daily life.",
      "This transformation began in Paris, but my path took me much further. Seeking experiences and depth, I traveled to Australia, Indonesia, and New Zealand, where I was lucky to spend time with inspiring people and nourish my practice through encounters.",
      "In 2017, I went to Mysore, India, the birthplace of yoga, for an intensive 500-hour Hatha Yoga training. I then taught in New Zealand and Finland, notably at Fitness 24/7, and also became certified in Les Mills BodyBalance.",
      "Back in France in 2019, I continued to share this practice with passion, while also pursuing another professional activity. My family has grown since then, giving a new dimension to my approach: more intuitive, focused on balance between grounding and lightness.",
      "Today, my wish is to guide you through a practice that reconnects you to your sensations, creates a lasting space of well-being, and nourishes your inner light. In every session, I put my joy and my heart into it."
    ],
    beyondTitle: "Beyond the Mat",
    beyond: [
      "Above all, I am a mother of two, an adventure that deeply enriches my practice and vision of life.",
      "I draw energy from nature, especially the forest, where I recharge as often as possible. Horseback riding is another passion that helps me cultivate connection to life and the present moment.",
      "I love exploring new places, discovering other cultures, and meeting new people, and I keep a strong bond with Finland, a country dear to my heart, where I reconnect with myself through sauna and avantouinti – the beautiful tradition of plunging into cold water after the heat.",
      "And then, I also love dancing, laughter, moments of lightness and shared joy. Because yoga, for me, is also about celebrating life in all its forms."
    ],
    philosophyTitle: "Personal Philosophy",
    philosophy: '"Yoga begins in the body, settles in the mind, and naturally radiates into life."',
    quote: '"My greatest joy? Seeing a smile light up your face at the end of the session."',
  },
  fr: {
    heroTitle: "À propos de Camille Cussaguet",
    heroSubtitle: "Professeure de yoga et éternelle élève",
    journeyTitle: "Mon parcours",
    journey: [
      "La première fois que j’ai essayé le yoga, j’avais tout juste 20 ans… et je n’avais pas aimé ! C’est en 2013, lors d’une seconde tentative, que la révélation a eu lieu. Petit à petit, j’ai commencé à me réapproprier mon corps, à mieux comprendre mes émotions et à apprivoiser mon esprit. J’ai alors découvert la puissance du yoga, non seulement sur le tapis, mais dans tous les aspects de ma vie quotidienne.",
      "Cette transformation a débuté à Paris, mais mon chemin m’a menée bien plus loin. En quête d’expériences et d’approfondissement, j’ai voyagé en Australie, en Indonésie et en Nouvelle-Zélande, où j’ai eu la chance de passer du temps avec des personnes inspirantes et de nourrir ma pratique au fil des rencontres.",
      "En 2017, je me suis rendue à Mysore, en Inde, berceau du yoga, pour suivre une formation intensive de Hatha Yoga de 500 heures. J’ai ensuite enseigné en Nouvelle-Zélande et en Finlande, notamment au sein du club Fitness 24/24, et j’ai également été certifiée en Body Balance LesMills.",
      "De retour en France en 2019, j’ai continué à transmettre cette pratique avec passion, tout en menant une autre activité professionnelle. Ma famille s’est agrandie depuis, ce qui a donné une nouvelle dimension à mon approche : plus intuitive, tournée vers l’équilibre entre ancrage et légèreté.",
      "Mon souhait aujourd’hui est de vous accompagner à travers une pratique qui vous reconnecte à vos sensations, crée un espace de bien-être durable, et nourrit votre lumière intérieure. Dans chaque séance, j’y mets ma joie et mon cœur."
    ],
    beyondTitle: "Au-delà du tapis",
    beyond: [
      "Je suis avant tout maman de deux enfants, une aventure qui enrichit profondément ma pratique et ma vision de la vie.",
      "Je puise mon énergie dans la nature, en particulier en forêt, où je me ressource dès que possible. L’équitation est une autre passion qui m’aide à cultiver la connexion au vivant et à l’instant présent.",
      "J’aime explorer de nouveaux endroits, découvrir d’autres cultures et rencontrer de nouvelles personnes, et je garde un lien fort avec la Finlande, pays cher à mon cœur, où je me reconnecte à moi-même à travers le sauna et l’avantouinti – cette belle tradition de se plonger dans l’eau froide après la chaleur.",
      "Et puis, j’aime aussi la danse, les éclats de rire, les moments de légèreté et de joie partagée. Parce que le yoga, pour moi, c’est aussi savoir célébrer la vie sous toutes ses formes."
    ],
    philosophyTitle: "Philosophie personnelle",
    philosophy: '"Le yoga commence dans le corps, s’installe dans l’esprit, et rayonne naturellement dans la vie."',
    quote: '"Ma plus grande joie ? Voir un sourire illuminer votre visage à la fin de la séance."',
  }
};

const Biography = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  return (
    <div>
      {/* Hero */}
      <section className="relative py-3 bg-yoga-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-0.5 text-emerald-400">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-muted-foreground mb-0.5">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contenu de la biographie */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">{t.journeyTitle}</h2>
                {t.journey.map((para, i) => (
                  <p className="text-muted-foreground mb-4" key={i}>{para}</p>
                ))}
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">{t.beyondTitle}</h2>
                {t.beyond.map((para, i) => (
                  <p className="text-muted-foreground mb-4" key={i}>{para}</p>
                ))}
              </div>
              
              <blockquote className="border-l-4 border-yoga-300 pl-4 italic text-lg">
                {t.quote}
              </blockquote>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative mb-6">
                  <div className="absolute -top-3 -right-3 w-24 h-24 bg-yoga-200 rounded-full opacity-50 animate-float" />
                  <img 
                    src="/Yoga front.jpg" 
                    alt="Camille Cussaguet" 
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-serif font-medium mb-2 text-emerald-400">{t.philosophyTitle}</h3>
                      <p className="text-muted-foreground">{t.philosophy}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biography;
