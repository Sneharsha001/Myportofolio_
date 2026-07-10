import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="glass p-8 rounded-2xl">
          <h1 className="mb-4 text-6xl font-orbitron font-bold text-neon-blue">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
          <p className="mb-8 text-muted-foreground">
            The page you're looking for doesn't exist in this futuristic dimension.
          </p>
          <Button
            onClick={() => window.location.href = "/"}
            className="bg-gradient-primary hover:shadow-neon-blue transition-all duration-300"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
