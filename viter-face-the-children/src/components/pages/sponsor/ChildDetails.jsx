import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalSponsor from "../../partials/modals/ModalSponsor";


const ChildDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const child = location.state?.child;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!child) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">No child data found.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const sponsoredPercent = parseFloat(child.sponsored.replace("%", ""));

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto pt-30">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3">
          <div className="overflow-hidden aspect-[3/4]">
            <img
              src={child.img}
              alt={child.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full h-7 bg-orange-300 ">
            <div
              className="absolute top-0 left-0 h-full bg-orange-500"
              style={{ width: `${sponsoredPercent}%` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold text-sm z-10">
              {child.sponsored} - Sponsored
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-semibold mb-2">{child.name}</h2>
          <p className="text-sm mb-1"><strong>Age:</strong> {child.age}</p>
          <p className="text-sm mb-4"><strong>Birthday:</strong> {child.birthday}</p>

          <h3 className="font-semibold text-md mb-1">My Story</h3>
          <p className="text-sm text-gray-700 mb-4">
            {child.story ? child.story : "This child's story will be added soon."}
          </p>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={openModal}
          >
            Sponsor Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ModalSponsor child={child} onClose={closeModal} />
      )}
    </div>
  );
};

export default ChildDetails;
