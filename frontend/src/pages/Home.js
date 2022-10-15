import { Link } from "react-router-dom";
import {
  Table,
  Container,
  Input,
  Button,
  Form,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import axios from "../lib/Axios";
import { useState } from "react";
function Home() {
  const [players, setPlayers] = useState([]);
  const getDataPlayers = async () => {
    try {
      const data = await axios.get("/api/players");
      setPlayers(data.data.result);
    } catch (error) {}
  };

  useState(() => {
    getDataPlayers();
  });

  return (
    <>
      <Container>
        <h1>Players List</h1>
      </Container>
      <Container>
        <h2>Search Player</h2>
        <Form>
          <FormGroup>
            <Input name="username" placeholder="Username" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="email" placeholder="Email" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="exp" placeholder="Experience" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="lvl" placeholder="Level" type="number" />
          </FormGroup>
        </Form>
      </Container>
      <Container>
        <Button color="primary" type="submit">
          Search
        </Button>{" "}
        &nbsp;
        <Row>
          <Col>
            <Link to={"/create"}>
              <Button color="success">Add New Player</Button>&nbsp;
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Table bordered responsive size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto@email.com</td>
              <td>Crusader</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton@email.com</td>
              <td>Ancient</td>
              <td>12</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>theBird@email.com</td>
              <td>Immortal</td>
              <td>4</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>theBird@email.com</td>
              <td>Crusader</td>
              <td>67</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Home;
