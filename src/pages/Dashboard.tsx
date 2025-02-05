
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
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
        <Link to="/">
          <Button variant="outline" className="mt-4">
            חזרה לדף הראשי
          </Button>
        </Link>
      </div>
    );
  }

  // Filter applications based on selected date, industry and status
  const filteredApplications = applications.filter((app) => {
    const dateMatch = selectedDate 
      ? new Date(app.created_at).toLocaleDateString("he-IL") === selectedDate
      : true;
    const industryMatch = selectedIndustry
      ? app.industry === selectedIndustry
      : true;
    const statusMatch = selectedStatus
      ? app.status === selectedStatus
      : true;
    return dateMatch && industryMatch && statusMatch;
  });

  // Aggregate industry data for filtered applications
  const industryData = filteredApplications.reduce((acc: any[], app) => {
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

  // Aggregate applications by date for filtered applications
  const applicationsByDate = filteredApplications.reduce((acc: { [key: string]: number }, app) => {
    const date = new Date(app.created_at).toLocaleDateString("he-IL");
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const timelineData = Object.entries(applicationsByDate).map(([date, count]) => ({
    date,
    count,
  }));

  // Get unique statuses for filtering
  const statuses = Array.from(new Set(applications.map(app => app.status))).filter(Boolean);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const handleBarClick = (data: any) => {
    setSelectedDate(selectedDate === data.date ? null : data.date);
  };

  const handlePieClick = (data: any) => {
    setSelectedIndustry(selectedIndustry === data.name ? null : data.name);
  };

  const clearFilters = () => {
    setSelectedDate(null);
    setSelectedIndustry(null);
    setSelectedStatus(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-8" dir="rtl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">דשבורד מועמדים</h1>
        <div className="flex gap-2">
          {(selectedDate || selectedIndustry || selectedStatus) && (
            <Button
              variant="outline"
              onClick={clearFilters}
            >
              נקה סינון
              {selectedDate && ` (תאריך: ${selectedDate})`}
              {selectedIndustry && ` (תעשייה: ${selectedIndustry})`}
              {selectedStatus && ` (סטטוס: ${selectedStatus})`}
            </Button>
          )}
          <Link to="/">
            <Button variant="outline">
              חזרה לדף הראשי
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-6 flex gap-2">
        {statuses.map((status) => (
          <Badge
            key={status}
            className={`cursor-pointer ${selectedStatus === status ? getStatusColor(status) : 'bg-gray-200'}`}
            onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
          >
            {status === 'pending' ? 'ממתין לטיפול' : 'טופל'}
          </Badge>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            התפלגות לפי תעשייה
            {selectedDate && ` (${selectedDate})`}
            {selectedStatus && ` (${selectedStatus === 'pending' ? 'ממתין לטיפול' : 'טופל'})`}
          </h2>
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
                  label={(entry) => `${entry.name} (${entry.value})`}
                  onClick={handlePieClick}
                  cursor="pointer"
                >
                  {industryData?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className={`hover:opacity-80 transition-opacity ${
                        selectedIndustry === entry.name ? 'opacity-100' : 'opacity-70'
                      }`}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            מספר הרשמות לאורך זמן
            {selectedIndustry && ` (${selectedIndustry})`}
            {selectedStatus && ` (${selectedStatus === 'pending' ? 'ממתין לטיפול' : 'טופל'})`}
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#8884d8"
                  onClick={handleBarClick}
                  cursor="pointer"
                  className={`hover:opacity-80 transition-opacity`}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
