import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  header: { fontSize: 18, marginBottom: 20, fontWeight: "bold" },
  label: { fontSize: 12, fontWeight: "bold" },
  value: { fontSize: 12, marginBottom: 5 },
});

const ReceiptPDF = ({ data }: { data: { loanType: string; amount: number; date: string } }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Loan Receipt</Text>
        <Text style={styles.label}>Loan Type:</Text>
        <Text style={styles.value}>{data.loanType}</Text>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>₹{data.amount.toLocaleString()}</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{data.date}</Text>
      </View>
    </Page>
  </Document>
);

export default ReceiptPDF;