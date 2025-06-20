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
    <footer className="bg-yoga-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-serif text-xl font-bold text-emerald-400">Joytir</h3>
              <span className="text-lg font-light text-emerald-700">Yoga</span>
            </div>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground mr-1">{t.languages}</span>
              <button
                aria-label="Switch to English"
                className={`p-1 rounded-full border ${language === 'en' ? 'border-emerald-400' : 'border-gray-300'}`}
                onClick={() => setLanguage('en')}
                type="button"
              >
                ENG
              </button>
              <button
                aria-label="Switch to French"
                className={`p-1 rounded-full border ${language === 'fr' ? 'border-emerald-400' : 'border-gray-300'}`}
                onClick={() => setLanguage('fr')}
                type="button"
              >
                <span role="img" aria-label="Français" style={{fontSize: '1.25rem'}}>🇫🇷</span>
              </button>
            </div>

            <p className="text-muted-foreground mb-4">
              {t.slogan}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/joytir_yoga?igsh=NzF4czNtdDVuZzBx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-yoga-500 hover:text-yoga-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-emerald-400">{t.quickLinks}</h3>
            <nav className="flex flex-col gap-2">
              {links.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="text-muted-foreground hover:text-yoga-500 transition-colors" 
                  onClick={handleNavLinkClick}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-emerald-400">{t.contact}</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yoga-500" aria-hidden="true" />
                <span className="font-medium text-yoga-500">{t.phone}</span>
                <a href="tel:0671231067" className="hover:underline text-muted-foreground">0671231067</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yoga-500" aria-hidden="true" />
                <span className="font-medium text-yoga-500">{t.email}</span>
                <a href="mailto:camille.cussaguet@gmail.com" className="hover:underline text-muted-foreground">camille.cussaguet@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-yoga-200 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Joytir Yoga by Camille Cussaguet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
