import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Spinner */}
      <div className="w-14 h-14 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      
      {/* Text */}
      <p className="mt-4 text-gray-700 text-lg font-medium animate-pulse">
        Loading, please wait…
      </p>
    </div>
  );
};

export default Loader;
