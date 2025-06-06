
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-yoga-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-serif text-xl font-bold text-yoga-500">Joytir</h3>
              <span className="text-lg font-light">Yoga</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Finding joy and peace through the practice of yoga.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-yoga-500 hover:text-yoga-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-yoga-500 hover:text-yoga-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-yoga-500 transition-colors">Home</Link>
              <Link to="/biography" className="text-muted-foreground hover:text-yoga-500 transition-colors">Biography</Link>
              <Link to="/experience" className="text-muted-foreground hover:text-yoga-500 transition-colors">Experience</Link>
              <Link to="/booking" className="text-muted-foreground hover:text-yoga-500 transition-colors">Booking</Link>
              <Link to="/access-request" className="text-muted-foreground hover:text-yoga-500 transition-colors">Request Access</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Camille</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-yoga-500" />
                <span className="text-muted-foreground">+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-yoga-500" />
                <span className="text-muted-foreground">camille@jajajaja.com</span>
              </div>
              <p className="text-muted-foreground">
                Paris, France
              </p>
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
