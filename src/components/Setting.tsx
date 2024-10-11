

"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPencilAlt } from "react-icons/fa";
import image1 from "../../public/assets/image-3-CazXWhmY.png"; // Default image

interface FormData {
  yourName: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

const Setting: React.FC = () => {
  const [image, setImage] = useState<string | null>(null); // State for the uploaded image
  const [formData, setFormData] = useState<FormData>({
    yourName: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0])); // Set the new image URL
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-full bg-gray-300 top-28 left-0 w-full z-10 md:left-60 md:w-[calc(100%-15rem)] absolute">
      <div className="flex-1">
        <div className="mx-16 mt-6 p-6 bg-white rounded shadow-md">
          <div className="flex gap-10">
            <h1 className="text-2xl text-blue-950 mb-10 border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 rounded-b-none transition-colors duration-300">
              Edit Profile
            </h1>
            <h1 className="text-2xl text-blue-950 mb-10 border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 rounded-b-none transition-colors duration-300">
              Preferences
            </h1>
            <h1 className="text-2xl text-blue-950 mb-10 border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 rounded-b-none transition-colors duration-300">
              Security
            </h1>
          </div>

          <div className="flex items-center gap-10 mb-6">
            <div className="mb-80 flex flex-col items-center relative">
              <label htmlFor="file-upload" className="cursor-pointer mb-2">
                <div className="relative">
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange} // Handle image change
                    className="hidden"
                  />
                  {image ? (
                    // Show the uploaded image if available
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={image}
                      alt="Preview"
                      className="mt-2 w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                    />
                  ) : (
               
                    <Image
                      src={image1}
                      alt="Default"
                      width={50}
                      height={50}
                      className="mt-2 w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                    />
                  )}
                  <FaPencilAlt className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 text-3xl hover:text-blue-500 transition-colors duration-300" />
                </div>
              </label>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Your Name</h1>
                    <input
                      type="text"
                      name="yourName"
                      placeholder="Your Name"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Username</h1>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Email</h1>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Password</h1>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Date of Birth</h1>
                    <input
                      type="date"
                      name="dob"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Present Address</h1>
                    <input
                      type="text"
                      name="presentAddress"
                      placeholder="Present Address"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Permanent Address</h1>
                    <input
                      type="text"
                      name="permanentAddress"
                      placeholder="Permanent Address"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">City</h1>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Postal Code</h1>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="text-lg">Country</h1>
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-300"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
