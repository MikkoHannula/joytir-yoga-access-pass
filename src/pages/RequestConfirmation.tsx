
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const RequestConfirmation = () => {
  return (
    <div className="py-20 bg-yoga-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-yoga-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-yoga-500" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Request Submitted Successfully
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for your interest in joining Joytir Yoga! Camille will personally review your request and get back to you within 48 hours.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-medium mb-3">What happens next?</h2>
            <ol className="text-left space-y-3">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yoga-100 text-yoga-500 flex-shrink-0 flex items-center justify-center font-medium">1</div>
                <p>Camille will review your application and consider how your goals align with her teaching approach.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yoga-100 text-yoga-500 flex-shrink-0 flex items-center justify-center font-medium">2</div>
                <p>You'll receive an email with her decision. If approved, the email will include a link to create your account.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-yoga-100 text-yoga-500 flex-shrink-0 flex items-center justify-center font-medium">3</div>
                <p>Once your account is created, you'll be able to book classes and access exclusive content.</p>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button variant="outline" className="border-yoga-300 text-yoga-500 hover:bg-yoga-100">
                Return to Home
              </Button>
            </Link>
            <Link to="/biography">
              <Button className="bg-yoga-500 hover:bg-yoga-600">
                Learn More About Camille
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestConfirmation;
