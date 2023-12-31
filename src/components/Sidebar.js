import { NavLink, Outlet } from "react-router-dom";
import "..//assets/Styles/Sidebar.css";
import search from "../assets/img/search.png";
import useFetch from "../hooks/useFetch";

const Sidebar = () => {
  const { data: zones, isLoading, error } = useFetch("http://localhost:8006/zones");

  return (
    <div className="d-flex justify-content-between">
      <div className="bg-white p-2 m-0 vh-100 shadow" style={{ width: '200px' }}>
        <div className="row g-0 m-0 p-1 justify-content-center">
          <div className="col-4 ">
            <img src="/logo.jpg" alt="logoFromPublic" className="siderLogo" />
          </div>
          <div className="col-8">
            <span className="brand-name fs-5">
              <strong>
                <span className="text-success">A</span>
                <span className="text-danger">E</span>
                <span className="text-warning">R</span>
              </strong>{" "}
              Data
              <div className="fs-6"> Management</div>
            </span>
          </div>
        </div>

        <div className="px-2">
          <div className="search-box search my-4" id="js-search">
            <img src={search} alt="searchIcon" />
            <input type="text" className="search" placeholder="search" />
          </div>
        </div>

        <div className="fs-6 text-secondary ps-3">Sites and Activities</div>

        <div className="list-group list-group-flush">
        <NavLink
              to="/home"
              className="list-group-item py-1 border-0 sideBar-link"
            >
             <i className="bi bi-speedometer2 fs-6 me-2 text-success"></i>
            <span className="fs-5">Dashboard</span>
        </NavLink>
          <div>       
          </div>
          <div className="dropdown-center">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="mt-3 ms-1 fs-6 fw-bold">
              <i className="bi bi-house-door fs-5 me-2"></i>
              Zones
            </span>
            </button>
            <ul className="dropdown-menu">
              {isLoading && <li><p className="text-primary text-center">Loading...</p></li>}
              {error && <li><p className="text-primary text-center">{error}</p></li>}
              {zones &&
                zones.map((zone) => (
                  <li><NavLink to={`/zone/${zone.id}`} className="list-group-item py-1 border-0 sideBar-link">
                    <i className="bi bi-house-door fs-6 me-2"></i>
                    <span className="fs-6">Zone {zone.id}</span>
                  </NavLink></li>
                ))
              }
            </ul>
          </div>
          <p className="mt-3 ms-1 fs-6 fw-bold me-5">
            <i className="bi bi-settings fs-3 me-2"></i>
            Maintainance
          </p>
          <div className="ms-3">
            <NavLink
              to="/maintain"
              className="list-group-item py-1 border-0 sideBar-link"
            >
              Maintain Site
            </NavLink>
            <NavLink
              to="/history"
              className="list-group-item py-1 border-0 sideBar-link"
            >
              History
            </NavLink>
          </div>
        </div>
      </div>
      <div className='overflow-auto vh-100' style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
