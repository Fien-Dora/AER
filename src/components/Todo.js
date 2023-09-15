import React, { useContext, useEffect, useState } from "react";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  StyleSheet,
  Document,
  // PDFViewer,
} from "@react-pdf/renderer";
import "../index.css";
import MaintenanceHeader from "./MaintenanceHeader";
import Stack from "react-bootstrap/Stack";
import TaskSummaryList from "../components/TaskPageComponents/TaskSumaryList";
import DateContext from "../context/DateContext";
import UserContext from "../context/UserContext";
import { useSiteData } from "../context/SiteDataContext";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Subcategories from "./Subcategories";
import SelectedSiteCard from "./SelectedSiteCard";

// Document styles
const styles = StyleSheet.create({
  page: {
    padding: "1cm",
  },
  table: {
    display: "table",
    width: "100%",
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#000',
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
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateSection: {
    marginTop: 5,
    fontSize: 12,
    alignItems: "flex-end",
    marginVertical: 10,
  },
  sitetableRow: {
    flexDirection: "row",
    borderColor: "#000",
    alignItems: "flex-start",
  },
  sitetableCell: {
    width: "30%",
    padding: "5px",
    fontSize: "10px",
  },
});

const MyDocument = ({
  completedTasks,
  visitDate,
  nextVisitDate,
  username,
  siteData,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.heading}>Completed Tasks:</Text>
        <View style={styles.table}>
          <View style={styles.sitetableRow}>
            <Text style={styles.sitetableCell}>
              {" "}
              Name of Site: {siteData.Nomdusite}{" "}
            </Text>
            <Text style={styles.sitetableCell}>
              {" "}
              Capacity: {siteData.Capacité}KW{" "}
            </Text>
            <Text style={styles.sitetableCell}>
              {" "}
              Region: {siteData.Région}{" "}
            </Text>
          </View>
          <View style={styles.sitetableRow}>
            <Text style={styles.sitetableCell}>
              {" "}
              Division: {siteData.Département}{" "}
            </Text>
            <Text style={styles.sitetableCell}>
              {" "}
              Sub-Division: {siteData.Arrondissement}{" "}
            </Text>
            <Text style={styles.sitetableCell}> Phase: {siteData.Phase} </Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.dateSection}>By: {username} </Text>
          <Text style={styles.dateSection}>
            Visit Date: {visitDate.toLocaleDateString()}
          </Text>
          <Text style={styles.dateSection}>
            Next Visit: {nextVisitDate.toLocaleDateString()}
          </Text>
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

const TodoApp = () => {
  const { id } = useParams();
  console.log("id=>", id);

  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const {
    data: categories,
    isLoading,
    error,
  } = useFetch(`http://localhost:8006/categories/${id}`);
  console.log("categories=>", categories);

  const [filteredTasks, setFilteredTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    if (categories && selectedSubcategory !== null) {
      const selectedSubcategoryTasks =
        categories.subcategories.find(
          (subcategory) => subcategory.id === selectedSubcategory
        )?.tasks || [];
      setFilteredTasks(selectedSubcategoryTasks);
    }
  }, [categories, selectedSubcategory]);

  const { visitDate, nextVisitDate } = useContext(DateContext);

  const { username } = useContext(UserContext);

  const { siteData } = useSiteData() || { siteData: "Default Site Data" };

  console.log("siteData", siteData);
  // Logic to include Date in PDF
  const [showPDF, setShowPDF] = useState(false);

  const [newTask, setNewTask] = useState({
    progress: 0,
    progressDescription: "",
    observations: "",
  });

  const [completedTasks, setCompletedTasks] = useState([]);
  console.log('Completed Tasks', completedTasks)

  // print button

  const handlePrintReport = () => {
    const completed = filteredTasks.filter((task) => task.completed);
    if (completed.length > 0) {
      setCompletedTasks(completed);
      setShowPDF(true);
    } else {
      alert("No tasks have been completed."); 
    }
  };

  const handlePDFClose = () => {
    setShowPDF(false);
  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleUpdateTask = (taskId) => {
    console.log("Updating task with ID:", taskId);
    console.log("New task values:", newTask);
  
    setFilteredTasks((prevFilteredTasks) =>
      prevFilteredTasks.map((task) =>
        task.id === taskId ? { ...task, ...newTask } : task
      )
    );
    setEditingTaskId(null); // Reset editingTaskId after updating
  };

  // const handleInputChange = (e, taskId) => {
  //   const { name, value } = e.target;
  //   setFilteredTasks((prevFilteredTasks) =>
  //     prevFilteredTasks.map((task) =>
  //       task.id === taskId ? { ...task, [name]: value } : task
  //     )
  //   );
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input change:", name, value);
    setNewTask({ ...newTask, [name]: value });
  };

  const handleCheckboxChange = (taskId) => {
  setFilteredTasks((prevFilteredTasks) =>
    prevFilteredTasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };
        if (updatedTask.completed) {
          setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, updatedTask]);
        } else {
          setCompletedTasks((prevCompletedTasks) => prevCompletedTasks.filter((t) => t.id !== taskId));
        }

        console.log("Completed Tasks Array:", completedTasks); // Add this line

        return updatedTask;
      } else {
        return task;
      }
    })
  );
};

  

  return (
    <Container fluid>
      <SelectedSiteCard/>
      <MaintenanceHeader
        onPrintReport={handlePrintReport}
        visitDate={visitDate}
        nextVisitDate={nextVisitDate}
        // setVisitDate={setVisitDate}
        // setNextVisitDate={setNextVisitDate}
      />
      <Row>
        <Col md={12} lg={3}>
          {/* <TaskSummaryList categories={categories} /> */}
          <Subcategories onSelectSubcategory={setSelectedSubcategory} />
        </Col>

        <Col md={12} lg={9}>
          <div className="responsiveTable">
            <Table striped bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Task Name</th>
                  <th>Quantity</th>
                  <th>Progress</th>
                  <th>Progress Description</th>
                  <th>Status</th>
                  <th>Observations</th>
                  <th>Completed</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>
                      {editingTaskId === task.id ? (
                        <Form.Control
                          type="number"
                          name="quantity"
                          value={newTask.quantity}
                          onChange={handleInputChange}
                        />
                      ) : (
                        task.quantity
                      )}
                    </td>
                    <td>
                      {editingTaskId === task.id ? (
                        <Form.Control
                          type="number"
                          name="progress"
                          value={newTask.progress}
                          onChange= {handleInputChange}
                        />
                      ) : (
                        `${task.progress}%`
                      )}
                    </td>
                    <td>
                      {editingTaskId === task.id ? (
                        <Form.Control
                          type="text"
                          name="progressDescription"
                          value={newTask.progressDescription}
                          onChange={handleInputChange}
                        />
                      ) : (
                        task.progressDescription
                      )}
                    </td>
                    <td>
                      {editingTaskId === task.id ? (
                        <Form.Control
                          type="select"
                          name="status"
                          value={newTask.status}
                          onChange={handleInputChange}
                        />
                      ) : (
                        task.status
                      )}
                    </td>
                    <td>
                      {editingTaskId === task.id ? (
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="observations"
                          value={newTask.observations}
                          onChange={handleInputChange}
                        />
                      ) : (
                        task.observations
                      )}
                    </td>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCheckboxChange(task.id)}
                      />
                    </td>
                    <td>
                      {editingTaskId === task.id ? (
                        <Button
                          // save
                          variant=""
                          onClick={() => handleUpdateTask(task.id)}
                        >
                          <i className="bi bi-save text-success mx-2"></i>
                        </Button>
                      ) : (
                        // edit
                        <Button
                          variant=""
                          onClick={() => handleEditTask(task.id)}
                        >
                          <i className="bi bi-pencil-square text-success mx-2"></i>
                        </Button>
                      )}
                      {/* Delete */}
                      <Button variant="">
                        <i className="bi bi-trash text-danger"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      <Stack direction="horizontal" gap={3}>
        <div className="p-2 ms-auto">
          {/* PDF and pdf download link */}
          {completedTasks.length > 0 && (
            <PDFDownloadLink
              className="me-5"
              document={
                <MyDocument
                  completedTasks={completedTasks}
                  visitDate={visitDate}
                  nextVisitDate={nextVisitDate}
                  username={username}
                  siteData={siteData}
                />
              }
              fileName="completed_tasks.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading..." : "Download Completed Tasks PDF"
              }
            </PDFDownloadLink>
          )}

          {/* show pdf */}
          {/* {showPDF && (
            <PDFViewer width="100%" height="800px">
              <MyDocument
                completedTasks={tasks}
                // visitDate={visitDate}
                // nextVisitDate={nextVisitDate}
              />
            </PDFViewer>
          )} */}

          <Button variant="success" type="submit">
            + <i> add To Report</i>
          </Button>

          <Button variant="success" type="submit" className="ms-4">
            + <i> New Task</i>
          </Button>
        </div>
      </Stack>
    </Container>
  );
};

export default TodoApp;
