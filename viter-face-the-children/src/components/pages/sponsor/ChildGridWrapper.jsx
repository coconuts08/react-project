import React, { useState } from 'react';
import ChildGrid from './ChildGrid';
import ChildGridSecond from './ChildGridSecond';
import { Home, Users } from 'lucide-react';
import { IoHomeSharp } from 'react-icons/io5';
import { MdFamilyRestroom } from 'react-icons/md';

const ChildGridWrapper = () => {
  const [activeTab, setActiveTab] = useState('resident');

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto md:pt-50">
  
      <div className="flex justify-center mb-8">
        <div className="flex space-x-10 relative pt-20">
          <button
            onClick={() => setActiveTab('resident')}
            className={`flex items-center gap-2 text-sm font-semibold relative ${
              activeTab === 'resident' ? 'text-black' : 'text-gray-400'
            }`}
          >
            <span className="text-xl"><IoHomeSharp/></span>
            Resident
            {activeTab === 'resident' && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-400 rounded"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('non-resident')}
            className={`flex items-center gap-2 text-sm font-semibold relative ${
              activeTab === 'non-resident' ? 'text-black' : 'text-gray-400'
            }`}
          >
            <span className="text-xl"><MdFamilyRestroom/></span>
            Non-Resident
            {activeTab === 'non-resident' && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-400 rounded"></span>
            )}
          </button>
        </div>
      </div>


      {activeTab === 'resident' ? <ChildGrid /> : <ChildGridSecond />}
    </div>
  );
};

export default ChildGridWrapper;
