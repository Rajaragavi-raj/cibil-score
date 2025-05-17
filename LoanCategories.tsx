import React, { useState } from "react";

const LoanCategories = () => {
  const [accountNo, setAccountNo] = useState("");
  const [loans, setLoans] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock loan recommendations based on score
    const mockScore = Math.floor(Math.random() * 300) + 600;
    let recommendedLoans: string[] = [];
    if (mockScore > 750) recommendedLoans = ["Home Loan", "Business Loan", "Personal Loan"];
    else if (mockScore > 650) recommendedLoans = ["Personal Loan", "Education Loan"];
    else recommendedLoans = ["Secured Loan (Collateral Required)"];
    setLoans(recommendedLoans);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Loan Categories</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Account Number"
          className="w-full p-2 border rounded"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Get Recommendations
        </button>
      </form>
      {loans.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-semibold mb-2">Recommended Loans:</p>
          <ul className="list-disc pl-5">
            {loans.map((loan, index) => (
              <li key={index}>{loan}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoanCategories;