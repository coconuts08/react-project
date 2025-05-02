import { ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const playschoolFaqs = [
  {
    question: "What makes you different?",
    answer: (
      <>
        <p>
          One of our key focus areas is Social Emotional Learning (in partnership with a US Youth Leadership organization: “Growing Leaders”), mentoring, and leadership development. We believe this is something that our young people need, especially in such challenging and unprecedented global times.
        </p>
        <p>
          We also prioritize the holistic development and wellbeing of our students, their families, and our staff and faculty, providing periodic group counseling sessions for parents and students with a PRC-registered Guidance Counselor. We provide genuinely caring support for families, and host monthly Parenting Peer Groups (PPGs), which are gatherings (online/virtual if in-person is not possible) of small groups of parents to provide moral support and academic support to one another.
        </p>
        <p>
          FCA accepts students from diverse backgrounds, religions, and walks of life. Our primary language used for teaching and communication is the English language, except for the subjects of Filipino, Araling Panlipunan, and certain topics under Home Economics and Livelihood Education/Technology and Livelihood Education.
        </p>
      </>
    )
  },
  {
    question: "What are your Core Values?",
    answer: (
      <>
        <p>Christ-centeredness: We regard the Bible as the highest authority on morality and spirituality. Our curriculum is Bible-based and our desire is that all who enter the doors of FCA will be impacted to become more Christ-like.</p>
        <p>Genuine Care and Love for People: The Scriptures command us to "...love the Lord your God with all your heart, and with all your soul, and with all your mind," and to “love your neighbor as yourself.” We genuinely love and care for each other, our students, and their families, our donors, partners, and all stakeholders… and desire for them to walk in the fullness of the promise of abundant life. This desire drives us to pursue exceptional customer service and high client satisfaction.</p>
        <p>Academic excellence: We desire to produce learners who are academically competent, globally competitive, and critical, strategic thinkers.</p>
        <p>Leadership with Integrity: We influence people to become leaders of integrity – honest, consistent, trustworthy individuals governed by a moral compass.</p>
        <p>Real-life skills: We prepare students for life after school, teaching work ethic, communication, critical thinking, and practical life knowledge.</p>
      </>
    )
  },
  {
    question: "What are the fees?",
    answer: (
      <>
        <p>Tuition Fees for Pre-Elementary: ₱54,000–₱55,000</p>
        <p>Tuition Fees for Elementary: ₱57,000–₱58,000</p>
        <p>Tuition Fees for Junior Highschool: ₱57,000–₱59,000</p>
        <p>Payment schemes are flexible – installment plans are available</p>
        <p>We accommodate online payments, bank transfers, GCash, and credit/debit cards.</p>
      </>
    )
  },
  {
    question: "Do you have any promotions or discounts?",
    answer: (
      <p>
        Yes, we do. Click <a href="#" className="text-green-500 underline">here</a>.
      </p>
    )
  },
  {
    question: "When do classes start for SY 2024-2025?",
    answer: <p>The tentative date is August 12, 2024.</p>
  }
];

const preElementaryFaqs = [
  {
    question: "What curriculum, books, and learning platform do you use?",
    answer: (
      <p>
        FCA follows the K-12 Curriculum of the Department of Education and integrates its core values. Many books are shipped from the USA, and modules are also printed by the school. FCA uses Google Classroom and the Google Suite for Education. <a href="#" className="text-green-600 underline">Click here</a> for a quick tutorial.
      </p>
    )
  },
  {
    question: "How do you keep classes interesting and meaningful?",
    answer: (
      <p>
        We acknowledge that most of today’s students are visual learners. We use videos, colorful slides, and other engaging tools. Teachers attend regular training to stay effective. <a href="#" className="text-green-600 underline">Check out our website</a>.
      </p>
    )
  },
  {
    question: "Do new students need to take any entrance exams?",
    answer: (
      <>
        <p>Yes, depending on grade level. For Pre-Elementary to Grade 3: reading and numeracy assessment.</p>
        <p>Grades 4-10:</p>
        <ul className="list-disc pl-5">
          <li>Logic Exam (online)</li>
          <li>Basic Language and Math Skills (in-person/video)</li>
          <li>Grit Scale (Grades 6–10, online)</li>
        </ul>
      </>
    )
  },
  {
    question: "Do you accept students with special needs?",
    answer: (
      <p>
        Yes, if the parent/guardian provides a recommendation from a behavioral psychologist.
      </p>
    )
  },
  {
    question: "Do the students have to wear uniforms?",
    answer: <p>Yes, they will have to wear their uniforms.</p>
  },
  {
    question: "What do I need to do as a parent to prepare for this school year?",
    answer: (
      <p>
        Click <a href="#" className="text-green-600 underline">HERE</a> to view the needed school supplies per level.
      </p>
    )
  },
  {
    question: "Do you offer tutorials?",
    answer: (
      <p>
        Yes, we do. Tutorial rate is ₱150.00/hour.
      </p>
    )
  },
  {
    question: "Do you offer transportation services?",
    answer: (
      <p>
        Yes. Rates depend on the pick-up/drop-off locations. <a href="#" className="text-green-600 underline">Click here</a> for current rates.
      </p>
    )
  }
];

const elementaryFaqs = [
  {
    question: "How to apply?",
    answer: (
      <p>
        Send your CV to <a href="mailto:hrad@fca.edu.ph" className="text-green-600 underline">hrad@fca.edu.ph</a>. We’ll contact you soon.
      </p>
    )
  },
  {
    question: "Volunteer Opportunities?",
    answer: <p><a href="#" className="text-green-600 underline">View PDF file</a></p>
  }
];

const FaqsSection = () => {
  const [selectedSection, setSelectedSection] = useState('founders');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaqSection = (title, data) => (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index}>
            <button
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center rounded-md"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-green-600 font-semibold mr-2">Q:</span>
              <span className="flex-1">{item.question}</span>
              {openIndex === index ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-gray-100 rounded-b-md text-sm md:text-base space-y-2">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case 'founders':
        return renderFaqSection("Playschool", playschoolFaqs);
      case 'history':
        return renderFaqSection("Pre-Elementary", preElementaryFaqs);
      case 'mission':
        return renderFaqSection("Elementary", elementaryFaqs);
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-6 gap-6">
      {/* Sidebar */}
      <aside className="md:w-1/4 space-y-4 text-gray-700 pt-4 md:pl-20 md:pt-40 text-center md:text-left">
        <ul className="space-y-2">
          <li
            onClick={() => {
              setOpenIndex(null);
              setSelectedSection('founders');
            }}
            className={`cursor-pointer ${selectedSection === 'founders' ? 'text-green-700 font-semibold underline' : ''}`}
          >
            About Our School
          </li>
          <li
            onClick={() => {
              setOpenIndex(null);
              setSelectedSection('history');
            }}
            className={`cursor-pointer ${selectedSection === 'history' ? 'text-green-700 font-semibold underline' : ''}`}
          >
            Excellent Learning and Facilities
          </li>
          <li
            onClick={() => {
              setOpenIndex(null);
              setSelectedSection('mission');
            }}
            className={`cursor-pointer ${selectedSection === 'mission' ? 'text-green-700 font-semibold underline' : ''}`}
          >
            Job Opportunities
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4 space-y-4">
        <h2 className="text-3xl md:text-5xl font-light md:pl-5 text-center md:text-left mb-6">
          Frequently Asked Questions
        </h2>
        {renderContent()}
      </main>
    </div>
  );
};

export default FaqsSection;
