import { ApplicationForm } from "@/components/ApplicationForm/ApplicationForm";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div dir="rtl">
      <div className="flex justify-end p-4">
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