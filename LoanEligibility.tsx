import React, { useState } from "react";

const LoanEligibility = () => {
  const [accountNo, setAccountNo] = useState("");
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock eligibility logic (score > 650)
    const mockScore = Math.floor(Math.random() * 300) + 600;
    setIsEligible(mockScore > 650);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Loan Eligibility Check</h2>
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
          Check Eligibility
        </button>
      </form>
      {isEligible !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-semibold">
            {isEligible ? "✅ Eligible for loans!" : "❌ Not eligible (Score < 650)"}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoanEligibility;