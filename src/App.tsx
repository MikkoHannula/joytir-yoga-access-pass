// App.tsx
// -------------------
// Main application entry point. Sets up routing and global providers.
// - Wraps the app in LanguageProvider for bilingual support.
// - Defines all main routes for the site.
// - To add or remove pages, update the <Routes> section.
//
// For layout and navigation, see Header.tsx and Footer.tsx.

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Experience from "./pages/Experience";
import Booking from "./pages/Booking";
import VirtualClasses from "./pages/VirtualClasses";
import AccessRequest from "./pages/AccessRequest";
import RequestConfirmation from "./pages/RequestConfirmation";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/virtual-classes" element={<VirtualClasses />} />
              <Route path="/access-request" element={<AccessRequest />} />
              <Route path="/request-confirmation" element={<RequestConfirmation />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
