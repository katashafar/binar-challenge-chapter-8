import { Table, Container, Input, Button, Form, FormGroup } from "reactstrap";
function Home() {
  return (
    <>
      <Container>
        <h1>Players List</h1>
      </Container>
      <Container>
        <h2>Search</h2>
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
        </Button>
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
