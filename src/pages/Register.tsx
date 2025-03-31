
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

type RegistrationStep = "method" | "details";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<RegistrationStep>("method");
  const [isLoading, setIsLoading] = useState(false);
  
  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleGoogleRegister = () => {
    setIsLoading(true);
    
    // Simulate Google registration process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Registration successful!");
      navigate("/");
    }, 1000);
  };

  const handleEmailContinue = () => {
    setStep("details");
  };

  const handleEmailRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (!email || !password || !confirmPassword || !firstName || !lastName) {
      setIsLoading(false);
      toast.error("Please fill in all fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsLoading(false);
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Password validation
    if (password.length < 8) {
      setIsLoading(false);
      toast.error("Password must be at least 8 characters");
      return;
    }
    
    if (password !== confirmPassword) {
      setIsLoading(false);
      toast.error("Passwords do not match");
      return;
    }
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Registration successful!");
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Link to="/" className="text-2xl font-bold text-brand-blue">
              EaseHaven
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            {step === "method"
              ? "Choose how you want to register"
              : "Fill in your details to create an account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "method" ? (
            <div className="space-y-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoogleRegister}
                disabled={isLoading}
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4.81184C13.4692 4.81184 14.782 5.34239 15.7889 6.22706L19.3201 2.78683C17.3721 1.06612 14.8693 0 12 0C7.33182 0 3.3306 2.68298 1.29834 6.60423L5.3896 9.70552C6.35956 6.86268 8.94454 4.81184 12 4.81184Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.76 12.2274C23.76 11.4515 23.6909 10.6992 23.5636 9.9751H12V14.5165H18.6545C18.3273 16.0017 17.4655 17.2578 16.2327 18.0818L20.2218 21.0982C22.4891 19.0062 23.76 15.9274 23.76 12.2274Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.38885 14.2947C5.12885 13.5706 4.98067 12.7983 4.98067 12.0001C4.98067 11.2019 5.12885 10.4295 5.38885 9.70545L1.29759 6.60416C0.474031 8.22725 0 10.0616 0 12.0001C0 13.9387 0.474031 15.773 1.29759 17.3961L5.38885 14.2947Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 24C14.8693 24 17.3721 22.9731 19.3313 21.0974L15.3421 18.0809C14.3352 18.7986 13.0952 19.1883 12 19.1883C8.94454 19.1883 6.35956 17.1374 5.3896 14.2946L1.29834 17.3959C3.3306 21.3171 7.33182 24 12 24Z"
                    fill="#34A853"
                  />
                </svg>
                Sign up with Google
              </Button>
              
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or</span>
                </div>
              </div>
              
              <Button
                type="button"
                className="w-full bg-brand-blue hover:bg-brand-blue/90"
                onClick={handleEmailContinue}
              >
                Continue with Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleEmailRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("method")}
                  className="w-1/2"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-1/2 bg-brand-blue hover:bg-brand-blue/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Registering..." : "Register"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-brand-blue hover:underline">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
