import useFetch from "../../hooks/useFetch";
import { NavLink, useParams } from "react-router-dom";


const TaskSummaryList = () => {
  const { id } = useParams();
  console.log("id =>", id);

  const {
    data: taskTypes,
    isLoading,
    error,
  } = useFetch(`http://localhost:8006/equipments/${id}`);

  return (
    <div>
      {isLoading && <p className="text-primary text-center">Loading...</p>}
      {error && <p className="text-primary text-center">{error}</p>}

      
      <div className="bg-light shadow p-2 m-1">
        <h6>Task Type:</h6>
        <div className="ms-3">
            {isLoading && (
              <p className="text-primary text-center">Loading...</p>
            )}
            {error && <p className="text-primary text-center">{error}</p>}
            {taskTypes &&
              taskTypes.map((taskType) => (
                <NavLink
                  to={`/equipments/${taskType.id}`}
                  className="list-group-item py-1 border-0 sideBar-link"
                >
                  <i className="bi bi-house-door fs-6 me-2"></i>
                  <span className="fs-6">{taskType.typeName}</span>
                </NavLink>
              ))}
          </div>
      </div>
    </div>
  );
};

export default TaskSummaryList;
