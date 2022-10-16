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

  const deletePlayer = async (id) => {
    try {
      await axios.delete("/api/players/" + id);
      getDataPlayers();
      alert("Delete Success");
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players &&
              players.map((player, index) => (
                <tr key={index}>
                  <th scope="row">{player.id}</th>
                  <td>{player.username}</td>
                  <td>{player.email}</td>
                  <td>{player.experience}</td>
                  <td>{player.lvl}</td>
                  <td>
                    <Link to={"/edit/" + player.id}>
                      <Button size="sm" color="info">
                        Edit
                      </Button>{" "}
                    </Link>
                    &nbsp;
                    <Button
                      onClick={() => deletePlayer(player.id)}
                      size="sm"
                      color="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Home;
