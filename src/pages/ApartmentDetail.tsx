
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Bed, Bath, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getApartmentById, Apartment } from "@/data/mockData";
import ApartmentCarousel from "@/components/apartments/ApartmentCarousel";
import BookingModal from "@/components/apartments/BookingModal";
import Layout from "@/components/layout/Layout";

const ApartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // Mock auth state - will be replaced with real auth later
  const [isAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/apartments");
      return;
    }

    // Simulate loading
    setIsLoading(true);
    
    // Fetch apartment details
    setTimeout(() => {
      const apartmentData = getApartmentById(id);
      if (apartmentData) {
        setApartment(apartmentData);
      } else {
        navigate("/apartments");
      }
      setIsLoading(false);
    }, 800);
  }, [id, navigate]);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-[300px] md:h-[500px] w-full bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="h-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!apartment) {
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <ApartmentCarousel images={apartment.images} title={apartment.title} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Apartment Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2 text-brand-gray-800">
              {apartment.title}
            </h1>
            <p className="text-lg text-brand-gray-600 mb-4">
              {apartment.location}
            </p>

            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center">
                <Bed className="h-5 w-5 text-brand-blue mr-2" />
                <span className="text-brand-gray-600">
                  {apartment.bedrooms} Bedroom{apartment.bedrooms > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 text-brand-blue mr-2" />
                <span className="text-brand-gray-600">
                  {apartment.bathrooms} Bathroom{apartment.bathrooms > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-brand-blue mr-2" />
                <span className="text-brand-gray-600">
                  {apartment.maxGuests} Guest{apartment.maxGuests > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-yellow-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="text-brand-gray-600">
                  {apartment.rating} ({apartment.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-brand-gray-800">
                Description
              </h2>
              <p className="text-brand-gray-600 whitespace-pre-line">
                {apartment.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-brand-gray-800">
                Amenities
              </h2>
              <div className="flex flex-wrap gap-2">
                {apartment.amenities.map((amenity, index) => (
                  <Badge key={index} variant="outline" className="text-brand-gray-600">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-brand-gray-800">
                Availability
              </h2>
              <div className="flex items-center border border-brand-gray-200 rounded-lg p-4 bg-brand-gray-50">
                <CalendarIcon className="h-6 w-6 text-brand-blue mr-4" />
                <div>
                  <p className="text-brand-gray-800 font-medium">
                    Check availability
                  </p>
                  <p className="text-brand-gray-600 text-sm">
                    This property is generally available. Book now to secure your dates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-brand-gray-200 p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-brand-gray-800">
                Pricing
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-brand-gray-100">
                  <span className="text-brand-gray-600">Per day</span>
                  <span className="font-bold text-brand-blue">${apartment.pricePerDay}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-brand-gray-100">
                  <span className="text-brand-gray-600">Per week</span>
                  <span className="font-bold text-brand-blue">${apartment.pricePerWeek}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray-600">Per month</span>
                  <span className="font-bold text-brand-blue">${apartment.pricePerMonth}</span>
                </div>
              </div>

              <Button
                onClick={handleBookNow}
                className="w-full bg-brand-blue hover:bg-brand-blue/90 mb-4"
                size="lg"
              >
                Book Now
              </Button>

              <p className="text-center text-sm text-brand-gray-500">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        apartment={apartment}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        isAuthenticated={isAuthenticated}
      />
    </Layout>
  );
};

export default ApartmentDetail;
