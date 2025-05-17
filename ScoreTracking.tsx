import React, { useState } from "react";

const ScoreTracking = () => {
  const [accountNo, setAccountNo] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call to fetch score (replace with actual backend)
    setScore(Math.floor(Math.random() * 300) + 600); // Random score (600-900)
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">CIBIL Score Tracking</h2>
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
          Track Score
        </button>
      </form>
      {score && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-semibold">Your CIBIL Score: <span className="text-green-600">{score}</span></p>
        </div>
      )}
    </div>
  );
};

export default ScoreTracking;