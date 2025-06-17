import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const RequestConfirmation = () => {
  return (
    <div className="py-20 bg-yoga-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-yoga-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-yoga-500" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-emerald-400">
            Demande envoyée avec succès
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Merci pour votre intérêt à rejoindre Joytir Yoga ! Camille examinera personnellement votre demande et vous répondra sous 48 heures.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-medium mb-3 text-emerald-400">Et maintenant ?</h2>
            <ol className="text-left space-y-3">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yoga-100 text-yoga-500 flex-shrink-0 flex items-center justify-center font-medium">1</div>
                <p>Camille va examiner votre candidature et voir comment vos objectifs s’alignent avec son approche d’enseignement.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yoga-100 text-yoga-500 flex-shrink-0 flex items-center justify-center font-medium">2</div>
                <p>Vous recevrez un email avec sa décision. Si votre demande est acceptée, l’email contiendra un lien pour créer votre compte.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yoga-100 text-yoga-500 flex-shrink-0 flex items-center justify-center font-medium">3</div>
                <p>Une fois votre compte créé, vous pourrez réserver des cours et accéder à du contenu exclusif.</p>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button variant="outline" className="border-yoga-300 text-yoga-500 hover:bg-yoga-100">
                Retour à l’accueil
              </Button>
            </Link>
            <Link to="/biography">
              <Button className="bg-yoga-500 hover:bg-yoga-600">
                En savoir plus sur Camille
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestConfirmation;
