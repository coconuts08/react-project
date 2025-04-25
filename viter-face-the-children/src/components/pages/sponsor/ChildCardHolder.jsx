import React, { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import ChildCard from "./ChildCard";

export default function SponsorSection() {
  const [view, setView] = useState("resident");

  return (
    <section className="py-12 mt-[150px] pb-[233.5px] flex flex-col min-h-screen">
      <div className="xl:max-w-7xl mx-auto px-4 flex flex-col items-center gap-12 justify-center">
        <div className="flex justify-center gap-8 mb-6 md:mb-1 text-xl md:text-base font-semibold">
          <button
            onClick={() => setView("resident")}
            className={`flex items-center gap-2 ${
              view === "resident"
                ? "text-gray-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <FaHouse /> Resident
          </button>
          <button
            onClick={() => setView("nonResident")}
            className={`flex items-center gap-2 ${
              view === "nonResident"
                ? "text-gray-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <MdOutlineFamilyRestroom /> Non-Resident
          </button>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {view === "resident" && (
            <>
              <ChildCard
    img="https://facethechildren.org/images/John-luke-b.jpg"
    name="John Luke B"
    percent={0.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/ala-d.jpg"
    name="Ala D"
    percent={5.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-angelica.jpg"
    name="Angelita A"
    percent={5.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/minos-d (1).jpg"
    name="Minos D"
    percent={5.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-angelica.jpg"
    name="Angelita A"
    percent={10.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-mary-joy.jpg"
    name="Mary Joy C."
    percent={17.5}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-leam.jpg"
    name="Carl Leann N."
    percent={25.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-charisse.jpg"
    name="Charissa N."
    percent={25.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/chelsey-b.jpg"
    name="Chelsey B"
    percent={27.5}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-shiela.jpg"
    name="Shiela Mariel S"
    percent={35.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-CIELITAHINE.jpg"
    name="Cielithaine D"
    percent={37.5}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-junior.jpg"
    name="Junior N."
    percent={40.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-milquizedec.jpg"
    name="Melquizedec B"
    percent={40.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-keren.jpg"
    name="Keren D."
    percent={45.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-mary-ann.jpg"
    name="Mary Ann V."
    percent={50.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-mikaela.jpg"
    name="Michaela C."
    percent={50.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-sarah.jpg"
    name="Sara A"
    percent={50.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-ricka.jpg"
    name="Ricka"
    percent={52.5}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-alden.jpg"
    name="Alden D."
    percent={57.0}
  />
  <ChildCard
    img="https://facethechildren.org/images/opt-andrea.jpg"
    name="Andrea C."
    percent={62.5}
  />
              <div className="col-span-full flex justify-center">
              <ChildCard
    img="https://facethechildren.org/images/opt-cornilito.jpg"
    name="Cornnelito D."
    percent={100.0}
  />
              </div>
            </>
          )}

          {view === "nonResident" && (
            <>
              <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Trixie Mae N"
                percent={37.5}
              />
              <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Danica V"
                percent={40.0}
              />
              <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Rose Mae N"
                percent={40.0}
              />
              <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Rachelle M"
                percent={42.0}
              />
              <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Richard T"
                percent={45.0}
              />
              <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Mary Grace V"
                percent={50.0}
              />
              <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Eugene Lance D"
                percent={52.5}
              />
              <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Gladys T"
                percent={57.5}
              />

              <div className="col-span-full flex justify-center">
                <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Julie Ann T"
                  percent={60.0}
                />
                <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Mark John B"
                  percent={85.0}
                />
                <ChildCard
                img="https://facethechildren.org/images/John-luke-b.jpg"
                name="Marian Nhicole B"
                  percent={100.0}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}