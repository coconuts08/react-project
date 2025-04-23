import React, { useState } from 'react'
import { MdArrowForward } from 'react-icons/md'
import givingOptions from './DonateData'
import ModalDonor from '../../partials/modals/ModalDonor'
import { Link, useNavigate } from 'react-router-dom';

const GivingOptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTitle, setSelectedTitle] = useState('')
  const navigate = useNavigate()

  const openModal = (title) => {
    setSelectedTitle(title)
    setIsModalOpen(true)
  }

  const handleDonateNow = (option) => {
    if (option.title === 'Children Sponsorship') {
      navigate('/sponsor')
    } else {
      openModal(option.title)
    }
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 md:pt-10">
          {givingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white shadow rounded overflow-hidden flex flex-col w-72 min-h-[620px]"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-[350px] object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="text-gray-600 flex-1 mt-2">{option.description}</p>

                <div className="flex flex-col gap-2 mt-4">
                  <Link
                    to="/donate-details"
                    state={{ donation: option }}
                    className="text-textyellow flex items-center gap-2 text-orange-500"
                  >
                    <span className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-textyellow text-textyellow">
                      <MdArrowForward className="text-xs font-bold" />
                    </span>
                    Read More
                  </Link>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => handleDonateNow(option)}
                    className="bg-primary text-white text-sm px-4 py-1.5 rounded hover:bg-opacity-90 transition"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalDonor isOpen={isModalOpen} onClose={closeModal} title={selectedTitle} />
    </section>
  )
}

export default GivingOptions
