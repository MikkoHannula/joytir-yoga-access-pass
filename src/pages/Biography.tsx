import { Card, CardContent } from "@/components/ui/card";

const Biography = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-3 bg-yoga-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-0.5 text-emerald-400">
              À propos de Camille Cussaguet
            </h1>
            <p className="text-lg text-muted-foreground mb-0.5">
              Professeure de yoga et éternelle élève
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contenu de la biographie */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative mb-6">
                  <div className="absolute -top-3 -right-3 w-24 h-24 bg-yoga-200 rounded-full opacity-50 animate-float" />
                  <img 
                    src="/Yoga%20front.jpg" 
                    alt="Camille Cussaguet" 
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-serif font-medium mb-2 text-emerald-400">Philosophie personnelle</h3>
                      <p className="text-muted-foreground">                      
                        "Le yoga commence dans le corps, s’installe dans l’esprit, et rayonne naturellement dans la vie."
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">Mon parcours</h2>
                <p className="text-muted-foreground mb-4">
                  La première fois que j’ai essayé le yoga, j’avais tout juste 20 ans… et je n’avais pas aimé ! C’est en 2013, lors d’une seconde tentative, que la révélation a eu lieu. Petit à petit, j’ai commencé à me réapproprier mon corps, à mieux comprendre mes émotions et à apprivoiser mon esprit. J’ai alors découvert la puissance du yoga, non seulement sur le tapis, mais dans tous les aspects de ma vie quotidienne.
                </p>
                <p className="text-muted-foreground mb-4">
                  Cette transformation a débuté à Paris, mais mon chemin m’a menée bien plus loin. En quête d’expériences et d’approfondissement, j’ai voyagé en Australie, en Indonésie et en Nouvelle-Zélande, où j’ai eu la chance de passer du temps avec des personnes inspirantes et de nourrir ma pratique au fil des rencontres.
                </p>
                <p className="text-muted-foreground mb-4">
                  En 2017, je me suis rendue à Mysore, en Inde, berceau du yoga, pour suivre une formation intensive de Hatha Yoga de 500 heures. J’ai ensuite enseigné en Nouvelle-Zélande et en Finlande, notamment au sein du club Fitness 24/24, et j’ai également été certifiée en Body Balance LesMills.
                </p>
                <p className="text-muted-foreground mb-4">
                  De retour en France en 2019, j’ai continué à transmettre cette pratique avec passion, tout en menant une autre activité professionnelle. Ma famille s’est agrandie depuis, ce qui a donné une nouvelle dimension à mon approche : plus intuitive, tournée vers l’équilibre entre ancrage et légèreté.
                </p>
                <p className="text-muted-foreground mb-4">
                  Mon souhait aujourd’hui est de vous accompagner à travers une pratique qui vous reconnecte à vos sensations, crée un espace de bien-être durable, et nourrit votre lumière intérieure.
                </p>
                <p className="text-muted-foreground mb-4">
                  Dans chaque séance, j’y mets ma joie et mon cœur.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">Au-delà du tapis</h2>
                <p className="text-muted-foreground mb-4">
                  Je suis avant tout maman de deux enfants, une aventure qui enrichit profondément ma pratique et ma vision de la vie.<br />
                  Je puise mon énergie dans la nature, en particulier en forêt, où je me ressource dès que possible. L’équitation est une autre passion qui m’aide à cultiver la connexion au vivant et à l’instant présent.<br />
                  J’aime explorer de nouveaux endroits, découvrir d’autres cultures et rencontrer de nouvelles personnes, et je garde un lien fort avec la Finlande, pays cher à mon cœur, où je me reconnecte à moi-même à travers le sauna et l’avantouinti – cette belle tradition de se plonger dans l’eau froide après la chaleur.<br />
                  Et puis, j’aime aussi la danse, les éclats de rire, les moments de légèreté et de joie partagée. Parce que le yoga, pour moi, c’est aussi savoir célébrer la vie sous toutes ses formes.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-yoga-300 pl-4 italic text-lg">
                "Ma plus grande joie ? Voir un sourire illuminer votre visage à la fin de la séance."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biography;
