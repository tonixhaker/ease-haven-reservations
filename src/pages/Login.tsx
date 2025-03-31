
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type UserRole = "client" | "admin" | "owner";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("client");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      // Validate form
      if (!email || !password) {
        toast.error("Please fill in all fields");
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return;
      }
      
      // Success
      toast.success("Login successful!");
      
      // Redirect based on role
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "owner") {
        navigate("/owner/dashboard");
      } else {
        navigate(from);
      }
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    
    // Simulate Google login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Google login successful!");
      
      // Redirect based on role
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "owner") {
        navigate("/owner/dashboard");
      } else {
        navigate(from);
      }
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
            Login to your account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">Select Panel</Label>
              <Select
                value={role}
                onValueChange={(value) => setRole(value as UserRole)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select panel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="client">Client</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="owner">Owner</SelectItem>
                </SelectContent>
              </Select>
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-brand-blue hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-brand-blue hover:bg-brand-blue/90"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
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
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-brand-blue hover:underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
