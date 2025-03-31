
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-brand-gray-800">EaseHaven</h3>
            <p className="text-brand-gray-500 text-sm">
              Your trusted platform for finding and booking the perfect accommodation for your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gray-800 mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-brand-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apartments" className="text-brand-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-gray-500 hover:text-brand-blue text-sm transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gray-800 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-brand-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-brand-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-brand-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gray-800 mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-brand-gray-500 text-sm">
                Email: info@easehaven.com
              </li>
              <li className="text-brand-gray-500 text-sm">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-brand-gray-500 text-sm">
                Address: 123 Rental St, Apartment City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-brand-gray-500 text-sm">
            © {new Date().getFullYear()} EaseHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
