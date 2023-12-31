import "../../assets/Styles/Statistics.css";
import "../../index.css";
import useFetch from "../../hooks/useFetch";
import SiteList from "./siteList";

function Statistics() {
  const {
    data: zones,
    isLoading,
    error,
  } = useFetch("http://localhost:8006/zones");
  return (
    <>
      {isLoading && <p className="text-primary text-center">Loading...</p>}
      {error && <p className="text-primary text-center">{error}</p>}
      {zones && <SiteList zones={zones} />}
    </>
  );
}

export default Statistics;
