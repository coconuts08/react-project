import React from 'react';

const Affiliates = () => {
  const logoClass = "h-16 w-auto object-contain";
  const largerLogoClass = "h-28 w-auto object-contain";

  const logos = [
    { src: "./public/img/home/logo-fbs.png", alt: "Frontline Business Solutions" },
    { src: "./public/img/home/logo-pfm.jpg", alt: "Philippine Frontline Ministries" },
    { src: "./public/img/home/threadworks-logo-blck.svg", alt: "Frontline Threadworks" },
    { src: "./public/img/home/309252522_139138885504134_735373576036705840_n.jpg", alt: "Face the Children", isLarger: true },
    { src: "./public/img/home/logo.png", alt: "Frontline Worship Center" },
    { src: "./public/img/home/logo-margin2.png", alt: "Growing Leaders" },
    { src: "./public/img/home/logo.svg", alt: "Abeka" },
    { src: "./public/img/home/newlogo_1573159257__98369.webp", alt: "Christian Liberty" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
      {/* Grid for the first 6 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-14 place-items-center">
        {logos.slice(0, 6).map((logo, index) => (
          <img
            key={index}
            className={logo.isLarger ? largerLogoClass : logoClass}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>

      {/* Flex row for the last 2 items, centered */}
      <div className="mt-10 flex justify-center gap-14 flex-wrap sm:gap-35">
        {logos.slice(6).map((logo, index) => (
          <img
            key={index}
            className={logo.isLarger ? largerLogoClass : logoClass}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Affiliates;
