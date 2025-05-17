import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    accountNumber: '',
    bankName: '',
    accountType: 'savings'
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            required
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-2 border rounded"
            required
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          />
          <input
            type="text"
            placeholder="Bank Account Number"
            className="w-full p-2 border rounded"
            required
            onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
          />
          
          <div className="space-y-2">
            <label className="block font-medium">Bank Name:</label>
            {['SBI', 'HDFC', 'ICICI', 'Axis'].map((bank) => (
              <label key={bank} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="bankName"
                  value={bank}
                  checked={formData.bankName === bank}
                  onChange={() => setFormData({...formData, bankName: bank})}
                  required
                />
                <span>{bank}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block font-medium">Account Type:</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.accountType}
              onChange={(e) => setFormData({...formData, accountType: e.target.value})}
            >
              <option value="savings">Savings</option>
              <option value="current">Current</option>
              <option value="salary">Salary</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;