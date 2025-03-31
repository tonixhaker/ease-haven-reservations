
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogIn, Menu, X } from "lucide-react";

// Mock auth state - will be replaced with real auth later
const useAuthMock = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ firstName: "John", lastName: "Doe" });

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, user, login, logout };
};

const Header = () => {
  const { isAuthenticated, user, logout } = useAuthMock();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-brand-blue">
            EaseHaven
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-brand-gray-600 hover:text-brand-blue transition-colors"
          >
            Home
          </Link>
          <Link
            to="/apartments"
            className="text-brand-gray-600 hover:text-brand-blue transition-colors"
          >
            Apartments
          </Link>
          <Link
            to="/about"
            className="text-brand-gray-600 hover:text-brand-blue transition-colors"
          >
            About Us
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:block">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white">
                    <User className="h-5 w-5" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-sm font-medium leading-none">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                </div>
                <DropdownMenuItem>
                  <Link to="/profile" className="flex w-full">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/bookings" className="flex w-full">
                    My Bookings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500 focus:text-red-500"
                  onClick={logout}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-brand-gray-600 hover:text-brand-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/apartments"
              className="block px-3 py-2 text-base font-medium text-brand-gray-600 hover:text-brand-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apartments
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-brand-gray-600 hover:text-brand-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-base font-medium text-brand-gray-600 hover:text-brand-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/bookings"
                  className="block px-3 py-2 text-base font-medium text-brand-gray-600 hover:text-brand-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Bookings
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 text-base font-medium text-red-500"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-brand-gray-600 hover:text-brand-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
