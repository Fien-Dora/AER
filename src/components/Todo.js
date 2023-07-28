import React, { useEffect, useState } from "react";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import "../index.css";
import MaintenanceHeader from "./MaintenanceHeader";
import Stack from "react-bootstrap/Stack";
import TaskSummaryList from "../components/TaskPageComponents/TaskSumaryList";

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 1",
      description: "Task 1 Description",
      progress: 50,
      progressDescription: "Halfway done",
      status: "In Progress",
      observations: "No observations",
      completed: false,
    },
    {
      id: 2,
      name: "Task 2",
      description: "Task 2 Description",
      progress: 100,
      progressDescription: "Completed",
      status: "Done",
      observations: "No observations",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    progress: 0,
    progressDescription: "",
    status: "",
    observations: "",
    completed: false,
  });

  const [editingTaskId, setEditingTaskId] = useState(null);

  // Prevent Default browser refresh, using local storage
  // when BE is implemeted, BD fetch will be updated here,, verify whatsapp or gpt for initial reference
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // end of local storage
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
      <MaintenanceHeader />
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
                  <th>Description</th>
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
                    <td>
                      {editingTaskId === task.id ? (
                        <Form.Control
                          type="text"
                          name="name"
                          value={newTask.name}
                          onChange={handleInputChange}
                        />
                      ) : (
                        task.name
                      )}
                    </td>
                    <td>
                      {editingTaskId === task.id ? (
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="description"
                          value={newTask.description}
                          onChange={handleInputChange}
                        />
                      ) : (
                        task.description
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
