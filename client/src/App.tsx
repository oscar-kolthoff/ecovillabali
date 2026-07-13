import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { ThemeProvider } from "./contexts/ThemeContext";

// Code-split every route into its own chunk so no page pays for JS it doesn't
// use (previously everything shipped in one ~190KB gzipped bundle on every
// route, including simple pages like /faq).
const Home = lazy(() => import("./pages/Home"));
const VillaSungai = lazy(() => import("./pages/VillaSungai"));
const VillaKailash = lazy(() => import("./pages/VillaKailash"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const LifestylePage = lazy(() => import("./pages/LifestylePage"));
const InquireNowPage = lazy(() => import("./pages/InquireNowPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const GreenSchoolVillaBaliPage = lazy(() => import("./pages/GreenSchoolVillaBaliPage"));

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/villa-sungai"} component={VillaSungai} />
        <Route path={"/villa-kailash"} component={VillaKailash} />
        <Route path={"/location"} component={LocationPage} />
        <Route path={"/lifestyle"} component={LifestylePage} />
        {/* /green-school duplicated the homepage's Green School section with no
            unique content; redirect to the deeper, unique /green-school-villa-bali
            page. The server issues a real 301 for direct/crawler requests
            (server/_core/index.ts); this covers any client-side navigation too. */}
        <Route path={"/green-school"}>
          <Redirect to="/green-school-villa-bali" />
        </Route>
        <Route path={"/inquire-now"} component={InquireNowPage} />
        <Route path={"/faq"} component={FAQPage} />
        <Route path={"/green-school-villa-bali"} component={GreenSchoolVillaBaliPage} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <FloatingWhatsApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
