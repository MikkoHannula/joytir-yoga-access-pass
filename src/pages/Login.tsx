import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const translations = {
  en: {
    title: "Login",
    email: "Email",
    password: "Password",
    login: "Login",
    forgot: "Forgot password?",
    noAccount: "Don't have an account?",
    signup: "Sign up",
  },
  fr: {
    title: "Connexion",
    email: "E-mail",
    password: "Mot de passe",
    login: "Connexion",
    forgot: "Mot de passe oublié ?",
    noAccount: "Pas de compte ?",
    signup: "S'inscrire",
  },
};

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Hardcoded user for demo
    const validUsers = [
      { email: "m.p.hannula@gmail.com", password: "Mipeha" },
    ];
    const found = validUsers.find(
      (u) => u.email === values.email && u.password === values.password
    );

    setTimeout(() => {
      setIsLoading(false);
      if (found) {
        toast({
          title: "Login Successful",
          description: `Welcome, ${values.email}!`,
        });
        navigate("/booking");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          variant: "destructive",
        });
      }
    }, 1500);
  }

  return (
    <div className="py-12 md:py-20 bg-yoga-50">
      <div className="container">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-serif text-center text-emerald-400">
                {t.title}
              </CardTitle>
              <CardDescription className="text-center text-emerald-400">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.email}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email address"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.password}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Your password"
                              type={showPassword ? "text" : "password"}
                              {...field}
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                              tabIndex={-1}
                              onClick={() => setShowPassword((v) => !v)}
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }
                            >
                              {showPassword ? (
                                // Eye Off SVG
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3l18 18M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-5.12M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m0 0a3 3 0 003 3m0 0a3 3 0 003-3m0 0a3 3 0 00-3-3m0 0a3 3 0 00-3 3m0 0a3 3 0 003 3m0 0a3 3 0 003-3m0 0a3 3 0 00-3-3m0 0a3 3 0 00-3 3m0 0a3 3 0 003 3m0 0a3 3 0 003-3"
                                  />
                                </svg>
                              ) : (
                                // Eye SVG
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12C3.5 7.5 7.5 4.5 12 4.5c4.5 0 8.5 3 9.75 7.5-1.25 4.5-5.25 7.5-9.75 7.5-4.5 0-8.5-3-9.75-7.5z"
                                  />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-yoga-500 hover:bg-yoga-600"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : t.login}
                  </Button>
                </form>
              </Form>

              <div className="mt-4 text-center text-sm">
                <Link
                  to="#"
                  className="text-yoga-500 hover:underline"
                >
                  {t.forgot}
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                {t.noAccount}{" "}
                <Link
                  to="/access-request"
                  className="text-yoga-500 hover:underline"
                >
                  {t.signup}
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
