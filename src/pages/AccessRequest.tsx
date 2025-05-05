
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

const AccessRequest = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        title: "Request Submitted",
        description: "Camille will review your request and contact you soon.",
      });
      
      navigate("/request-confirmation");
    }, 1500);
  }

  return (
    <div className="py-12 md:py-20 bg-yoga-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Request Access
            </h1>
            <p className="text-muted-foreground">
              Fill out the form below to request access to Joytir Yoga's exclusive sessions.
              Camille personally reviews all requests to ensure a good fit for her teaching style.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Membership Access Request</CardTitle>
              <CardDescription>
                All fields are required. You'll receive a response within 48 hours.
              </CardDescription>
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
                          <FormLabel>Full Name</FormLabel>
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
                          <FormLabel>Email Address</FormLabel>
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
                          <FormLabel>Phone Number</FormLabel>
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
                          <FormLabel>Yoga Experience</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">Select your experience level</option>
                              <option value="beginner">Beginner (0-1 years)</option>
                              <option value="intermediate">Intermediate (1-3 years)</option>
                              <option value="advanced">Advanced (3+ years)</option>
                              <option value="teacher">Yoga Teacher</option>
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
                        <FormLabel>Why do you want to join Joytir Yoga?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your yoga journey and what you hope to gain from Camille's classes..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          This helps Camille understand your goals and how she can best support your practice.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-yoga-500 hover:bg-yoga-600" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
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
