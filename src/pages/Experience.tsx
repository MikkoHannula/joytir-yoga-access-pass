import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Experience = () => {
  const experience = [
    {
      position: "Founder & Lead Instructor",
      organization: "Joytir Yoga",
      location: "Paris, France",
      period: "2013 - Present",
      description: "Founded and manage Joytir Yoga, offering private and group classes, workshops, and retreats focused on holistic wellbeing through yoga."
    },
    {
      position: "Senior Yoga Instructor",
      organization: "Wellness Retreat Center",
      location: "Provence, France",
      period: "2015 - Present",
      description: "Lead seasonal yoga retreats combining yoga practice with mindfulness and nature immersion."
    },
    {
      position: "Guest Instructor",
      organization: "Various International Yoga Festivals",
      location: "Europe & Asia",
      period: "2014 - Present",
      description: "Regular presenter at international yoga conferences and festivals, teaching workshops and masterclasses."
    },
    {
      position: "Corporate Wellness Consultant",
      organization: "Various Corporate Clients",
      location: "Paris, France",
      period: "2016 - Present",
      description: "Develop and implement yoga and mindfulness programs for corporate clients to improve employee wellbeing and productivity."
    },
    {
      position: "Yoga Instructor",
      organization: "Serenity Yoga Studio",
      location: "Lyon, France",
      period: "2010 - 2013",
      description: "Taught multiple weekly classes in Hatha, Vinyasa, and restorative yoga for all levels."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-yoga-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-emerald-400">
              Experience & Certifications
            </h1>
            <p className="text-lg text-muted-foreground">
              A journey of continuous learning and growth in yoga
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center text-emerald-400">
              Certifications & Training
            </h2>
            <div className="space-y-6">
              {/* Mysore, India Yoga Training */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="bg-yoga-100 p-6 flex flex-col justify-center">
                      <div className="text-yoga-500 font-medium">2017</div>
                      <div className="text-sm text-muted-foreground">Mysore, India</div>
                    </div>
                    <div className="p-6 md:col-span-3">
                      <h3 className="font-serif font-medium text-xl mb-1">500h Hatha Yoga Teacher Training</h3>
                      <div className="text-yoga-500 mb-2">IndeaYoga</div>
                      <p className="text-muted-foreground">Completed an intensive 500-hour Hatha Yoga teacher training at the birthplace of yoga, deepening both personal practice and teaching skills.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Les Mills BodyBalance Certification */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="bg-yoga-100 p-6 flex flex-col justify-center">
                      <div className="text-yoga-500 font-medium">2018</div>
                      <div className="text-sm text-muted-foreground">Finland</div>
                    </div>
                    <div className="p-6 md:col-span-3">
                      <h3 className="font-serif font-medium text-xl mb-1">BodyBalance Instructor Certification</h3>
                      <div className="text-yoga-500 mb-2">Les Mills</div>
                      <p className="text-muted-foreground">Certified to teach Les Mills BodyBalance.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 yoga-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center text-emerald-400">
              Professional Experience
            </h2>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-16 md:left-20 w-px bg-yoga-300" />
              <div className="space-y-12">
                {/* Mysore, India Yoga Training */}
                <div className="relative">
                  <div className="absolute left-16 md:left-20 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yoga-300 z-10" />
                  <div className="pl-24 md:pl-32">
                    <h3 className="font-serif font-medium text-xl mb-1">500h Hatha Yoga Teacher Training</h3>
                    <div className="flex flex-wrap gap-x-2 mb-2">
                      <span className="text-yoga-700">IndeaYoga</span>
                      <span className="text-yoga-500">•</span>
                      <span className="text-yoga-700">Mysore, India</span>
                    </div>
                    <div className="text-yoga-900 font-medium mb-3">2017</div>
                    <p className="text-yoga-800">Completed an intensive 500-hour Hatha Yoga teacher training at the birthplace of yoga, deepening both personal practice and teaching skills.</p>
                  </div>
                </div>
                {/* Teaching in Hostels, New Zealand */}
                <div className="relative">
                  <div className="absolute left-16 md:left-20 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yoga-300 z-10" />
                  <div className="pl-24 md:pl-32">
                    <h3 className="font-serif font-medium text-xl mb-1">Yoga Instructor</h3>
                    <div className="flex flex-wrap gap-x-2 mb-2">
                      <span className="text-yoga-700">Various Hostels</span>
                      <span className="text-yoga-500">•</span>
                      <span className="text-yoga-700">New Zealand</span>
                    </div>
                    <div className="text-yoga-900 font-medium mb-3">2017–2018</div>
                    <p className="text-yoga-800">Taught yoga classes to international travelers in hostels, sharing yoga with a diverse and global community.</p>
                  </div>
                </div>
                {/* Fitness 24/7 Tikkurila & BodyBalance */}
                <div className="relative">
                  <div className="absolute left-16 md:left-20 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yoga-300 z-10" />
                  <div className="pl-24 md:pl-32">
                    <h3 className="font-serif font-medium text-xl mb-1">Yoga Instructor & BodyBalance Certified</h3>
                    <div className="flex flex-wrap gap-x-2 mb-2">
                      <span className="text-yoga-700">Fitness 24/7</span>
                      <span className="text-yoga-500">•</span>
                      <span className="text-yoga-700">Tikkurila, Finland</span>
                    </div>
                    <div className="text-yoga-900 font-medium mb-3">2018–2019</div>
                    <p className="text-yoga-800">Taught regular yoga classes and completed Les Mills BodyBalance certification.</p>
                  </div>
                </div>
                {/* Roissy CDG, France, ASAF */}
                <div className="relative">
                  <div className="absolute left-16 md:left-20 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yoga-300 z-10" />
                  <div className="pl-24 md:pl-32">
                    <h3 className="font-serif font-medium text-xl mb-1">Yoga Instructor</h3>
                    <div className="flex flex-wrap gap-x-2 mb-2">
                      <span className="text-yoga-700">ASAF</span>
                      <span className="text-yoga-500">•</span>
                      <span className="text-yoga-700">Roissy CDG, France</span>
                    </div>
                    <div className="text-yoga-900 font-medium mb-3">2019–2022</div>
                    <p className="text-yoga-800">Led yoga classes for airport staff and local community, fostering well-being in a dynamic environment.</p>
                  </div>
                </div>
                {/* Roissy CDG, CSEEI Air France */}
                <div className="relative">
                  <div className="absolute left-16 md:left-20 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yoga-300 z-10" />
                  <div className="pl-24 md:pl-32">
                    <h3 className="font-serif font-medium text-xl mb-1">Yoga Instructor</h3>
                    <div className="flex flex-wrap gap-x-2 mb-2">
                      <span className="text-yoga-700">CSEEI Air France</span>
                      <span className="text-yoga-500">•</span>
                      <span className="text-yoga-700">Roissy CDG, France</span>
                    </div>
                    <div className="text-yoga-900 font-medium mb-3">2022–Present</div>
                    <p className="text-yoga-800">Currently teaching yoga to Air France employees, supporting workplace wellness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center text-emerald-400">
              Teaching Speciality
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div />
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif font-medium text-xl mb-3">Yoga Styles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Hatha Yoga</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Vinyasa Flow</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div />
            </div>
          </div>
        </div>
      </section>

      {/* My Hatha Yoga Approach Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">My Approach to Hatha Yoga</h2>
          <p className="text-muted-foreground mb-4">
            I believe in a yoga that is accessible, grounded, and fully embodied. My approach begins with the physical practice: through movement, breath, and body awareness, we gradually open the door to more subtle layers—emotional or spiritual—without ever rushing the process.
            Each session is an invitation to slow down, ground yourself, reconnect with your sensations, and create space—both in the body and in the mind. I place special attention on breath, alignment, and the quality of awareness in each posture. The intention: to cultivate grounding, clarity, and lasting well-being—on the mat and beyond.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      {/*
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              Get in Touch
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-center text-muted-foreground mb-4">
                I would love to hear from you! Whether you have a question, comment, or just want to connect, feel free to reach out.
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-yoga-500">Phone:</span> 0671231067
                </div>
                <div>
                  <span className="font-medium text-yoga-500">Email:</span> camille.cussaguet@gmail.com
                </div>
              </div>
              <div className="flex justify-center">
                <a href="mailto:camille.cussaguet@gmail.com" className="px-4 py-2 bg-yoga-500 text-white rounded-md shadow-md hover:bg-yoga-600 transition-colors">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default Experience;
