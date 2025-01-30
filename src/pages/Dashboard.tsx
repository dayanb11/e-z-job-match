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
  const { data, error } = await supabase.from("applications").select("*");
  if (error) throw error;
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

  const industryData = applications?.reduce((acc: any[], app) => {
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

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

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
              <BarChart
                data={applications?.map((app) => ({
                  date: new Date(app.created_at).toLocaleDateString("he-IL"),
                  count: 1,
                }))}
              >
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