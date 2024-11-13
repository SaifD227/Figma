'use client'
import { useState } from "react";
import logo from "../../public/assets/download (8).png";
import { login, signup } from "../app/Firebase";
import banner from "../../public/assets/banner.jpg";
import Image from "next/image";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <Image src={banner} alt="Loading" className="w-16" />
    </div>
  ) : (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center px-8 py-20 bg-gradient-to-b from-black/50 to-black/50"
      style={{ backgroundImage: "url(/background_banner.jpg)" }}
    >
      <Image src={logo} alt="Logo" className="w-36 mb-8" />
      <div className="w-full max-w-lg bg-black/75 rounded-lg p-10">
        <h1 className="text-3xl font-medium text-white mb-7">{signState}</h1>
        <form className="space-y-4">
          {signState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 bg-gray-700 text-white rounded-md px-4"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 bg-gray-700 text-white rounded-md px-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 bg-gray-700 text-white rounded-md px-4"
          />
          <button
            type="submit"
            onClick={user_auth}
            className="w-full py-3 bg-red-600 text-white font-medium rounded-md"
          >
            {signState}
          </button>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 mr-2" />
              Remember Me
            </label>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="text-center mt-8 text-gray-400">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => setSignState("Sign Up")}
                className="text-white cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setSignState("Sign In")}
                className="text-white cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
