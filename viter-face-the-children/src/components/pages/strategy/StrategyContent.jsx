import React from 'react';

const StrategyContent = () => {
  return (
    <main className="">
     <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-col lg:flex-row gap-10 items-start">
      <div className="flex justify-center w-full md:order-1 lg:order-2 mt-11">
        <img
          className=""
          src="./public/img/Strategy/s-banner.webp"
          alt="FTC Banner Quote"
        />
      </div>

      <div className="w-full md:order-2 lg:order-1 mt-11">
        <small className="text-orange-500 uppercase mb-2 mt-11 block">
          The Problem
        </small>
        <h2 className="text-3xl font-semibold text-primary mb-4 mt-11">
          Rescuing Lives from Poverty and Abuse
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 md:max-w-lg mt-11">
          Historically in the Philippines, due to widespread poverty, the
          problem of abandoned, abused, or dangerously neglected (AADN) children
          has been remarkably large. Many hundreds of thousands of children,
          perhaps millions, have grown up living mostly on the streets. There is
          very minimal governmental protection or assistance for what are often
          termed “street children,” and in class-segregated social systems these
          children are not only viewed as a nuisance, but are the target of a
          wide variety of evils.
        </p>

        <small className="text-orange-500 uppercase mb-2 mt-11 block">
          Our Action
        </small>
        <h2 className="text-3xl font-semibold text-primary mb-4 mt-11">
          Creating Lasting Change through Our Intervention
        </h2>
        <p className="text-gray-600 mb-6 md:max-w-xl leading-relaxed mt-11">
          The Face the Children (FTC) program is established to serve AADN
          children through a program that provides protection, care, nurture,
          education, and spiritual development that affords them a genuinely
          greater opportunity for a dignified and meaningful adult life.
        </p>

        <div className="space-y-6 md:max-w-lg mt-11">
          {[
            {
              title: "Protect",
              text: "We provide a safe environment and place for those living in our children’s homes, who are provided full-time care.",
            },
            {
              title: "Care",
              text: "We meet the basic physical and material needs for the children in the FTC program.",
            },
            {
              title: "Nurture",
              text: "We provide loving oversight that involves listening, counseling, and prayer. We do our best to be a parent figure in the lives of the children.",
            },
            {
              title: "Education",
              text: "We provide K-12 educational services for all the children in our program, as well as opportunities for University for the higher achievers.",
            },
            {
              title: "Spiritual Development",
              text: "As Christians we believe spiritual well-being comes through a meaningful relationship with God. The Bible is our main source of spiritual direction and guidance.",
            },
          ].map((item, index) => (
            <div key={index} className="mt-11">
              <h5 className="text-primary font-semibold text-lg leading-relaxed">
                {item.title}
              </h5>
              <p className="mt-3 text-gray-600 leading-relaxed md:max-w-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  

      
      <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    <div className="order-1 md:order-1 md:w-1/2">
      <img
        src="./public/img/Strategy/s-love.webp"
        alt="Prevails Forever img"
        className="rounded-b-full w-80 h-80 object-cover shadow-md mx-auto md:mx-0"
      />
    </div>

 
    <div className="order-2 md:order-2 md:w-1/2">
      <p className="text-xs font-semisemibold text-orange-500 uppercase mb-2">Prevails Forever</p>
      <h2 className="text-3xl font-semibold text-blue-400 mb-4">Love Never Fails</h2>
      <p className="mb-4">
      Many children we serve come to us with psychological, behavioral problems, and even chemical or mental addictions; some at very young ages. Many are not ready to trust or commit to others due to various forms of abuse or levels of neglect. Needless to say, many children have good reasons for hesitation to trust or commit to others; and in some cases fail to do so. Knowing that not all children respond as we hope does not deter us. We are committed to the welfare of children regardless of the outcomes of our interventions with all children.
      </p>
      <p>
      Many children we serve come to us with psychological, behavioral problems, and even chemical or mental addictions; some at very young ages. Many are not ready to trust or commit to others due to various forms of abuse or levels of neglect. Needless to say, many children have good reasons for hesitation to trust or commit to others; and in some cases fail to do so. Knowing that not all children respond as we hope does not deter us. We are committed to the welfare of children regardless of the outcomes of our interventions with all children.
      </p>
    </div>
  </div>
</section>

    </main>
  );
};

export default StrategyContent;
