
import '../../assets/Styles/Statistics.css';
import '../../index.css'
import useFetch from "../../hooks/useFetch";
import SiteList from './siteList';




function Statistics() {
  const {data: zones, isLoading, error } = useFetch("http://localhost:8004/zone1");
  return (
    <>
      <div className="container-fluid min-vh-100 background: #F0F2F5 ">
        <div className="row">
          <div className="col-2 g-0 ">
          </div>
          <div className="col-10 p-0 m-0 g-0 right">
            {isLoading && <p className="text-primary text-center">Loading...</p>}
            {error && <p className="text-primary text-center">{error}</p>}
            {zones && <SiteList zones={zones} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;