
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import AboutDestination from "./pages/AboutDestination";
import CitiesAndVenues from "./pages/CitiesAndVenues";
import FastFacts from "./pages/FastFacts";
import KeyAttractions from "./pages/KeyAttractions";
import PlanYourEvent from "./pages/PlanYourEvent";
import Calendar from "./pages/Calendar";
import EventDetail from "./pages/EventDetail";
import Media from "./pages/Media";
import MediaEnquiries from "./pages/MediaEnquiries";
import PressRoom from "./pages/PressRoom";
import Publications from "./pages/Publications";
import PressReleases from "./pages/PressReleases";
import Careers from "./pages/Careers";
import Tenders from "./pages/Tenders";
import Newsletter from "./pages/Newsletter";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-destination" element={<AboutDestination />} />
          <Route path="/cities-venues" element={<CitiesAndVenues />} />
          <Route path="/fast-facts" element={<FastFacts />} />
          <Route path="/key-attractions" element={<KeyAttractions />} />
          <Route path="/plan-your-event" element={<PlanYourEvent />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media-enquiries" element={<MediaEnquiries />} />
          <Route path="/press-room" element={<PressRoom />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/press-releases" element={<PressReleases />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
