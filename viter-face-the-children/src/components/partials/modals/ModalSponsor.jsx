import React, { useState } from "react";

const ModalSponsor = ({ child, onClose }) => {
  const [amount, setAmount] = useState(null);
  const [frequency, setFrequency] = useState("");
  const [remarks, setRemarks] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-lg font-bold text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-blue-600 font-bold text-lg mb-4 ">
          Sponsor {child.name}
        </h2>

        <p className="font-semibold mb-2">Choose amount</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[20, 40, 50, 80, 100, 200, 380].map((amt) => (
            <label key={amt} className="flex items-center space-x-2">
              <input
                type="radio"
                name="amount"
                value={amt}
                checked={amount === amt}
                onChange={() => setAmount(amt)}
              />
              <span>${amt.toFixed(2)}</span>
            </label>
          ))}
        </div>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Frequency <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border rounded px-3 py-2 mb-4"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="">--</option>
          <option value="Monthly">Monthly</option>
          <option value="One-time">One-time</option>
        </select>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Remarks
        </label>
        <textarea
          className="w-full border rounded px-3 py-2 mb-4"
          rows="3"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded">
          Proceed
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Donate with your credit card.</p>
          <div className="flex justify-center gap-2 mt-1">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/amex.png" alt="Amex" className="h-6" />
            <img src="/discover.png" alt="Discover" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSponsor;
