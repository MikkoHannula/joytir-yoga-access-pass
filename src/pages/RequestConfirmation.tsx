// RequestConfirmation.tsx
// -------------------
// Confirmation page after a user submits an access request.
// - All visible text is bilingual and switches with the global language context.
// - To update confirmation steps, edit the 'steps' array in the translations object.
// - To change button destinations or labels, see the <Link> and <Button> components at the bottom.
//
// For navigation, see Header.tsx.
//
// To add more languages, extend the translations object and update LanguageContext if needed.

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// --- TRANSLATIONS ---
// All visible text for this page is defined here for both English and French.
// To add or update text, modify the appropriate language object.
const translations = {
  en: {
    title: "Request Sent Successfully",
    thanks: "Thank you for your interest in joining Joytir Yoga! Camille will personally review your request and respond within 48 hours.",
    next: "What happens next?",
    steps: [
      "Camille will review your application and get back to you.",
      "You will receive an email with her decision. If accepted, the email will include a link to create your account.",
      "Once your account is created, you can book classes and access exclusive content."
    ],
    backHome: "Back to Home",
    aboutCamille: "Learn more about Camille"
  },
  fr: {
    title: "Demande envoyée avec succès",
    thanks: "Merci pour votre intérêt à rejoindre Joytir Yoga ! Camille examinera personnellement votre demande et vous répondra.",
    next: "Et maintenant ?",
    steps: [
      "Camille va examiner votre candidature et vous répondre.",
      "Vous recevrez un email avec sa décision. Si votre demande est acceptée, l’email contiendra un lien pour créer votre compte.",
      "Une fois votre compte créé, vous pourrez réserver des cours et accéder à du contenu exclusif."
    ],
    backHome: "Retour à l’accueil",
    aboutCamille: "En savoir plus sur Camille"
  }
};

// --- MAIN COMPONENT ---
// This component renders the confirmation UI. It uses the global language context.
const RequestConfirmation = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  return (
    <div className="py-20 bg-yoga-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-yoga-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-yoga-500" />
            </div>
          </div>
          {/* Title and Thank You Message */}
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-emerald-400">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {t.thanks}
          </p>
          {/* Steps Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-medium mb-3 text-emerald-400">{t.next}</h2>
            <ol className="text-left space-y-3">
              {t.steps.map((step, i) => (
                <li className="flex gap-3" key={i}>
                  <div className="w-6 h-6 rounded-full bg-yoga-100 text-yoga-500 flex-shrink-0 flex items-center justify-center font-medium">{i+1}</div>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Back to Home Button */}
            <Link to="/">
              <Button variant="outline" className="border-yoga-300 text-yoga-500 hover:bg-yoga-100">
                {t.backHome}
              </Button>
            </Link>
            {/* About Camille Button */}
            <Link to="/biography">
              <Button className="bg-yoga-500 hover:bg-yoga-600">
                {t.aboutCamille}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- EXPORT ---
export default RequestConfirmation;
