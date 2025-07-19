import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardHome = ({ darkMode }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/Dashboard/overview`);
        const data = response.data;
        setStats([
          {
            title: "Total Urgent Cases",
            count: data.totalUrgentCases,
            color: "bg-red-100 text-red-700",
          },
          {
            title: "Donations Received",
            count: `Rs ${data.donationsReceived}`,
            color: "bg-teal-100 text-teal-700",
          },
          {
            title: "Registered Donors",
            count: data.registeredDonors,
            color: "bg-slate-100 text-slate-700",
          },
            {
            title: "Registered Volunteers",
            count: data.registeredVolunteers,
            color: "bg-slate-100 text-slate-700",
          },
            {
            title: "Registered Partners",
            count: data.registeredPartners,
            color: "bg-slate-100 text-slate-700",
          },
        ]);
      } catch (error) {
        console.error("❌ Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, [apiUrl]);

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      <h1 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
        Dashboard Overview
      </h1>

      {loading ? (
        <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>Loading stats...</p>
      ) : stats ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-sm ${stat.color}`}>
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-2xl font-bold mt-2">{stat.count}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500">Failed to load dashboard data.</p>
      )}
    </div>
  );
};

export default DashboardHome;
