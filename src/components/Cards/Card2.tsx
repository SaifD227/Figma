import React from 'react'
import Image from 'next/image'
import image3 from "../../../public/assets/download (9).png";
import svg2 from "../../../public/assets/download (2).svg";

const Card2 = () => {
  return (
    <div>
        <div>
                <h1 className="text-lg text-blue-950 py-4">See All</h1>
                <div className="border-black rounded-3xl bg-white min-w-[250px] flex-none">
                  <div className="p-4 flex justify-between gap-28">
                    <div>
                      <h6>Balance</h6>
                      <p className="text-lg">$5,756</p>
                    </div>
                    <div>
                      <Image src={image3} alt="image3" width={40} height={40} />
                    </div>
                  </div>
                  <div className="p-3 flex justify-between gap-28">
                    <div>
                      <h6 className="text-gray-300 text-sm">CARD HOLDER</h6>
                      <p className="text-blue-950">Eddy Cusuma</p>
                    </div>
                    <div>
                      <h6 className="text-gray-300 text-sm">VALID THRU</h6>
                      <p className="text-blue-950">12/22</p>
                    </div>
                  </div>
                  <hr className="border-slate-400" />
                  <div className="p-4 flex justify-between gap-28">
                    <div>
                      <p className="text-blue-950">3778 **** **** 1234</p>
                    </div>
                    <div>
                      <Image src={svg2} alt="image2" width={30} height={30} />
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Card2
