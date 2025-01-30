import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "@/components/ui/card";

const fetchApplicationsData = async () => {
  console.log('Fetching applications data...');
  const { data, error } = await supabase.from("applications").select("*");
  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  console.log('Fetched data:', data);
  return data;
};

const Dashboard = () => {
  const { data: applications, isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: fetchApplicationsData,
  });

  if (isLoading) {
    return <div className="p-8 text-center">טוען נתונים...</div>;
  }

  if (!applications || applications.length === 0) {
    return (
      <div className="p-8 text-center" dir="rtl">
        <h1 className="text-3xl font-bold mb-4">דשבורד מועמדים</h1>
        <p className="text-gray-600">לא נמצאו נתונים להצגה</p>
      </div>
    );
  }

  // Aggregate industry data
  const industryData = applications.reduce((acc: any[], app) => {
    if (app.industry) {
      const existingIndustry = acc.find((item) => item.name === app.industry);
      if (existingIndustry) {
        existingIndustry.value++;
      } else {
        acc.push({ name: app.industry, value: 1 });
      }
    }
    return acc;
  }, []);

  // Aggregate applications by date
  const applicationsByDate = applications.reduce((acc: { [key: string]: number }, app) => {
    const date = new Date(app.created_at).toLocaleDateString("he-IL");
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const timelineData = Object.entries(applicationsByDate).map(([date, count]) => ({
    date,
    count,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  console.log('Applications data:', applications);
  console.log('Industry data:', industryData);
  console.log('Timeline data:', timelineData);

  return (
    <div className="p-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-center">דשבורד מועמדים</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">התפלגות לפי תעשייה</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={industryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={(entry) => entry.name}
                >
                  {industryData?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">מספר הרשמות לאורך זמן</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;