// "use client";

// import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import Dashboard from "./Dashboard";
// // import Dashboard from "./Dashboard";
// // // import Transaction from "../app/Transaction/page";
// // import Accounts from "../app/Accounts/page";
// // import Investment from "../app/Investment/page";
// // import CreditCards from "../app/CreditCards/page";
// //
// const Home: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     // <Router>
//     <div>
//       <Sidebar isOpen={isSidebarOpen} />

//       <Navbar toggleSidebar={toggleSidebar} setDashboardColor={() => {}} />
//       <Dashboard />
//       {/* <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/transaction" element={<Transaction />} />
//           <Route path="/Accounts" element={<Accounts />} />
//           <Route path="/Investment" element={<Investment />} />
//           <Route path="/CreditCards" element={<CreditCards />} />
//         </Routes> */}
//     </div>
//     // </Router>
//   );
// };

// export default Home;

"use client";

import React, { useState } from "react";
// import Link from "next/link";
import Sidebar from "../components/Sidebar"; // Update path as necessary
import Navbar from "../components/Navbar"; // Update path as necessary
import Dashboard from "../components/Dashboard";

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} />
      <Navbar toggleSidebar={toggleSidebar} setDashboardColor={() => {}} />

      <nav>
        <Dashboard/>
        {/* <Link href="/transaction">Transaction</Link>
        <Link href="/accounts">Accounts</Link>
        <Link href="/investment">Investment</Link>
        <Link href="/creditcards">Credit Cards</Link> */}
      </nav>
    </div>
  );
};

export default Home;
