import useFetch from "../../hooks/useFetch";

const TodoTaskFetch = () => {
  const {
    data: zones,
    isLoading,
    error,
  } = useFetch("http://localhost:8006/equipments");
  
  return (
    <>
      {isLoading && <p className="text-primary text-center">Loading...</p>}
      {error && <p className="text-primary text-center">{error}</p>}
      {zones && 
      <div className="bg-light shadow p-3 m-3" style={{width: '300px'}}>

      </div>
       }
    </>
  );
}
 
export default TodoTaskFetch;