import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Footer.tsx
// -------------------
// Main site footer with quick links, contact info, and language switcher.
// - Quick links are commented out for disabled pages (Booking, Virtual Classes).

const translations = {
  en: {
    quickLinks: "Quick Links",
    contact: "Contact Camille",
    phone: "Phone:",
    email: "Email:",
    home: "Home",
    biography: "Biography",
    experience: "Experience",
    languages: "Languages",
    slogan: "Finding joy and peace through the practice of yoga."
  },
  fr: {
    quickLinks: "Liens rapides",
    contact: "Contacter Camille",
    phone: "Téléphone :",
    email: "E-mail :",
    home: "Accueil",
    biography: "Biographie",
    experience: "Expérience",
    languages: "Langues",
    slogan: "Trouver la joie et la paix grâce à la pratique du yoga."
  }
};

const quickLinks = {
  en: [
    { to: "/", label: "Home" },
    { to: "/biography", label: "Biography" },
    { to: "/experience", label: "Experience" }
    // { to: "/virtual-classes", label: "Virtual Classes" },
    // { to: "/booking", label: "Booking" }
  ],
  fr: [
    { to: "/", label: "Accueil" },
    { to: "/biography", label: "Biographie" },
    { to: "/experience", label: "Expérience" }
    // { to: "/virtual-classes", label: "Cours virtuels" },
    // { to: "/booking", label: "Réservations" }
  ]
};

const languageLabel = { en: "Languages", fr: "Langues" };

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage } = useLanguage();
  const links = quickLinks[language] || quickLinks.en;
  const t = translations[language] || translations.en;
  
  // Scroll to top on navigation
  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <footer className="bg-yoga-100 py-6">
      <div className="container mx-auto max-w-5xl px-4">
        {/* 4-column grid, logo spans 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left items-center">
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start justify-center md:mr-0">
            <h4 className="text-lg font-semibold mb-3 text-emerald-400">{t.quickLinks}</h4>
            <nav className="flex flex-col gap-2">
              {links.map(link => (
                <Link key={link.to} to={link.to} className="hover:text-yoga-500" onClick={handleNavLinkClick}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Centered Extra Large Logo - spans 2 columns */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center">
            <img src="/joytir-yoga.png" alt="Joytir Yoga Logo" className="h-72 w-72 object-contain rounded-full bg-background p-2 shadow-lg mx-auto" />
          </div>

          {/* Contact Info - phone and email each on their own row, both with icons */}
          <div className="flex flex-col items-start justify-center w-full">
            <h4 className="text-lg font-semibold mb-3 text-emerald-400">{t.contact}</h4>
            <div className="flex flex-col items-start w-full gap-2">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Phone className="h-4 w-4 text-yoga-500" />
                <span className="text-muted-foreground">{t.phone} +33 643210707</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Mail className="h-4 w-4 text-yoga-500" />
                <span className="text-muted-foreground">{t.email} camille@joytir-yoga.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-2 border-t border-yoga-200 text-center text-sm text-muted-foreground">
        <p>© {currentYear} Joytir Yoga by Camille Cussaguet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
