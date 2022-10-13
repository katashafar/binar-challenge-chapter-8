import { Button, Form, FormGroup, Input, Label, Container } from "reactstrap";

function Edit() {
  return (
    <>
      <Container>
        <h1>Edit Form</h1>
      </Container>

      <Container>
        <Form>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value="shafar@gmail.com"
              placeholder="email"
              name="email"
            />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              value="katashafar"
              placeholder="username"
              name="username"
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="email"
              value="12345"
              placeholder="password"
              name="password"
            />
          </FormGroup>
          <FormGroup>
            <Label>Experience</Label>
            <Input
              type="number"
              value="17"
              placeholder="experience"
              name="exp"
            />
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

export default Edit;
