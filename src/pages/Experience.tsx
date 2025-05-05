
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Experience = () => {
  const certifications = [
    {
      title: "RYT-500 Yoga Teacher Certification",
      organization: "Yoga Alliance",
      location: "Rishikesh, India",
      year: "2012",
      description: "Advanced 500-hour yoga teacher training covering Hatha, Vinyasa, philosophy, anatomy, and teaching methodology."
    },
    {
      title: "Yin Yoga Certification",
      organization: "Insight Yoga Institute",
      location: "Paris, France",
      year: "2014",
      description: "Specialized training in Yin Yoga techniques, meridian theory, and Chinese medicine principles."
    },
    {
      title: "Prenatal Yoga Certification",
      organization: "Birthlight",
      location: "London, UK",
      year: "2015",
      description: "Comprehensive training in safe and effective yoga practices for all stages of pregnancy."
    },
    {
      title: "Yoga Therapy Certification",
      organization: "International Association of Yoga Therapists",
      location: "California, USA",
      year: "2017",
      description: "Clinical application of yoga techniques for therapeutic purposes and specific health conditions."
    },
    {
      title: "Meditation Teacher Training",
      organization: "Mindfulness Center",
      location: "Berlin, Germany",
      year: "2019",
      description: "Advanced training in various meditation techniques and teaching methodologies."
    }
  ];

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
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4">
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
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              Certifications & Training
            </h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="bg-yoga-100 p-6 flex flex-col justify-center">
                        <div className="text-yoga-500 font-medium">{cert.year}</div>
                        <div className="text-sm text-muted-foreground">{cert.location}</div>
                      </div>
                      <div className="p-6 md:col-span-3">
                        <h3 className="font-serif font-medium text-xl mb-1">{cert.title}</h3>
                        <div className="text-yoga-500 mb-2">{cert.organization}</div>
                        <p className="text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 yoga-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              Professional Experience
            </h2>
            
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-16 md:left-20 w-px bg-yoga-300" />
              
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-16 md:left-20 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yoga-300 z-10" />
                    
                    <div className="pl-24 md:pl-32">
                      <h3 className="font-serif font-medium text-xl mb-1">{exp.position}</h3>
                      <div className="flex flex-wrap gap-x-2 mb-2">
                        <span className="text-yoga-700">{exp.organization}</span>
                        <span className="text-yoga-500">•</span>
                        <span className="text-yoga-700">{exp.location}</span>
                      </div>
                      <div className="text-yoga-900 font-medium mb-3">{exp.period}</div>
                      <p className="text-yoga-800">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">
              Teaching Specialties
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Yin Yoga</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Restorative Yoga</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Prenatal Yoga</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif font-medium text-xl mb-3">Special Focus Areas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Stress Reduction & Anxiety Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Back Pain & Posture Improvement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Meditation & Breathwork Techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Yoga Philosophy & Mindful Living</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yoga-300" />
                      <span>Yoga for Athletes & Active Individuals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
