import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ActionField from "../components/ActionField/ActionField";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import SiteActionBar from "../components/SiteActionBar/SiteActionBar";
import Summary from "../components/summary";
import { useSiteData } from "../context/SiteDataContext"

const ZonesPage = () => {
  const { id } = useParams();
  const { siteData, setSiteData } = useSiteData();

  const {
    data: zone,
    isLoading,
    error,
  } = useFetch(`http://localhost:8006/zones/${id}`);
  return (
    <div className="m-4">
      {/* <h2>Zones</h2> */}
      {/* <h2>{`Zones ${zone.id}`}</h2> */}
      <Summary/>

      {isLoading && <p className="text-primary text-center">Loading...</p>}
      {error && <p className="text-primary text-center">{error}</p>}
      {/* <div className="d-flex flex-wrap"> */}
        <SiteActionBar />
        {/* Card consisting ot table */}
        <Card className="mx-4 my-2">
          <Card.Body>
            <div className="responsiveTable">
              <Table striped bordered hover responsive>
                <thead className="bg-secondary">
                  <tr>
                    <th className="p-1 px-2">ID</th>
                    <th className="p-1 px-2"> Action </th>
                    <th className="p-1">Nom du site</th>
                    <th className="p-1">Capacite /KW</th>
                    <th className="p-1">Region</th>
                    <th className="p-1">Departement</th>
                    <th className="p-1">Arrondissement</th>
                    <th className="p-1">Phase</th>
                    <th className="p-1">Charge actuelle</th>
                    <th className="p-1">Charge reelle</th>
                    <th className="p-1">Taux d'utilisation /%</th>
                    <th className="p-1">Longueur réseau (km)</th>
                    <th className="p-1">Modèle/Type Bat</th>
                    <th className="p-1">Nb Batteries</th>
                    <th className="p-1">Etat Bat</th>
                    <th className="p-1">Nombre de panneaux</th>
                    <th className="p-1">Type panneaux</th>
                    <th className="p-1">Etat panneaux</th>
                    <th className="p-1">Model/Type Ond</th>
                    <th className="p-1">Capacite Ond</th>
                    <th className="p-1">Contrôleurs de Charge</th>
                    <th className="p-1">Cab distribution</th>
                    <th className="p-1">Nombre</th>
                    <th className="p-1">Statu Centrale</th>
                    <th className="p-1">Observations</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamic Rendering */}
                  {zone &&
                    zone.data.map((zoneData) => (
                      <tr key={zoneData.id}>
                        <td className="p-1 px-2 align-content-center">
                          {zoneData.id}
                        </td>

                        <td className="p-1">
                          <ActionField onClick={() => setSiteData(zoneData)} />
                        </td>

                        <td className="p-1">{zoneData.Nomdusite}</td>
                        <td className="p-1">{zoneData.Capacité}</td>
                        <td className="p-1">{zoneData.Région}</td>
                        <td className="p-1">{zoneData.Département}</td>
                        <td className="p-1">{zoneData.Arrondissement}</td>
                        <td className="p-1">{zoneData.Phase}</td>
                        <td className="p-1">89</td>
                        <td className="p-1">162</td>
                        <td className="p-1">55</td>
                        <td className="p-1">null</td>
                        <td className="p-1">Lithium-ion 460.8V/480Ah</td>
                        <td className="p-1">72</td>
                        <td className="p-1">0</td>
                        <td className="p-1">300</td>
                        <td className="p-1">
                          Pc = 270W, Model = SINGYES solar
                        </td>
                        <td className="p-1">null</td>
                        <td className="p-1">
                          Model: PowerCube5000/ SUN2000-150KTL-S0
                        </td>
                        <td className="p-1">150kW/150kVA</td>
                        <td className="p-1">null</td>
                        <td className="p-1">
                          WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32
                        </td>
                        <td className="p-1">1 Extracteur, 2 Climatiseurs</td>
                        <td className="p-1">En Marche</td>
                        <td className="p-1">RAS</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* // <div className="bg-light shadow p-3 m-3" style={{width: '300px'}}>
                    //     <p className='fs-3'>Id : {zoneData.id}</p>
                    //     <p>Arrondissement : {zoneData.Arrondissement}</p>
                    //     <p>Capacité : {zoneData.Capacité}</p>
                    //     <p>Département : {zoneData.Département}</p>
                    //     <p>Nomdusite : {zoneData.Nomdusite}</p>
                    //     <p>Phase : {zoneData.Phase}</p>
                    //     <p>Responsible : {zoneData.Responsible}</p>
                    //     <p>Région : {zoneData.Région}</p>
                    //     <p>Zone : {zoneData.Zone}</p>
                    // </div> */}
      </div>
    // </div>
  );
};

export default ZonesPage;
