import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReceiptPDF from "./ReceiptPDF";

const ReportGeneration = () => {
  const [accountNo, setAccountNo] = useState("");
  const [loanData, setLoanData] = useState<null | {
    loanType: string;
    amount: number;
    date: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock loan data (replace with API call)
    setLoanData({
      loanType: "Personal Loan",
      amount: 500000,
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Report Generation</h2>
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
          Generate Report
        </button>
      </form>
      {loanData && (
        <div className="mt-4">
          <PDFDownloadLink
            document={<ReceiptPDF data={loanData} />}
            fileName="loan_receipt.pdf"
          >
            {({ loading }) => (
              <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                {loading ? "Generating..." : "Download Receipt"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default ReportGeneration;