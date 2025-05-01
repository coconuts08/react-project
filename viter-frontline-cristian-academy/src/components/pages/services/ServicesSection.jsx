import React from 'react';
import { FaBook, FaBusAlt, FaMusic, FaPencilRuler, FaVolleyballBall } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-light text-center mb-12">Services</h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-lg font-bold mb-4">Regular Instructional Services:</h3>
          <p className="mb-4">
            FCA offers instructional and educational services throughout the school year, which is currently from August to June.
            The curriculum followed is the K-12 Basic Education Curriculum, utilizing textbooks from the USA, as well as those from
            local Philippine publishers. FCA focuses on building academic excellence and character, believing that the kind of
            people our children become is more important than how academically smart they are.
          </p>
          <p className="mb-4">
            One of our key focus areas is Social Emotional Learning (in partnership with a US Youth Leadership organization:
            “Growing Leaders”), mentoring, and leadership development. We believe this is something that our young people need,
            especially in such challenging and unprecedented global times. We prioritize the holistic development and wellbeing of
            our students, their families, and our staff and faculty, providing periodic group counseling sessions for parents and
            students with a PRC-registered Guidance Counselor.
          </p>
          <p>
            We provide parent support through our regular Parenting Peer Groups, which are bi-monthly gatherings (online/virtual if
            in-person is not possible) of small groups of parents to provide moral and academic support to one another. FCA accepts
            students from diverse backgrounds, religions, and walks of life. Our primary language used for teaching and communication
            is the English language, except for the subjects of Filipino, Araling Panlipunan, and certain topics under Home Economics
            and Livelihood Education/Technology and Livelihood Education.
          </p>
        </div>

        <div>
          <img
            src="./public/img/services/girl-sitting-classroom-raising-hands-Small.jpg" 
            alt="Instructional service presentation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-gray-100 p-6  shadow-md">
      <div className="md:w-1/2">
        <img
            src="./public/img/services/Rectangle-54.png" 
            alt="Tutorial session"
          className=" w-80 h-80 "
        />
      </div>
      <div className="md:w-2/2 flex flex-col justify-center  mt-4 md:mt-0">
        <h2 className="text-green-600 text-2xl font-semibold flex items-center">
          <span className="mr-2"><FaBook />
          </span>
          Tutorial Services
        </h2>
        <p className="text-gray-700 mt-4">
        Tutorial services are available all-year round. Parents may inquire at the admin office to avail of this extra service for their child. FCA does its best to match up students needing extra help with tutors who are passionate to help them learn and keep up with class activities.        </p>
      </div>
    </div>
      <div className="flex flex-col md:flex-row bg-gray-100 p-6  shadow-md">
      <div className="md:w-1/2">
        <img
            src="./public/img/services/344395932_1297849674141528_8689682475619030636_n-1536x1024.jpg" 
            alt="Tutorial session"
          className=" w-80 h-80 "
        />
      </div>
      <div className="md:w-2/2 flex flex-col justify-center  mt-4 md:mt-0">
        <h2 className="text-green-600 text-2xl font-semibold flex items-center">
          <span className="mr-2"><FaPencilRuler />

          </span>
          Arts
        </h2>
        <p className="text-gray-700 mt-4">
        Art classes at FCA are hands-on, where students learn sketching, painting with acrylics on canvas, and using other mediums of art.

</p>
      </div>
    </div>
      <div className="flex flex-col md:flex-row bg-gray-100 p-6  shadow-md">
      <div className="md:w-1/2">
        <img
            src="./public/img/services/342058707_1394631117970644_2705339374301266595_n.jpg" 
            alt="Tutorial session"
          className=" w-80 h-80 "
        />
      </div>
      <div className="md:w-2/2 flex flex-col justify-center  mt-4 md:mt-0">
        <h2 className="text-green-600 text-2xl font-semibold flex items-center">
          <span className="mr-2"><FaMusic />

          </span>
          Music Lessons
        </h2>
        <p className="text-gray-700 mt-4">
        Music class at FCA is practical and hands-on. Currently, classes offered are basic guitar, keyboard, and drums. </p>
      </div>
    </div>
      <div className="flex flex-col md:flex-row bg-gray-100 p-6  shadow-md">
      <div className="md:w-1/2">
        <img
            src="./public/img/services/341775213_154997594175952_2791910801269289787_n.jpg" 
            alt="Tutorial session"
          className=" w-80 h-80 "
        />
      </div>
      <div className="md:w-2/2 flex flex-col justify-center  mt-4 md:mt-0">
        <h2 className="text-green-600 text-2xl font-semibold flex items-center">
          <span className="mr-2"><FaVolleyballBall />


          </span>
          Sports

        </h2>
        <p className="text-gray-700 mt-4">
        Physical Education class helps keep students physically fit and active. We incorporate a variety of sports and activities such as kickboxing, mixed martial arts, and fun activities such as hiking and camping.

</p>
      </div>
    </div>
      <div className="flex flex-col md:flex-row bg-gray-100 p-6  shadow-md">
      <div className="md:w-1/2">
        <img
            src="./public/img/services/Rectangle-61.png" 
            alt="Tutorial session"
          className=" w-80 h-80 "
        />
      </div>
      <div className="md:w-2/2 flex flex-col justify-center  mt-4 md:mt-0">
        <h2 className="text-green-600 text-2xl font-semibold flex items-center">
          <span className="mr-2"><FaBusAlt />


          </span>
          Transportation

        </h2>
        <p className="text-gray-700 mt-4">
        We offer transportation services for students. We have two (2) buses. You can sign up for the school service by filling out a form at the front office. Monthly bus service costs are based on the distance of the student’s pickup and drop-off location from the school.

</p>
      </div>
    </div>

    <div className="justify-center px-80">
        <h2 className="text-green-600 text-2xl text-center pt-20">Volunteer Service Opportunity</h2>
        <p className='text-center pt-10'>Opportunity for teacher volunteers to serve at the school and in varius ministry activities of Philippine Frontline Ministries. Experience the Philippines and learn about its culture, people, and educational system.</p>
    </div>
    <div className="pt-10  text-center">
  <button className="bg-yellow-600 hover:bg-yellow-600 transition text-white text-sm py-2 px-6 rounded-md">
    See more
  </button>
  
  </div>
    </div>
    
  );
};

export default ServicesSection;
