// VirtualClasses.tsx
// -------------------
// Virtual yoga classes page (currently disabled in navigation).
// - All visible text and class data is bilingual and switches with the press of a button.
//
// To re-enable, uncomment the export and navigation links in index.ts, Header.tsx, and Footer.tsx.
//
// For navigation, see Header.tsx.

import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Lock, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface ClassVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  isFree: boolean;
}

const classVideos: ClassVideo[] = [
  {
    id: "free-class-1",
    title: "Morning Flow - Energize Your Day",
    duration: "28 min",
    thumbnail: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1470&auto=format&fit=crop",
    level: "Beginner",
    isFree: true
  },
  {
    id: "premium-class-1",
    title: "Deep Stretching for Flexibility",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?q=80&w=1470&auto=format&fit=crop",
    level: "Intermediate",
    isFree: false
  },
  {
    id: "premium-class-2",
    title: "Mindful Yoga for Stress Relief",
    duration: "32 min",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop",
    level: "Beginner",
    isFree: false
  },
  {
    id: "premium-class-3",
    title: "Power Yoga Flow",
    duration: "52 min",
    thumbnail: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1470&auto=format&fit=crop",
    level: "Advanced",
    isFree: false
  },
  {
    id: "premium-class-4",
    title: "Gentle Evening Wind Down",
    duration: "25 min",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1422&auto=format&fit=crop",
    level: "Beginner",
    isFree: false
  },
  {
    id: "premium-class-5",
    title: "Core Strength & Balance",
    duration: "38 min",
    thumbnail: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1470&auto=format&fit=crop",
    level: "Intermediate",
    isFree: false
  }
];

const translations = {
  en: {
    title: "Virtual Classes",
    subtitle: "Explore Camille's virtual yoga classes. Start with our free class, and request access to unlock the full library of premium content.",
    featured: "Featured Free Class",
    premium: "Premium Classes",
    preview: "Preview",
    watchNow: "Watch Now",
    requestAccess: "Request Access",
    accessRequired: "Access Required",
    accessRequiredDesc: "You need to request access to view this premium class."
  },
  fr: {
    title: "Cours virtuels",
    subtitle: "Découvrez les cours de yoga virtuels de Camille. Commencez par notre cours gratuit, puis demandez l'accès pour débloquer toute la bibliothèque de contenus premium.",
    featured: "Cours gratuit à la une",
    premium: "Cours premium",
    preview: "Aperçu",
    watchNow: "Regarder maintenant",
    requestAccess: "Demander l'accès",
    accessRequired: "Accès requis",
    accessRequiredDesc: "Vous devez demander l'accès pour voir ce cours premium."
  }
};

const VirtualClasses = () => {
  const { toast } = useToast();
  const [selectedVideo, setSelectedVideo] = useState<ClassVideo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const handlePlayVideo = (video: ClassVideo) => {
    if (video.isFree) {
      setSelectedVideo(video);
      setIsDialogOpen(true);
    } else {
      toast({
        title: t.accessRequired,
        description: t.accessRequiredDesc,
        variant: "default",
      });
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-emerald-400">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Featured Free Class */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">{t.featured}</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {classVideos.filter(video => video.isFree).map(video => (
              <div key={video.id} className="md:flex">
                <div className="md:w-2/3 relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/3">
                  <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold">
                    {video.level} • {video.duration}
                  </div>
                  <h3 className="mt-2 text-xl font-medium">{video.title}</h3>
                  <p className="mt-3 text-muted-foreground">
                    Start your yoga journey with this free class from Camille. This 
                    gentle flow is perfect for beginners and helps establish a 
                    foundation for your practice.
                  </p>
                  <Button 
                    className="mt-4 bg-purple-600 hover:bg-purple-700"
                    onClick={() => handlePlayVideo(video)}
                  >
                    <Play className="mr-2 h-4 w-4" /> {t.watchNow}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Dummy Premium Classes  */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif">{t.premium}</h2>
            <Link to="/access-request">
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                <Lock className="mr-2 h-4 w-4" /> {t.requestAccess}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classVideos.filter(video => !video.isFree).map(video => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative">
                  <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center z-10">
                    <Lock className="h-10 w-10 text-white opacity-80" />
                  </div>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {video.level}
                    </span>
                    <span className="text-sm text-muted-foreground">{video.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full text-purple-600 hover:bg-purple-50 hover:text-purple-700" onClick={() => handlePlayVideo(video)}>
                    <Eye className="mr-2 h-4 w-4" /> {t.preview}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          {selectedVideo && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedVideo.title}</DialogTitle>
                <DialogDescription>
                  {selectedVideo.level} • {selectedVideo.duration}
                </DialogDescription>
              </DialogHeader>
              
              <div className="aspect-video bg-black rounded-md flex items-center justify-center">
                {/* When making the final version, replace with a video player */}
                <div className="text-center">
                  <Play className="h-16 w-16 text-white/70 mx-auto mb-4" />
                  <p className="text-white">Video player would be embedded here</p>
                </div>
              </div>
              
              <DialogFooter className="sm:justify-start">
                <Button variant="ghost" onClick={closeDialog}>Close</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VirtualClasses;
