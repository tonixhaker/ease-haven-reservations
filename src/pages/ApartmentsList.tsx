
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import { mockApartments, Apartment } from "@/data/mockData";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ApartmentsList = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Fetch apartments
    setTimeout(() => {
      setApartments(mockApartments);
      setFilteredApartments(mockApartments);
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredApartments(apartments);
    } else {
      const filtered = apartments.filter((apartment) =>
        apartment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apartment.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apartment.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApartments(filtered);
    }
  }, [searchTerm, apartments]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect above
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-brand-gray-800">
            Our Apartments
          </h1>
          <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search apartments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
              Search
            </Button>
          </form>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-lg overflow-hidden bg-gray-200 h-80"
              ></div>
            ))}
          </div>
        ) : (
          <>
            {filteredApartments.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-brand-gray-600">
                  No apartments found matching your search.
                </h3>
                <p className="mt-2 text-brand-gray-500">
                  Try adjusting your search terms or browse all our listings.
                </p>
                <Button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 bg-brand-blue hover:bg-brand-blue/90"
                >
                  View All Apartments
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredApartments.map((apartment, index) => (
                  <div
                    key={apartment.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ApartmentCard apartment={apartment} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default ApartmentsList;
