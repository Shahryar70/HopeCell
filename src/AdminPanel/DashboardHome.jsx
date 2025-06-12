import React from 'react';

const DashboardHome = ({ darkMode }) => {
  const stats = [
    { title: "Total Urgent Cases", count: 12, color: "bg-red-100 text-red-700" },
    { title: "Donations Received", count: "Rs 500,000", color: "bg-teal-100 text-teal-700" },
    { title: "Registered Donors", count: 85, color: "bg-slate-100 text-slate-700" },
  ];

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      <h1 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-xl shadow-sm ${stat.color}`}>
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2">{stat.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
