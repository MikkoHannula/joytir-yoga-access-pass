import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const { toast } = useToast();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to top on navigation
  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    // Optionally: trigger i18n logic here
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
        
        {/* Desktop Navigaatio */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors" onClick={handleNavLinkClick}>Home</Link>
          <Link to="/biography" className="text-foreground/80 hover:text-foreground transition-colors" onClick={handleNavLinkClick}>Biography</Link>
          <Link to="/experience" className="text-foreground/80 hover:text-foreground transition-colors" onClick={handleNavLinkClick}>Experience</Link>
          {/* <Link to="/virtual-classes" className="text-foreground/80 hover:text-foreground transition-colors">Virtual Classes</Link> */}
          {/* <Link to="/booking" className="text-foreground/80 hover:text-foreground transition-colors">Booking</Link> */}
          {/* <Link to="/access-request">
            <Button variant="outline" className="border-yoga-300 text-yoga-500 hover:bg-yoga-100">
              Request Access
            </Button>
          </Link> */}
          {/* <Link to="/login">
            <Button className="bg-yoga-500 hover:bg-yoga-600">
              Login
            </Button>
          </Link> */}
        </nav>
        
        {/* Mobiili Menu Nappi */}
        <div className="md:hidden">
          <Button variant="ghost" className="h-9 w-9 p-0" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobiili Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container py-4 flex flex-col gap-4">
            <Link to="/" className="py-2 hover:text-yoga-500" onClick={handleNavLinkClick}>Home</Link>
            <Link to="/biography" className="py-2 hover:text-yoga-500" onClick={handleNavLinkClick}>Biography</Link>
            <Link to="/experience" className="py-2 hover:text-yoga-500" onClick={handleNavLinkClick}>Experience</Link>
            {/* <Link to="/virtual-classes" className="py-2 hover:text-yoga-500" onClick={toggleMenu}>Virtual Classes</Link> */}
            {/* <Link to="/booking" className="py-2 hover:text-yoga-500" onClick={toggleMenu}>Booking</Link> */}
            {/* <Link to="/access-request" className="py-2 hover:text-yoga-500" onClick={toggleMenu}>Request Access</Link> */}
            {/* <Link to="/login" className="py-2 hover:text-yoga-500" onClick={toggleMenu}>Login</Link> */}
          </nav>
        </div>
      )}

      <div className="flex items-center gap-2 mb-4">
        {/* ...existing code for Joytir Yoga... */}
        <button
          aria-label="Switch to English"
          className={`ml-2 p-1 rounded-full border ${language === 'en' ? 'border-emerald-400' : 'border-gray-300'}`}
          onClick={() => handleLanguageChange('en')}
        >
          <span className="font-bold text-xs" style={{fontFamily: 'inherit'}}>ENG</span>
        </button>
        <button
          aria-label="Switch to French"
          className={`ml-1 p-1 rounded-full border ${language === 'fr' ? 'border-emerald-400' : 'border-gray-300'}`}
          onClick={() => handleLanguageChange('fr')}
        >
          <span role="img" aria-label="Français">🇫🇷</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
