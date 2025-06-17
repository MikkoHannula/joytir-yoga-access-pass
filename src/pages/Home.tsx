import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCallback } from "react";

const Home = () => {
  const handleViewFullExperience = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleReadFullBiography = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-start pt-20 overflow-hidden bg-yoga-100" style={{
        backgroundImage: 'url("/Yoga%20mountain%202.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 z-0">
          {/* Use a semi-transparent dark blue gradient for overlay to ensure background is visible and text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-blue-900/30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-emerald-400 drop-shadow-lg">
              Find Your Inner <span className="text-sky-200">Balance</span> with <span className="text-emerald-100">Joytir Yoga</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-sky-100 drop-shadow">
              Join Camille on a journey to wellness through mindful yoga practice
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <Link to="/access-request">
                <Button className="bg-yoga-500 hover:bg-yoga-600 text-white px-6 py-2 rounded-md">
                  Request Access
                </Button>
              </Link> */}
              <Link to="/biography">
                <Button variant="outline" className="border-sky-300 text-sky-900 hover:bg-sky-200/80 hover:text-sky-900">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yoga-200 rounded-full opacity-50" />
              <img 
                src="/Yoga%20class.JPG" 
                alt="Camille Cussaguet" 
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h6 className="text-yoga-500 font-medium mb-2 text-emerald-400">About Camille</h6>
              <h2 className="text-3xl font-serif font-medium mb-4 text-emerald-400">Dedicated Yoga Instructor</h2>
              <p className="text-muted-foreground mb-6">
                Camille is a certified yoga instructor with over 8 years of experience, 
                specializing in Hatha. Her approach combines traditional 
                yoga philosophy with a joyful ambience.
              </p>
              <Link to="/biography" onClick={handleReadFullBiography}>
                <Button variant="link" className="text-yoga-500 p-0 hover:text-yoga-600">
                  Read Full Biography →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Certifications Preview */}
      <section className="section-padding yoga-gradient">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h6 className="text-yoga-700 font-medium mb-2 text-emerald-400">Experience & Certifications</h6>
            <h2 className="text-3xl font-serif font-medium mb-4 text-emerald-400">Years of Practice</h2>
            <p className="text-yoga-900">
              Discover my journey through yoga.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Card className="yoga-card w-full md:w-96">
              <CardContent className="pt-6">
                <div className="bg-yoga-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yoga-500">
                    <path d="M12 2L5 12l7 10 7-10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Certified Trainer</h3>
                <p className="text-muted-foreground mb-4">
                  Registered Yoga Teacher (IYT-500) with IndeaYoga, trained in India.
                </p>
              </CardContent>
            </Card>
            <Card className="yoga-card w-full md:w-96">
              <CardContent className="pt-6">
                <div className="bg-yoga-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yoga-500">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">8+ Years Experience</h3>
                <p className="text-muted-foreground mb-4">
                  Teaching experiences across various countries and centers.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/experience" onClick={handleViewFullExperience}>
              <Button className="bg-white text-yoga-500 hover:bg-yoga-50">
                View Full Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      {/*
      <section className="section-padding bg-white">
        <div className="container">
          <div className="bg-yoga-100 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">
                Ready to Begin Your Yoga Journey?
              </h2>
              <p className="text-muted-foreground mb-6">
                Request access to join Camille's exclusive sessions and start your yoga journey today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/access-request">
                  <Button className="bg-yoga-500 hover:bg-yoga-600 text-white">
                    Request Access
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-yoga-300 text-yoga-500 hover:bg-yoga-100">
                    Member Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default Home;
