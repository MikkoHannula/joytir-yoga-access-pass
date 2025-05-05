
import { Card, CardContent } from "@/components/ui/card";

const Biography = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-yoga-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4">
              About Camille Cussaguet
            </h1>
            <p className="text-lg text-muted-foreground">
              Yoga instructor, wellness advocate, and lifelong student of mindfulness
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Biography Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative mb-6">
                  <div className="absolute -top-3 -right-3 w-24 h-24 bg-yoga-200 rounded-full opacity-50 animate-float" />
                  <img 
                    src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" 
                    alt="Camille Cussaguet" 
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-serif font-medium mb-2">Personal Philosophy</h3>
                      <p className="text-muted-foreground">
                        "Yoga is not about touching your toes, it's about what you learn on the way down."
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-serif font-medium mb-2">Teaching Style</h3>
                      <p className="text-muted-foreground">
                        Mindful, accessible, and adaptable to all skill levels with a focus on proper alignment and breathing techniques.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4">My Journey</h2>
                <p className="text-muted-foreground mb-4">
                  Camille's journey into yoga began over 15 years ago when she was seeking balance in her high-stress corporate career. What started as a physical practice quickly evolved into a profound spiritual and philosophical exploration that transformed her life path.
                </p>
                <p className="text-muted-foreground mb-4">
                  After experiencing the transformative power of yoga firsthand, Camille left her corporate job to pursue yoga full-time, studying with renowned teachers across India, Thailand, and Europe. Her training encompasses various styles including Hatha, Vinyasa, Yin, and Restorative yoga.
                </p>
                <p className="text-muted-foreground">
                  In 2013, she founded Joytir Yoga with the mission of making yoga accessible to people from all walks of life while honoring the practice's ancient roots and wisdom.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4">Philosophy & Approach</h2>
                <p className="text-muted-foreground mb-4">
                  Camille believes that yoga is for everybody and every body. Her classes emphasize mindful movement, proper alignment, and the connection between breath and movement. She creates a supportive environment where students can explore their practice safely and at their own pace.
                </p>
                <p className="text-muted-foreground mb-4">
                  Rather than focusing solely on achieving advanced poses, Camille encourages students to develop awareness, presence, and compassion both on and off the mat. She integrates meditation, pranayama (breathwork), and yogic philosophy into her teaching to provide a holistic experience.
                </p>
                <p className="text-muted-foreground">
                  Her approach is both traditional and contemporary, honoring yoga's ancient wisdom while making it relevant to modern life challenges.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4">Beyond the Mat</h2>
                <p className="text-muted-foreground mb-4">
                  When not teaching, Camille continues to deepen her own practice through ongoing education and personal study. She is passionate about wellness, sustainable living, and community service.
                </p>
                <p className="text-muted-foreground mb-4">
                  Camille regularly volunteers to teach yoga in underserved communities and participates in humanitarian initiatives. She believes in yoga as a tool for social change and personal empowerment.
                </p>
                <p className="text-muted-foreground">
                  An avid traveler, nature lover, and lifelong learner, Camille brings a wealth of diverse experiences and perspectives to her teaching.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-yoga-300 pl-4 italic text-lg">
                "My greatest joy as a teacher is witnessing the moment when a student discovers their own strength and capability. Yoga is not about perfection—it's about showing up authentically and nurturing your relationship with yourself."
                <footer className="text-right text-yoga-500 mt-2">— Camille Cussaguet</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biography;
