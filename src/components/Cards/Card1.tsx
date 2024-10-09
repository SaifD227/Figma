import React from "react";
import image1 from "../../../public/assets/download (8).png";
import image2 from "../../../public/assets/download (1).svg";
import Image from "next/image";
const Card1 = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg text-blue-950 py-4">My Cards</h1>
        <div className="border-black rounded-3xl bg-blue-700 min-w-[250px] flex-none">
          <div className="p-4 flex justify-between gap-28">
            <div className="text-white">
              <h6>Balance</h6>
              <p className="text-lg">$5,756</p>
            </div>
            <div>
              <Image src={image1} alt="image1" width={40} height={40} />
            </div>
          </div>
          <div className="p-3 flex justify-between gap-28">
            <div>
              <h6 className="text-gray-300 text-sm">CARD HOLDER</h6>
              <p className="text-white">Eddy Cusuma</p>
            </div>
            <div>
              <h6 className="text-gray-300 text-sm">VALID THRU</h6>
              <p className="text-white">12/22</p>
            </div>
          </div>
          <hr className="border-slate-400" />
          <div className="p-4 flex justify-between gap-28 bg-slate-400 bg-opacity-50 rounded-b-3xl">
            <div>
              <p className="text-white">3778 **** **** 1234</p>
            </div>
            <div>
              <Image src={image2} alt="image2" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
