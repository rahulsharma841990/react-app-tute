import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import './App.css';

interface Record {
  name: string;
  email: string;
}

function App() {
  const [row, setRow] = useState([]);

  const createRow = () => {
    const singleData: Record = {
      name: 'Test',
      email: 'test@gmail.com',
    };
    setRow((prevItems) => [...prevItems, singleData]);
  };

  const singleRow = () => {
    return row.map((singleRecord: Record, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{singleRecord.name}</td>
          <td>{singleRecord.email}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="bg-primary">Here is code</Col>
          <Col className="bg-info">Here is code</Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <Button onClick={createRow}>Add Row</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <table className="table table-bordered table-stripped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>{singleRow()}</tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
