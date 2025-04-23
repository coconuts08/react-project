import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalDonor from "../../partials/modals/ModalDonor"; // make sure this path is correct

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
    <div className="px-4 py-8 max-w-4xl mx-auto pt-30">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="w-full md:w-1/3">
          <div className="overflow-hidden aspect-[3/4]">
            <img
              src={donation.image}
              alt={donation.title}
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 pt-20">
          <h2 className="text-2xl font-bold mb-2">{donation.title}</h2>
          <p className="text-gray-700 text-sm mb-6">{donation.description}</p>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sponsor now
          </button>
        </div>
      </div>

      {/* Modal */}
      <ModalDonor isOpen={isModalOpen} onClose={closeModal} title={donation.title} />
    </div>
  );
};

export default DonateDetails;
