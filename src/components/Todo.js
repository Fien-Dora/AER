import React, { useEffect, useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import '../index.css'
import MaintenanceHeader from './MaintenanceHeader';


const TodoApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Task 1',
      description: 'Task 1 Description',
      progress: 50,
      progressDescription: 'Halfway done',
      status: 'In Progress',
      observations: 'No observations',
      completed: false,
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Task 2 Description',
      progress: 100,
      progressDescription: 'Completed',
      status: 'Done',
      observations: 'No observations',
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    progress: 0,
    progressDescription: '',
    status: '',
    observations: '',
    completed: false,
  });

  const [editingTaskId, setEditingTaskId] = useState(null);

  // Prevent Default browser refresh, using local storage
  // when BE is implemeted, BD fetch will be updated here,, verify whatsapp or gpt for initial reference
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
      name: '',
      description: '',
      progress: 0,
      progressDescription: '',
      status: '',
      observations: '',
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

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <Container >
      <MaintenanceHeader/>
      <div className="responsiveTable">
        <Table striped bordered >
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
                  <Button
                    variant=""
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <i className="bi bi-trash text-danger"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <h2>Add New Task</h2>
      <Form onSubmit={handleAddTask}>
        <Form.Group controlId="taskName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="taskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="taskProgress">
          <Form.Label>Progress (%)</Form.Label>
          <Form.Control
            type="number"
            name="progress"
            value={newTask.progress}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="taskProgressDescription">
          <Form.Label>Progress Description</Form.Label>
          <Form.Control
            type="text"
            name="progressDescription"
            value={newTask.progressDescription}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="taskStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="taskObservations">
          <Form.Label>Observations</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="observations"
            value={newTask.observations}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Add Task
        </Button>
      </Form>
    </Container>
  );
};

export default TodoApp;