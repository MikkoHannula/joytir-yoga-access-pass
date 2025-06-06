
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-yoga-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/30" />
          <img 
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" 
            alt="Yoga practice"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4">
              Find Your Inner <span className="text-yoga-500">Balance</span> with Joytir Yoga
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Join Camille Cussaguet on a journey to wellness through mindful yoga practice
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/access-request">
                <Button className="bg-yoga-500 hover:bg-yoga-600 text-white px-6 py-2 rounded-md">
                  Request Access
                </Button>
              </Link>
              <Link to="/biography">
                <Button variant="outline" className="border-yoga-300 text-yoga-500 hover:bg-yoga-100">
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
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" 
                alt="Camille Cussaguet" 
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h6 className="text-yoga-500 font-medium mb-2">About Camille</h6>
              <h2 className="text-3xl font-serif font-medium mb-4">Dedicated Yoga Instructor</h2>
              <p className="text-muted-foreground mb-6">
                Camille Cussaguet is a certified yoga instructor with over 10 years of experience, 
                specializing in Hatha, Vinyasa, and Restorative yoga. Her approach combines traditional 
                yoga philosophy with a joyful ambience.
              </p>
              <Link to="/biography">
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
            <h6 className="text-yoga-700 font-medium mb-2">Experience & Certifications</h6>
            <h2 className="text-3xl font-serif font-medium mb-4">Years of Dedicated Practice</h2>
            <p className="text-yoga-900">
              Discover Camille's journey through yoga.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="yoga-card">
              <CardContent className="pt-6">
                <div className="bg-yoga-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yoga-500">
                    <path d="M12 2L5 12l7 10 7-10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Certified Trainer</h3>
                <p className="text-muted-foreground mb-4">
                  Registered Yoga Teacher (RYT-500) with Yoga Alliance, trained in India.
                </p>
              </CardContent>
            </Card>
            
            <Card className="yoga-card">
              <CardContent className="pt-6">
                <div className="bg-yoga-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yoga-500">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">10+ Years Experience</h3>
                <p className="text-muted-foreground mb-4">
                  A decade of teaching experience across various countries and centers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="yoga-card">
              <CardContent className="pt-6">
                <div className="bg-yoga-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yoga-500">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Specialized Training</h3>
                <p className="text-muted-foreground mb-4">
                  Additional certifications in prenatal yoga, yoga therapy, and meditation techniques.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/experience">
              <Button className="bg-white text-yoga-500 hover:bg-yoga-50">
                View Full Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="bg-yoga-100 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">
                Ready to Begin Your Yoga Journey?
              </h2>
              <p className="text-muted-foreground mb-6">
                Request access to join Camille's exclusive sessions and start your transformation today.
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
    </div>
  );
};

export default Home;
