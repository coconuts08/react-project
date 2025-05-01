import React, { useState } from 'react';

const AdmisionSection = () => {
  const [selectedSection, setSelectedSection] = useState('founders');

  const renderContent = () => {
    switch (selectedSection) {
      case 'founders':
        return (
          <>
            <h2 className="text-xl font-bold">Playschool
            </h2>
            <p className="text-gray-800 leading-relaxed text-justify">
            Playschool is for students ages 2-4. It’s a play-and-learn program without the pressure of formal schooling. Students learn communication skills, personal responsibility, real-life skills, creativity, music, and have nature experiences as they explore plants and trees… and even do some planting themselves! Basic numeracy and literacy is also integrated – learning phonetic sounds of the letters, and learning how to count and work with numbers.



            </p>
            <a href="#" className="text-green-700 text-sm">For more information, please visit our FAQ's PageFor more information, please visit our FAQ's Page</a>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-8 justify-start px-50">
              <img src="./public/img/admission/Playschool-image-a.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
              <img src="./public/img/admission/Playschool-image-b.jpg" alt="Family or ministry group" className="rounded shadow" />
              <img src="./public/img/admission/Playschool-image-c.jpg" alt="Family or ministry group" className="rounded shadow" />
              <img src="./public/img/admission/Playschool-image-d.jpg" alt="Family or ministry group" className="rounded shadow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-8 justify-start px-50 pt-20">
              <img src="./public/img/admission/PS-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
              <img src="./public/img/admission/PS1-1.jpg" alt="Family or ministry group" className="rounded shadow" />
              <img src="./public/img/admission/PS2-1.jpg" alt="Family or ministry group" className="rounded shadow" />
              <img src="./public/img/admission/PS3-1.jpg" alt="Family or ministry group" className="rounded shadow" />
            </div>

      <div className="pt-10 pl-15">
  <button className="bg-green-600 hover:bg-yellow-600 transition text-white text-sm py-2 px-6 rounded-md">
    Register for Playschool
  </button>
  
  </div>
          </>
        );
      case 'history':
        return (
          <>
           <h2 className="text-xl font-bold">Nursery

            </h2>
            <p className="text-gray-800 leading-relaxed text-justify">
            A hands-on and individualized program that incorporates basic learning with fun for toddlers at least three (3) years old. Children sing, and learn nursery rhymes and Bible verses in a loving, caring environment for 2-3 hours a day. Students enjoy learning in many learning spaces, where they can grow in responsibility and stewardship for themselves, others, and the environment.




            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-8 justify-start px-50">
              <img src="./public/img/admission/Nurs1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
              <img src="./public/img/admission/Nurs2.jpg" alt="Family or ministry group" className="rounded shadow" />
              <img src="./public/img/admission/Nurs3.jpg" alt="Family or ministry group" className="rounded shadow" />
              <img src="./public/img/admission/Nurs4.jpg" alt="Family or ministry group" className="rounded shadow" />
            </div>
           <h2 className="text-xl font-bold">Pre-kindergarten
            </h2>
            <p className="text-gray-800 leading-relaxed text-justify">
            Pre-Kindergarten is a fun, engaging class where children learn real-life skills and have fun, hands-on experiences indoors and outdoors. This class also focuses on learning basic numeracy and literacy skills in an engaging environment. A child entering Pre-Kindergarten must meet the following requirements:




            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-8 justify-start px-50">
              <img src="./public/img/admission/PreK1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
              <img src="./public/img/admission/PreK2.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
              <img src="./public/img/admission/PreK3.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
              <img src="./public/img/admission/PreK4.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />

            </div>
           <h2 className="text-xl font-bold">Kindergarten

            </h2>
            <p className="text-gray-800 leading-relaxed text-justify">
            Children in Kindergarten are taught to read short stories, to write, and are encouraged to creatively solve problems. They are honed for readiness to successfully enter 1st grade. A child entering Kindergarten must meet the following requirements:</p>

<p className="text-gray-800 leading-relaxed text-justify">Must pass the readiness assessment done by Kindergarten 2 supervisors.</p>
<p className="text-gray-800 leading-relaxed text-justify">Must be 5 years old by October 31 of the current school year. ( DepEd Order #03, s.2018, DepEd Order #47, s.2016)</p>
            <a href="#" className="text-green-700 text-sm">For more information, please visit our FAQ's PageFor more information, please visit our FAQ's Page</a>


            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-8 justify-start px-50">
            <img src="./public/img/admission/Kinder-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
            <img src="./public/img/admission/Kinder-2.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
            <img src="./public/img/admission/Kinder-3.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
            <img src="./public/img/admission/Kinder-4.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />

            </div>
          </>
        );
      case 'mission':
        return (
          <>
           <h2 className="text-xl font-bold">Elementary

            </h2>
            <p className="text-gray-800 leading-relaxed text-justify">
            Elementary school is a special time in a child's life, where they embark on a journey of learning and discovery. They learn reading, writing, and basic math, and explore science, history, and the world around them. Caring teachers support their growth, and kids make friends and develop their creativity through fun activities like sports, music, and art. FCA provides a safe and nurturing environment where children can thrive and have fun, as well as grow in their faith and love for God and others.



            <a href="#" className="text-green-700 text-sm">For more information, please visit our FAQ's PageFor more information, please visit our FAQ's Page</a>

            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-8 justify-start px-50">
            <img src="./public/img/admission/Elem-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
            <img src="./public/img/admission/Elem-2.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
            <img src="./public/img/admission/Elem-3.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
            <img src="./public/img/admission/FCA-Junior-High-Performance-1024x683-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow h-53" />

            </div>
          </>
        );
      case 'values':
        return (
            <>
            <h2 className="text-xl font-bold">Junior High

 
             </h2>
             <p className="text-gray-800 leading-relaxed text-justify">
             Our high school program is dedicated to providing a supportive and nurturing environment where students can learn, grow, and thrive. Our curriculum is designed to help students develop the skills and knowledge they need to succeed in college and beyond. We believe that education goes beyond just academics -- that's why we place a strong emphasis on leadership and faith-based learning. 
  
             </p>
             <p className="text-gray-800 leading-relaxed text-justify">
             Students will learn how to set goals, and work collaboratively with others to achieve those goals. They'll develop communication skills, problem-solving abilities, and a strong sense of purpose. It is our desire thst students will deepen their understanding of their own faith and develop a moral compass that will guide them throughout their lives. At Frontline Christian Academy, we're committed to equipping our students with real-life skills, and helping them reach their full potential.

             Students will learn how to set goals, and work collaboratively with others to achieve those goals. They'll develop communication skills, problem-solving abilities, and a strong sense of purpose. It is our desire thst students will deepen their understanding of their own faith and develop a moral compass that will guide them throughout their lives. At Frontline Christian Academy, we're committed to equipping our students with real-life skills, and helping them reach their full potential.

 <br />
             <a href="#" className="text-green-700 text-sm">For more information, please visit our FAQ's PageFor more information, please visit our FAQ's Page</a>
 
             </p>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-8 justify-start px-50">
             <img src="./public/img/admission/HS-1-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
             <img src="./public/img/admission/HS-4-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
             <img src="./public/img/admission/HS-5-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
             <img src="./public/img/admission/JHS-3.jpg" alt="Jeffrey and Rowena" className="rounded shadow " />
 
             </div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-8 justify-start px-50">
             <img src="./public/img/admission/H1-.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
             <img src="./public/img/admission/H2-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
             <img src="./public/img/admission/H3-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow" />
             <img src="./public/img/admission/H4-1.jpg" alt="Jeffrey and Rowena" className="rounded shadow " />
 
             </div>
           </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Sidebar */}
      <aside className="md:w-1/4 space-y-4 text-gray-700">
        <ul className="space-y-2">
          <li
            onClick={() => setSelectedSection('founders')}
            className={`cursor-pointer ${selectedSection === 'founders' ? 'text-green-700 font-semibold underline' : ''}`}
          >
           Playschool
          </li>
          <li
            onClick={() => setSelectedSection('history')}
            className={`cursor-pointer ${selectedSection === 'history' ? 'text-green-700 font-semibold underline' : ''}`}
          >
            Pre-Elementary
          </li>
          <li
            onClick={() => setSelectedSection('mission')}
            className={`cursor-pointer ${selectedSection === 'mission' ? 'text-green-700 font-semibold underline' : ''}`}
          >
           Elementary
          </li>
          <li
            onClick={() => setSelectedSection('values')}
            className={`cursor-pointer ${selectedSection === 'values' ? 'text-green-700 font-semibold underline' : ''}`}
          >
            Junior High
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4 space-y-4">{renderContent()}</main>
    </div>
  );
};

export default AdmisionSection;
