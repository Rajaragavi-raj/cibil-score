import React, { useState } from "react";

const CreditAlerts = () => {
  const [accountNo, setAccountNo] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock subscription API call
    setIsSubscribed(true);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Credit Score Alerts</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Account Number"
          className="w-full p-2 border rounded"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full p-2 border rounded"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            id="smsAlerts"
            className="mr-2"
            checked={isSubscribed}
            onChange={(e) => setIsSubscribed(e.target.checked)}
          />
          <label htmlFor="smsAlerts">Enable SMS Alerts</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Preferences
        </button>
      </form>
      {isSubscribed && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p className="font-semibold text-green-800">
            ✅ Alerts activated! You'll receive SMS updates.
          </p>
        </div>
      )}
    </div>
  );
};

export default CreditAlerts;