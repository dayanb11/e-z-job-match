import { ApplicationForm } from "@/components/ApplicationForm/ApplicationForm";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div dir="rtl">
      <div className="flex justify-between items-center p-4">
        <Link 
          to="/about"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          דף הסבר
        </Link>
        <img 
          src="/lovable-uploads/d7f2a238-1d01-4215-ad5d-0c4b3b96b1e1.png" 
          alt="JOBmatch Logo" 
          className="h-12 w-auto"
        />
      </div>
      <ApplicationForm />
    </div>
  );
};

export default Index;