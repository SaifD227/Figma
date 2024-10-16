'use client'
import Image from "next/image";
import React, { useState } from "react";
// import image1 from "../../public/assets/image-1-BQaU1fzz.png";
import image1 from "../../../public/assets/image-1-BQaU1fzz.png";
import image2 from "../../../public/assets/image-2-C0SRPo6r.png";
import image3 from "../../../public/assets/image-3-CazXWhmY.png";
import image4 from "../../../public/assets/image-4-Dz-1HCyi.png";
import image5 from "../../../public/assets/image-5-Cyb-y21N.png";
import image6 from "../../../public/assets/image-6-Cwr8LWQE (1).png";
import image7 from "../../../public/assets/image-7-DvBfwV9h.png";
import SimpleLineChart from "../MyCharts/SimpleLineChart";
import { PiNavigationArrowBold } from "react-icons/pi";

const images = [
  { src: image1, name: "Workman", role: "Designer" },
  { src: image2, name: "Kevin Reed", role: "UX" },
  { src: image3, name: "JoBarnes", role: "CEO" },
  { src: image4, name: "Felix Vidal", role: "Job" },
  { src: image5, name: "Anaya", role: "BDM" },
  { src: image6, name: "Ali", role: "Engineer" },
  { src: image7, name: "Jhon", role: "Web Developer" },
];

const EmployesTotal = () => {
  const [startIndex, setStartIndex] = useState(0);

  const showNextImages = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getVisibleImages = () => {
    return [
      ...images.slice(startIndex, startIndex + 3),
      ...images.slice(0, Math.max(0, startIndex + 3 - images.length)),
    ];
  };

  return (
    <div className="flex flex-col lg:flex-row gap-14 mt-10 mx-5">
      <div className="flex-1">
        <div>
          <h1 className="text-xl text-blue-950 p-4">Quik History</h1>
        </div>
        <div className="mx-2 py-8 mb-5 flex flex-col w-full bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="relative py-5 flex items-center px-2">
            {getVisibleImages().map((image) => (
              <div key={image.name} className="flex flex-col items-center mx-2">
                <Image
                  src={image.src}
                  alt={image.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white shadow-md"
                />
                <h1 className="mt-2 text-lg font-semibold">{image.name}</h1>
                <p className="text-slate-500 text-sm">{image.role}</p>
              </div>
            ))}
            <button
              onClick={showNextImages}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-500 p-3 text-3xl text-gray-600 rounded-full shadow-md transition duration-200"
            >
              {">"}
            </button>
          </div>
          <div className="mt-4 mx-4 flex items-center gap-2">
            <p className="text-gray-600 text-lg">Write Amount</p>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="525.50"
                className="border border-gray-300 rounded-lg p-2 mr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
              <button className="absolute right-2 bg-blue-700 rounded-3xl text-white p-2 flex items-center hover:bg-blue-600 transition duration-200">
                Send <PiNavigationArrowBold className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mb-5">
        <div className="px-10">
          <h1 className="text-xl text-blue-950 p-4">Balance History</h1>
        </div>
        <div className="px-10 bg-white rounded-3xl shadow-lg">
          <SimpleLineChart />
        </div>
      </div>
    </div>
  );
};

export default EmployesTotal;
