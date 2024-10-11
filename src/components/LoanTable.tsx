

"use client";
import { useState, useEffect } from "react";


type Loan = {
  loanMoney: number;
  leftToRepay: number;
  duration: number;
  interestRate: number;
  installment: number;
};

export default function LoanTable() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [totalRepay, setTotalRepay] = useState<number>(0);
  const [error, setError] = useState<string | null>(null); 

  // Simulated loan data (replaces the API call)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loanData: Loan[] = [
    {
      loanMoney: 5000,
      leftToRepay: 2500,
      duration: 24,
      interestRate: 5,
      installment: 200,
    },
    {
      loanMoney: 7000,
      leftToRepay: 3500,
      duration: 30,
      interestRate: 6,
      installment: 250,
    },
    {
      loanMoney: 12000,
      leftToRepay: 6000,
      duration: 36,
      interestRate: 7,
      installment: 350,
    },
    {
      loanMoney: 4000,
      leftToRepay: 2000,
      duration: 12,
      interestRate: 4,
      installment: 150,
    },
    {
      loanMoney: 9000,
      leftToRepay: 4500,
      duration: 40,
      interestRate: 6,
      installment: 300,
    },
    {
      loanMoney: 15000,
      leftToRepay: 7500,
      duration: 48,
      interestRate: 8,
      installment: 450,
    },
    {
      loanMoney: 3000,
      leftToRepay: 1500,
      duration: 20,
      interestRate: 3,
      installment: 100,
    },
    {
      loanMoney: 11000,
      leftToRepay: 5500,
      duration: 30,
      interestRate: 5,
      installment: 350,
    },
  ];

 
  useEffect(() => {
    try {
      setLoans(loanData);


      const total = loanData.reduce((acc, loan) => acc + loan.leftToRepay, 0);
      setTotalRepay(total);
    } catch (err: unknown) {
      console.error(err); 
      setError("Failed to fetch loan data");
    }
  }, [loanData]); 


  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mt-10 mx-auto p-4">
      <div className="mb-6 text-blue-950 text-xl text-center">
        <h1>Active Overview Loans</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Sl No</th>
              <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Loan Money</th>
              <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Left to Repay</th>
              <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Duration (months)</th>
              <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Interest Rate (%)</th>
              <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">Installment</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">{index + 1}</td>
                <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                  ${loan.loanMoney.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                  ${loan.leftToRepay.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                  {loan.duration}
                </td>
                <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                  {loan.interestRate}%
                </td>
                <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                  ${loan.installment.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-bold bg-gray-100">
              <td colSpan={2} className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                Total
              </td>
              <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                ${totalRepay.toFixed(2)}
              </td>
              <td colSpan={3} className="border border-gray-300"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
