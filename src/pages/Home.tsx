
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import Layout from "@/components/layout/Layout";
import { getRandomApartments, Apartment } from "@/data/mockData";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const [popularApartments, setPopularApartments] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Fetch random apartments
    setTimeout(() => {
      const apartments = getRandomApartments(3);
      setPopularApartments(apartments);
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Find Your Perfect Home Away From Home
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                Discover beautiful apartments and vacation rentals in top destinations worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-blue hover:bg-white/90"
                >
                  <Link to="/apartments">Browse Apartments</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern apartment interior"
                    className="rounded-lg shadow-lg transform translate-y-8 animate-fade-in"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop"
                    alt="City view apartment"
                    className="rounded-lg shadow-lg animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury villa with pool"
                    className="rounded-lg shadow-lg h-full object-cover animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-gray-800">
              About EaseHaven
            </h2>
            <p className="text-brand-gray-600">
              EaseHaven is dedicated to providing exceptional rental experiences worldwide. 
              Our curated selection of properties combines comfort, convenience, and style 
              to ensure your stay exceeds expectations. Whether you're traveling for business, 
              pleasure, or seeking a longer-term residence, we offer accommodations to suit 
              every need and budget.
            </p>
            <p className="mt-4 text-brand-gray-600">
              Our team personally verifies each property to maintain the highest standards of 
              quality and authenticity. We believe in transparent pricing, detailed listings, 
              and responsive customer service to make your booking process seamless. With 
              EaseHaven, finding your next home away from home is just a few clicks away.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-gray-800">Verified Properties</h3>
              <p className="text-brand-gray-600">
                Every listing is thoroughly verified to ensure quality, accuracy, and safety.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-gray-800">24/7 Support</h3>
              <p className="text-brand-gray-600">
                Our customer support team is available around the clock to assist with any inquiries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-gray-800">Secure Payments</h3>
              <p className="text-brand-gray-600">
                All transactions are protected with bank-level security and encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Apartments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-brand-gray-800">
              Popular Apartments
            </h2>
            <Button
              asChild
              variant="ghost"
              className="text-brand-blue hover:text-brand-blue/90"
            >
              <Link to="/apartments" className="flex items-center">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-lg overflow-hidden bg-gray-200 h-80"
                ></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularApartments.map((apartment, index) => (
                <div
                  key={apartment.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <ApartmentCard apartment={apartment} />
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90"
            >
              <Link to="/apartments">Show More Apartments</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
