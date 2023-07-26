import ActionField from "../ActionField/ActionField";
import ActionBar from "../SiteActionBar/SiteActionBar";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const SiteList = ({ zones }) => {
  return (
    <>
      <ActionBar />

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
                {zones.map((zone) => {
                  <tr key={zone.id}>
                    <td className="p-1 px-2 align-content-center">{zone.id}</td>

                    <td className="p-1">
                      <ActionField />
                    </td>

                    <td className="p-1">{zone.Nomdusite}</td>
                    <td className="p-1">{zone.Capacité}</td>
                    <td className="p-1">{zone.Région}</td>
                    <td className="p-1">{zone.Département}</td>
                    <td className="p-1">{zone.Arrondissement}</td>
                    <td className="p-1">{zone.Phase}</td>
                    <td className="p-1">89</td>
                    <td className="p-1">162</td>
                    <td className="p-1">55</td>
                    <td className="p-1">null</td>
                    <td className="p-1">Lithium-ion 460.8V/480Ah</td>
                    <td className="p-1">72</td>
                    <td className="p-1">0</td>
                    <td className="p-1">300</td>
                    <td className="p-1">
                      Pc = 270W, Model = SINGYES solar (Hunan)
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
                  </tr>;
                })}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SiteList;
