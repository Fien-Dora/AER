import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { PDFDownloadLink, Page, Text, View, Document } from '@react-pdf/renderer';
import useDataFetch from './useDataFetch';

const MyDocument = ({ data }) => (
  <Document>
    <Page>
      <View>
        {/* <Text>Tabular Data:</Text> */}
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              {/* Add more table headers based on your JSON data */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                {/* Add more table cells based on your JSON data */}
              </tr>
            ))}
          </tbody>
        </Table>
      </View>
    </Page>
  </Document>
);

const TableComponent = () => {
  const { data, isLoading, error } = useDataFetch('http://localhost:8003/Extracteurs');

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Tabular Data:</h2>
      <Table striped bordered hover>
        {/* Table content */}
      </Table>
      {data.length > 0 && (
        <>
          <Button variant="primary" onClick={handlePrint}>Print</Button>
          <PDFDownloadLink document={<MyDocument data={data} />} fileName="table_data.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download PDF')}
          </PDFDownloadLink>
        </>
      )}
    </div>
  );
};

export default TableComponent;
