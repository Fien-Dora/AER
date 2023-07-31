import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Table from 'react-bootstrap/Table';
import { Col, Row } from "react-bootstrap";
import TaskSummaryList from "../components/TaskPageComponents/TaskSumaryList";

const ZonesPage = () => {
  const { id } = useParams();
  console.log("id =>", id);

  const {
    data: taskTypes,
    isLoading,
    error,
  } = useFetch(`http://localhost:8006/equipments/${id}`);
  console.log("Zone =>", taskTypes);
  return (
    <div className="m-4">

      {isLoading && <p className="text-primary text-center">Loading...</p>}
      {error && <p className="text-primary text-center">{error}</p>}

      <Row>
        <Col lg={2}>
          <TaskSummaryList/>
        </Col>
        <Col lg={10}>
            <div className="responsiveTable">
              <Table striped bordered hover responsive>
                <thead className="bg-secondary">
                  <tr>
                    <th className="p-1 px-2">Task ID</th>
                    <th className="p-1 px-2"> Task Name </th>
                    <th className="p-1"> Number of {} </th>
                    <th className="p-1">Progress /%</th>
                    <th className="p-1">Progress Description</th>
                    <th className="p-1">Status</th>
                    <th className="p-1">Observation</th>
                    <th className="p-1">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamic Rendering */}
                  {taskTypes &&
                    taskTypes.data.map((taskType) => (
                      <tr key={taskType.id}>
                        <td className="p-1 px-2 align-content-center">
                          {taskType.id}
                        </td>
                        <td className="p-1">{taskType.name}</td>
                        <td className="p-1">{taskType.quantity}</td>
                        <td className="p-1">{taskType.progress}</td>
                        <td className="p-1">{taskType.progressDescription}</td>
                        <td className="p-1">{taskType.status}</td>
                        <td className="p-1">{taskType.Observation}</td>
                        <td className="p-1">{taskType.completed}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
        </Col>
      </Row>
      </div>
  );
};

export default ZonesPage;
