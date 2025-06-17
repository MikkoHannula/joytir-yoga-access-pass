// AccessRequest.tsx
// -------------------
// Page for users to request access to exclusive classes.
// - Form labels, validation, and messages bilingual.
//
//
// For navigation, see Header.tsx.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(5, {
    message: "Please enter a valid phone number.",
  }),
  experience: z.string().min(1, {
    message: "Please select your yoga experience level.",
  }),
  reason: z.string().min(10, {
    message: "Please tell us a bit about why you want to join.",
  }),
});

const translations = {
  en: {
    title: "Request Access",
    subtitle:
      "Fill out the form below to request access to exclusive classes.",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    experience: "Yoga Experience",
    reason: "Why do you want to practice yoga?",
    submit: "Submit Request",
    success:
      "Your request has been sent! Camille will review it and respond soon.",
    description:
      "All fields are required. You'll receive a response within 48 hours.",
  },
  fr: {
    title: "Demander l'accès",
    subtitle:
      "Remplissez le formulaire ci-dessous pour demander l'accès aux cours exclusifs.",
    name: "Nom",
    email: "E-mail",
    phone: "Numéro de téléphone",
    experience: "Expérience en yoga",
    reason: "Pourquoi voulez-vous pratiquer le yoga ?",
    submit: "Envoyer la demande",
    success:
      "Votre demande a été envoyée ! Camille l'examinera et vous répondra bientôt.",
    description:
      "Tous les champs sont obligatoires. Vous recevrez une réponse dans les 48 heures.",
  },
};

const AccessRequest = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: "",
      reason: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);

      toast({
        title: t.success,
        description:
          "Camille will review your request and contact you soon.",
      });

      navigate("/request-confirmation");
    }, 1500);
  }

  return (
    <div className="py-12 md:py-20 bg-yoga-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-emerald-400">
              {t.title}
            </h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-serif font-medium text-emerald-400">
                {t.title}
              </CardTitle>
              <CardDescription>{t.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.name}</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.email}</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.phone}</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.experience}</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">
                                {t.experience}{" "}
                                {language === "fr"
                                  ? "(Débutant, Intermédiaire, Avancé, Professeur)"
                                  : "(Beginner, Intermediate, Advanced, Teacher)"}
                              </option>
                              <option value="beginner">
                                {language === "fr"
                                  ? "Débutant (0-1 an)"
                                  : "Beginner (0-1 years)"}
                              </option>
                              <option value="intermediate">
                                {language === "fr"
                                  ? "Intermédiaire (1-3 ans)"
                                  : "Intermediate (1-3 years)"}
                              </option>
                              <option value="advanced">
                                {language === "fr"
                                  ? "Avancé (3+ ans)"
                                  : "Advanced (3+ years)"}
                              </option>
                              <option value="teacher">
                                {language === "fr"
                                  ? "Professeur de yoga"
                                  : "Yoga Teacher"}
                              </option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.reason}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your yoga journey and what you hope to gain from Camille's classes..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          {language === "fr"
                            ? "Cela aide Camille à comprendre vos objectifs et comment elle peut mieux soutenir votre pratique."
                            : "This helps Camille understand your goals and how she can best support your practice."}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-yoga-500 hover:bg-yoga-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : t.submit}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-muted-foreground">
              Your information will be kept private and only used to communicate about Joytir Yoga.
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccessRequest;
