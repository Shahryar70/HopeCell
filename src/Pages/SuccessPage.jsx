import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <FaCheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          Application Received!
        </h2>
        <div className="mt-4 text-gray-600">
          <p className="mb-4">
            Thank you for submitting your support request. Our patient advocates will review your details and contact you within 48 hours.
          </p>
          <p className="font-medium">
            Your reference number: <span className="text-red-600">
              {location.state?.ref || 'HC-' + Math.random().toString(36).substr(2, 8).toUpperCase()}
            </span>
          </p>
        </div>
        <div className="mt-6">
          <a
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Return to Homepage
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p className="flex items-center justify-center">
            <FaPhone className="mr-2" /> Need immediate help? Call 1-800-HOPE-CELL
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;