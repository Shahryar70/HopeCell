// components/DonationForm/PaymentStep.jsx
import React from 'react';

const PaymentStep = ({ formData, handleChange, setFormData }) => {
  return (
    <>
      {/* Donation Amount */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Donation Amount (PKR)
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[500, 1000, 2000, 5000].map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, amount: amount.toString() }))}
              className={`py-3 px-4 rounded-lg border transition-all ${
                formData.amount === amount.toString() 
                  ? 'border-teal-500 bg-teal-50 text-teal-700 font-medium' 
                  : 'border-gray-200 hover:border-teal-300'
              }`}
            >
              {amount.toLocaleString()} PKR
            </button>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Or enter custom amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">PKR</span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg pl-12 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Payment Method
        </h2>
        
        <div className="space-y-3">
          {[
            { id: 'credit_card', label: 'Credit/Debit Card' },
            { id: 'bank_transfer', label: 'Bank Transfer' },
            { id: 'jazzcash', label: 'JazzCash' },
            { id: 'easypaisa', label: 'EasyPaisa' }
          ].map((method) => (
            <div key={method.id} className="flex items-center">
              <input
                type="radio"
                id={method.id}
                name="paymentMethod"
                value={method.id}
                checked={formData.paymentMethod === method.id}
                onChange={handleChange}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
              />
              <label htmlFor={method.id} className="ml-2 block text-sm text-gray-700">
                {method.label}
              </label>
            </div>
          ))}
        </div>

        {/* Payment Method Details */}
        {formData.paymentMethod === 'credit_card' && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>
        )}

        {formData.paymentMethod === 'bank_transfer' && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Please transfer your donation to:
            </p>
            <div className="space-y-2">
              <p className="font-medium">Bank Name: Meezan Bank</p>
              <p>Account Title: HopeCell Foundation</p>
              <p>Account Number: 1234-56789012-3</p>
              <p>IBAN: PK36MEZN0001234567890123</p>
              <p className="text-sm text-gray-500 mt-2">
                Please use your name as reference when making the transfer.
              </p>
            </div>
          </div>
        )}

        {formData.paymentMethod === 'jazzcash' && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Send your donation via JazzCash to:
            </p>
            <div className="space-y-2">
              <p className="font-medium">JazzCash Number: 0300-1234567</p>
              <p>Account Title: HopeCell Foundation</p>
              <p className="text-sm text-gray-500 mt-2">
                Please send the exact amount and include your name in the message.
              </p>
            </div>
          </div>
        )}

        {formData.paymentMethod === 'easypaisa' && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Send your donation via EasyPaisa to:
            </p>
            <div className="space-y-2">
              <p className="font-medium">EasyPaisa Number: 0312-3456789</p>
              <p>Account Title: HopeCell Foundation</p>
              <p className="text-sm text-gray-500 mt-2">
                Please include your name in the transaction details.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentStep;