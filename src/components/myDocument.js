// MyDocument.js
import React from "react";
import { Page, Text, View, StyleSheet, Document } from "@react-pdf/renderer";

// Document styles
const styles = StyleSheet.create({
  page: {
    padding: "1cm",
  },
  table: {
    display: "table",
    width: "100%",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableCell: {
    width: "15%",
    borderRight: "1px solid #000",
    padding: "5px",
    fontSize: "10px",
  },
  idCell: {
    width: "5%",
    borderRight: "1px solid #000",
    padding: "5px",
    fontSize: "10px",
  },
  medCell: {
    width: "10%",
    borderRight: "1px solid #000",
    padding: "5px",
    fontSize: "10px",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  dateSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

const MyDocument = ({ completedTasks, visitDate, nextVisitDate }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.heading}>Completed Tasks:</Text>
        <View style={styles.dateSection}>
          <Text>Visit Date: {visitDate.toLocaleDateString()}</Text>
          <Text>Next Visit: {nextVisitDate.toLocaleDateString()}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.idCell}>ID</Text>
            <Text style={styles.tableCell}>Task Name</Text>
            <Text style={styles.medCell}>Quantity</Text>
            <Text style={styles.medCell}>Progress</Text>
            <Text style={styles.tableCell}>Progress Description</Text>
            <Text style={styles.medCell}>Status</Text>
            <Text style={styles.tableCell}>Observations</Text>
            <Text style={styles.tableCell}>Completed</Text>
          </View>
          {completedTasks.map((task) => (
            <View key={task.id} style={styles.tableRow}>
              <Text style={styles.idCell}>{task.id}</Text>
              <Text style={styles.tableCell}>{task.name}</Text>
              <Text style={styles.medCell}>{task.quantity}</Text>
              <Text style={styles.medCell}>{`${task.progress}%`}</Text>
              <Text style={styles.tableCell}>{task.progressDescription}</Text>
              <Text style={styles.medCell}>{task.status}</Text>
              <Text style={styles.tableCell}>{task.observations}</Text>
              <Text style={styles.tableCell}>
                {task.completed ? "Yes" : "No"}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
