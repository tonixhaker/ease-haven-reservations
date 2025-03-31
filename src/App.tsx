
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ApartmentsList from "./pages/ApartmentsList";
import ApartmentDetail from "./pages/ApartmentDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientsPage from "./pages/admin/ClientsPage";
import ApartmentsPage from "./pages/admin/ApartmentsPage";
import ApartmentBookingsPage from "./pages/admin/ApartmentBookingsPage";
import OwnerApartmentsPage from "./pages/owner/OwnerApartmentsPage";
import OwnerApartmentBookingsPage from "./pages/owner/OwnerApartmentBookingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Client routes */}
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<ApartmentsList />} />
          <Route path="/apartments/:id" element={<ApartmentDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin routes */}
          <Route path="/admin/clients" element={<ClientsPage />} />
          <Route path="/admin/apartments" element={<ApartmentsPage />} />
          <Route path="/admin/apartments/:id/bookings" element={<ApartmentBookingsPage />} />
          
          {/* Owner routes */}
          <Route path="/owner/apartments" element={<OwnerApartmentsPage />} />
          <Route path="/owner/apartments/:id/bookings" element={<OwnerApartmentBookingsPage />} />
          
          {/* Not found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
