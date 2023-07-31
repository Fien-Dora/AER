const AddTodoTask = () => {
  return (
    <>
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
    </>
  );
};

export default AddTodoTask;
