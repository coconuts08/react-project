import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ModalDonor from "../../partials/modals/ModalDonor";

const DonateDetails = () => {
  const location = useLocation();
  const donation = location.state?.donation;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!donation) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">No donation data found.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto pt-50">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Left - Image */}
        <div className="w-full pl-12 md:w-[300px] flex-shrink-0">
          <img
            src={donation.image}
            alt={donation.title}
            className="w-[265px] h-[360px] object-cover rounded-md"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2  pb-2">
            {donation.title}
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            {donation.description}
          </p>
          <Link
            to="/sponsor"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded transition"
          >
            Sponsor Now
          </Link>
        </div>
      </div>

      {/* Modal */}
      <ModalDonor isOpen={isModalOpen} onClose={closeModal} title={donation.title} />
    </div>
  );
};

export default DonateDetails;
