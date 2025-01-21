import { ApplicationForm } from "@/components/ApplicationForm/ApplicationForm";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div dir="rtl">
      <div className="flex justify-between items-center p-4">
        <a 
          href="https://lovable.dev/projects/265f89ac-e251-4861-b56b-aed6342b630a"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <img 
            src="/lovable-uploads/d7f2a238-1d01-4215-ad5d-0c4b3b96b1e1.png" 
            alt="JOBmatch Logo" 
            className="h-12 w-auto cursor-pointer"
          />
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            https://lovable.dev/projects/265f89ac-e251-4861-b56b-aed6342b630a
          </span>
        </a>
        <Link 
          to="/about"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          דף הסבר
        </Link>
      </div>
      <ApplicationForm />
    </div>
  );
};

export default Index;