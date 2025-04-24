import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    <div className="px-1 py-8 max-w-4xl mx-auto pt-30 pb-35">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="w-100 pl-35  md:w-1xl ">
          <div className="overflow-hidden aspect-[3/4] ">
            <img
              src={donation.image}
              alt={donation.title}
              className="w-[265px] h-[360px] object-cover "
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 pt-5 ">
          <h2 className="text-2xl font-semibold opacity-80 mb-2">{donation.title}</h2>
          <p className="text-gray-700 w-auto text-sm mb-6">{donation.description}</p>
          <Link to="/sponsor" className="px-4 py-1 bg-primary text-white rounded hover:bg-blue-600">Donate </Link>
          
        </div>
      </div>

      {/* Modal */}
      <ModalDonor isOpen={isModalOpen} onClose={closeModal} title={donation.title} />
    </div>
  );
};

export default DonateDetails;
