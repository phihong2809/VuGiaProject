import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import TourDetail from "./pages/TourDetail.tsx";
import CruiseList from "./pages/CruiseList.tsx";
import CruiseDetail from "./pages/CruiseDetail.tsx";
import HotelList from "./pages/HotelList.tsx";
import HotelDetail from "./pages/HotelDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import PaymentGuide from "./pages/PaymentGuide.tsx";
import CancellationPolicy from "./pages/CancellationPolicy.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/cruise" element={<CruiseList />} />
          <Route path="/cruise/:id" element={<CruiseDetail />} />
          <Route path="/hotel" element={<HotelList />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/payment-guide" element={<PaymentGuide />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;