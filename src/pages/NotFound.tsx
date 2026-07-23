import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="mb-4 font-display text-5xl font-bold text-navy-deep">404</h1>
        <p className="mb-6 text-xl text-navy-mid">This page doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-sm bg-navy-deep px-8 py-4 text-sm font-bold text-off-white transition-colors hover:bg-navy-mid"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
