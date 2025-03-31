
import { Link } from "react-router-dom";
import { Apartment } from "@/data/mockData";

interface ApartmentCardProps {
  apartment: Apartment;
  className?: string;
}

const ApartmentCard = ({ apartment, className }: ApartmentCardProps) => {
  return (
    <Link to={`/apartments/${apartment.id}`} className={`block ${className}`}>
      <div className="apartment-card group h-full">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={apartment.images[0]}
            alt={apartment.title}
            className="apartment-card-img"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm font-medium">View Details</p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold text-brand-gray-800">
            {apartment.title}
          </h3>
          <p className="mb-2 text-sm text-brand-gray-500">
            {apartment.location}
          </p>
          <p className="mb-3 text-sm text-brand-gray-600 line-clamp-2">
            {apartment.shortDescription}
          </p>
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-lg font-bold text-brand-blue">
                ${apartment.pricePerDay}
              </span>
              <span className="text-sm text-brand-gray-500"> / night</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-4 w-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-1 text-sm text-brand-gray-600">
                {apartment.rating} ({apartment.reviewCount})
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
