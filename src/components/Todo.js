import React, { useEffect, useState } from "react";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import { PDFDownloadLink, Page, Text, View, Document } from '@react-pdf/renderer';
import "../index.css";
import MaintenanceHeader from "./MaintenanceHeader";
import Stack from "react-bootstrap/Stack";
import TaskSummaryList from "../components/TaskPageComponents/TaskSumaryList";

const MyDocument = ({ completedTasks }) => (
  <Document>
    <Page>
      <View>
        <Text>Completed Tasks:</Text>
        <Table>
          <thead>
            <Text>
              <tr>
                <th>ID</th>
                <th>Task Name</th>
                <th>Quantity</th>
                <th>Progress</th>
                <th>Progress Description</th>
                <th>Status</th>
                <th>Observations</th>
                <th>Completed</th>
              </tr>
            </Text>
          </thead>
          <tbody>
            {completedTasks.map((task) => (
              <Text key={task.id}>
                <tr>
                  <td>{task.id}</td>
                  <td>{task.name}</td>
                  <td>{task.quantity}</td>
                  <td>{`${task.progress}%`}</td>
                  <td>{task.progressDescription}</td>
                  <td>{task.status}</td>
                  <td>{task.observations}</td>
                  <td>{task.completed ? 'Yes' : 'No'}</td>
                </tr>
              </Text>
            ))}
          </tbody>
        </Table>
      </View>
    </Page>
  </Document>
); 

const TodoApp = () => {
  const [tasks, setTasks] = useState([

    {
      id: 1,
      name: "recharger le fluide",
      quantity: 0,
      progress: 50,
      progressDescription: "Half Way done",
      status: "OK",
      observations: "No observations",
      completed: false
    },
    {
      id: 2,
      name: "Vérification de l’évaporateur",
      quantity: 0,
      progress: 0,
      progressDescription: "",
      status: "OK",
      observations: "No observations",
      completed: false
    },
    {
      id: 3,
      name: "vérification du détendeur",
      quantity: 0,
      progress: 0,
      progressDescription: "",
      status: "OK",
      observations: "No observations",
      completed: false
    },
    {
      id: 4,
      name: "vérification des fuites",
      quantity: 0,
      progress: 0,
      progressDescription: "",
      status: "NOK",
      observations: "No observations",
      completed: false
    },
    {
      id: 5,
      name: "vérification du condenseur",
      quantity: 0,
      progress: 0,
      progressDescription: "",
      status: "OK",
      observations: "No observations",
      completed: false
    },
    {
      id: 6,
      name: "vérification du comprehenseur ",
      quantity: 0,
      progress: 0,
      progressDescription: "",
      status: "NOK",
      observations: "No observations",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState({
    progress: 0,
    progressDescription: "",
    observations: "",

  });

  const [editingTaskId, setEditingTaskId] = useState(null);

  const [completedTasks, setCompletedTasks] = useState([]);

  const handlePrintReport = () => {
    const completed = tasks.filter((task) => task.completed);
    setCompletedTasks(completed);
  };

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = {
      ...newTask,
      id: Date.now(),
    };
    setTasks([...tasks, task]);
    setNewTask({
      name: "",
      description: "",
      progress: 0,
      progressDescription: "",
      status: "",
      observations: "",
      completed: false,
    });
  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleUpdateTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...newTask } : task
      )
    );
    setEditingTaskId(null);
  };

  return (
    <Container fluid>
      <MaintenanceHeader onPrintReport={handlePrintReport} />
      <Row>
        <Col md={12} lg={2}>
          <TaskSummaryList />
        </Col>

        <Col md={12} lg={10}>
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
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{ task.name }</td>
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
                          onChange={handleInputChange}
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
                          type="text"
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
                          <i class="bi bi-save text-success mx-2"></i>
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

      {/* Print button */}
      <Button variant="primary" onClick={handlePrintReport}>Print Completed Tasks</Button>

      {/* PDF download link */}
      {completedTasks.length > 0 && (
        <PDFDownloadLink document={<MyDocument completedTasks={completedTasks} />} fileName="completed_tasks.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download Completed Tasks PDF')}
        </PDFDownloadLink>
      )}

      <Stack direction="horizontal" gap={3}>
        <div className="p-2 ms-auto">
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
