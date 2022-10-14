import { Button, Form, FormGroup, Input, Label, Container } from "reactstrap";

function Create() {
  return (
    <>
      <Container>
        <h1>Register</h1>
      </Container>
      <Container>
        <Form>
          <FormGroup>
            <Label>Username</Label>
            <Input type="text" placeholder="username" name="username" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="text" placeholder="password" name="password" />
          </FormGroup>
          <FormGroup>
            <Label>Experience</Label>
            <Input type="number" placeholder="experience" name="exp" />
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>{" "}
          &nbsp;
          <Button color="danger" type="reset">
            Reset
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Create;
