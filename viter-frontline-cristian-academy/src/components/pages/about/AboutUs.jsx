import React, { useState } from 'react';

const AboutUs = () => {
  const [selectedSection, setSelectedSection] = useState('founders');

  const renderContent = () => {
    switch (selectedSection) {
      case 'founders':
        return (
          <div className='md:pr-50'>
            <h2 className="text-xl font-bold">The Founders</h2>
            <p className="text-gray-800 leading-relaxed text-justify">
              Jeffrey Pessina was born in Illinois, USA, and is one of ten children. At the age of twenty, after a long period of drug addiction and alcohol abuse, God changed his life. Five weeks after his decision to become a Christ-follower, he left for the Philippines to serve as a missionary. He met his wife, Rowena Pessina, in 1983. They married in 1986 and have four grown children. In 1987 they incorporated the Philippine Frontline Ministries, Inc (PFM), an evangelistic team ministry that was then fully mobile, and traveled throughout the nation sharing the good news of Christ Jesus. In 2000, PFM moved to establish a mission center in San Pablo City, Laguna and branched out into other initiatives. Frontline now oversees a growing multi-site church (Frontline Worship Center), a program to protect and develop abandoned and abused children (Face the Children), a Christian school (Frontline Christian Academy, Inc.), and is involved in compassionate ministries to change the lives of the marginalized poor through social enterprise businesses and livelihood programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pr-150">
              <img src="/img/about/the-Founder.jpg" alt="Jeffrey and Rowena" className=" shadow w-full h-auto" />
              <img src="/img/about/founders2-2.jpg" alt="Family or ministry group" className=" shadow w-full h-auto" />
            </div>
          </div>
        );
      case 'history':
        return (
          <div className='md:pr-50'>
            <h2 className="text-xl font-bold">The History of FCA</h2>
            <p className="text-gray-800 leading-relaxed text-justify">
              Frontline Christian Academy, Inc. (FCA) began initially as a home school for the staff children of the Philippine Frontline Ministries, Inc., (PFM) (www.thefrontline.asia). Later PFM decided to pursue solutions for abandoned and abused street children, and established a child care initiative named Face the Children (FTC) (www.facethechildren.org). In line with this initiative, the strategic scope of FCA was expanded to meet the educational needs of the children being cared for under the FTC program.
            </p>
            <p className="text-gray-800 leading-relaxed text-justify">
              What had started in 2003 with 17 students in a doublewide air-conditioned trailer, located in a small compound in Brgy. San Francisco, San Pablo City, quickly expanded. In 2007, FCA was moved to a more suitable, larger venue, in the same barangay. FCA was officially incorporated as a non-stock, non-profit educational institution in July 2009, and obtained the necessary permits from the Department of Education in 2011. FCA refers to 2009 as its official “first year.”
            </p>
            <p className="text-gray-800 leading-relaxed text-justify">
              FCA moved to its permanent location in Baloc Rd., Brgy. San Ignacio, in year 2020.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pr-150">
              <img src="/img/about/Rectangle-61.png" alt="History 1" className=" shadow w-full h-auto" />
              <img src="/img/about/Rectangle-55.png" alt="History 2" className=" shadow w-full h-auto" />
            </div>
          </div>
        );
      case 'mission':
        return (
          <>
            <h2 className="text-xl font-bold">Mission</h2>
            <p className="text-gray-800 leading-relaxed text-justify">
              To facilitate holistic and caring Christian education that develops learners in godly character and academic ability, while creating positive social impact and being a fun, meaningful place to work.
            </p>
            <h2 className="text-xl font-bold">Vision</h2>
            <p className="text-gray-800 leading-relaxed text-justify">
              Frontline Christian Academy will create lasting local and national impact through the development of Godly steward leaders.
            </p>
          </>
        );
      case 'values':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold">Christ-centeredness</h2>
              <p className="text-gray-800 leading-relaxed text-justify">
                We regard the Bible as the highest authority on morality and spirituality. Our curriculum is Bible-based and our desire is that all who enter the doors of FCA will be impacted to become more Christ-like.
              </p>
              <h2 className="text-xl font-bold">Genuine Care and Love for People</h2>
              <p className="text-gray-800 leading-relaxed text-justify">
                The most important commandment of the Scriptures is “You shall love the Lord your God with all your heart, and with all your soul, and with all your mind,” and “‘You shall love your neighbor as yourself.” We genuinely love and care for each other, our students, and their families, our donors, partners, and all stakeholders… and desire for them to walk in the fullness of the promise of abundant life. This desire drives us to pursue exceptional customer service and high client satisfaction. We also genuinely love and care for our employees, and aim to be a fun and meaningful place to work, and to provide a conducive environment that encourages collaboration of all stakeholders.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Academic Excellence</h2>
              <p className="text-gray-800 leading-relaxed text-justify">
                We desire to produce learners who are academically competent, able to be globally competitive, and who are critical, strategic thinkers.
              </p>
              <h2 className="text-xl font-bold">Leadership with Integrity</h2>
              <p className="text-gray-800 leading-relaxed text-justify">
                We desire to be a school that influences its people to become leaders of integrity – individuals who are honest, consistent, trustworthy, and governed by a moral compass.
              </p>
              <h2 className="text-xl font-bold">Real-life Skills</h2>
              <p className="text-gray-800 leading-relaxed text-justify">
                We believe in preparing our students for life after formal schooling, and inculcating in them a strong work ethic, a passion for excellence, and real-life skills such as communication and critical thinking, as well as practical knowledge for daily life.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Sidebar */}
      <aside className="md:w-1/4 space-y-4 text-gray-700 md:pl-20">
        <nav aria-label="About navigation">
          <ul className="space-y-2">
            <li
              onClick={() => setSelectedSection('founders')}
              className={`cursor-pointer hover:underline ${selectedSection === 'founders' ? 'text-green-700 font-semibold underline' : ''}`}
            >
              The Founders
            </li>
            <li
              onClick={() => setSelectedSection('history')}
              className={`cursor-pointer hover:underline ${selectedSection === 'history' ? 'text-green-700 font-semibold underline' : ''}`}
            >
              The History of FCA
            </li>
            <li
              onClick={() => setSelectedSection('mission')}
              className={`cursor-pointer hover:underline ${selectedSection === 'mission' ? 'text-green-700 font-semibold underline' : ''}`}
            >
              Mission & Vision
            </li>
            <li
              onClick={() => setSelectedSection('values')}
              className={`cursor-pointer hover:underline ${selectedSection === 'values' ? 'text-green-700 font-semibold underline' : ''}`}
            >
              Core Values
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4 space-y-4">{renderContent()}</main>
    </div>
  );
};

export default AboutUs;
