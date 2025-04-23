import React from "react";

const ModalSponsor = ({ child, onClose }) => {
  if (!child) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-md w-[90%] max-w-md shadow-lg">
        {/* Header with blue background and aligned close button */}
        <div className="bg-blue-500 text-white p-4 rounded-t-md flex justify-between items-center">
          <h2 className="font-semibold text-lg">Sponsor {child.name}</h2>
          <button
            onClick={onClose}
            className="text-white text-2xl font-bold hover:text-gray-200"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-800">Choose amount</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {[20, 40, 50, 80, 100, 200, 400].map((amount) => (
                <label
                  key={amount}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="amount"
                    value={amount}
                    className="hidden peer"
                  />
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:bg-orange-500 peer-hover:border-orange-500">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  ${amount}.00
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Frequency<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded p-2 mt-1"
              required
            >
              <option value="">--</option>
              <option value="Monthly">Monthly</option>
              <option value="One-Time">One-Time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Remarks
            </label>
            <textarea className="w-full border rounded p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" className="w-full border rounded p-2 mt-1" />
          </div>

          <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
            Proceed
          </button>

          <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
            <span className="">Donate with your credit card.</span>
            <div className="flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
                className="w-10 h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="Mastercard"
                className="w-10 h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png"
                alt="AmEx"
                className="w-10 h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg"
                alt="Discover"
                className="w-10 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSponsor;