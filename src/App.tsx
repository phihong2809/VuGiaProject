import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index.tsx"));
const TourDetail = lazy(() => import("./pages/TourDetail.tsx"));
const CruiseList = lazy(() => import("./pages/CruiseList.tsx"));
const CruiseDetail = lazy(() => import("./pages/CruiseDetail.tsx"));
const HotelList = lazy(() => import("./pages/HotelList.tsx"));
const HotelDetail = lazy(() => import("./pages/HotelDetail.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.tsx"));
const PaymentGuide = lazy(() => import("./pages/PaymentGuide.tsx"));
const CancellationPolicy = lazy(() => import("./pages/CancellationPolicy.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center text-sm text-muted-foreground">
              Đang tải nội dung...
            </div>
          }
        >
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;