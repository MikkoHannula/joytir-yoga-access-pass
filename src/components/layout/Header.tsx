import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = {
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const { language, setLanguage } = useLanguage();
  const links = navLinks[language] || navLinks.en;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to top on navigation
  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="font-serif text-2xl font-bold text-emerald-400 drop-shadow-sm">Joytir</div>
            <div className="text-xl font-light text-emerald-700 drop-shadow-sm">Yoga</div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link key={link.to} to={link.to} className="text-foreground/80 hover:text-foreground transition-colors" onClick={handleNavLinkClick}>
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Language Switcher */}
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm text-muted-foreground mr-1">{languageLabel[language]}</span>
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
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" className="h-9 w-9 p-0" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container py-4 flex flex-col gap-4">
            {links.map(link => (
              <Link key={link.to} to={link.to} className="py-2 hover:text-yoga-500" onClick={handleNavLinkClick}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
