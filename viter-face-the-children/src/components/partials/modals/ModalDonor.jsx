import React from 'react';

const ModalDonor = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative pointer-events-auto">
        <div className="bg-primary text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-white text-xl">×</button>
        </div>
        <div className="p-4 space-y-4">
        <select className="w-full border p-2 rounded" required>
            <option value="">-- Designation --</option>
            <option value=""> Meal For Christmast</option>
          </select>
          <input className="w-full border p-2 rounded" type="number" placeholder="Amount" />
          <select className="w-full border p-2 rounded" required>
            <option value="">-- Frequency --</option>
            <option value=""> One time </option>
            <option value=""> Monthly </option>
          </select>
          <textarea className="w-full border p-2 rounded" placeholder="Remarks"></textarea>
          <input className="w-full border p-2 rounded" type="email" placeholder="Email" />
          <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600">
            Proceed
          </button>
          <div className="text-center mt-2">
            <p className="text-sm">Donate with your credit card.</p>
            <div className="flex justify-center gap-2 mt-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="w-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="w-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="AmEx" className="w-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" alt="Discover" className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDonor;
