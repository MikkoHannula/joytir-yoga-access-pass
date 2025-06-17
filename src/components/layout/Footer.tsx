import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [language, setLanguage] = useState('en');
  const currentYear = new Date().getFullYear();
  
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
    <footer className="bg-yoga-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-serif text-xl font-bold text-emerald-400">Joytir</h3>
              <span className="text-lg font-light text-emerald-700">Yoga</span>
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
            <p className="text-muted-foreground mb-4">
              Finding joy and peace through the practice of yoga.
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
            <h3 className="font-serif text-lg font-medium mb-4 text-emerald-400">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-yoga-500 transition-colors" onClick={handleNavLinkClick}>Home</Link>
              <Link to="/biography" className="text-muted-foreground hover:text-yoga-500 transition-colors" onClick={handleNavLinkClick}>Biography</Link>
              <Link to="/experience" className="text-muted-foreground hover:text-yoga-500 transition-colors" onClick={handleNavLinkClick}>Experience</Link>
              {/* <Link to="/booking" className="text-muted-foreground hover:text-yoga-500 transition-colors">Booking</Link> */}
              {/* <Link to="/access-request" className="text-muted-foreground hover:text-yoga-500 transition-colors">Request Access</Link> */}
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-emerald-400">Contact Camille</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yoga-500" aria-hidden="true" />
                <span className="font-medium text-yoga-500">Phone:</span>
                <a href="tel:0671231067" className="hover:underline text-muted-foreground">0671231067</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yoga-500" aria-hidden="true" />
                <span className="font-medium text-yoga-500">Email:</span>
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
