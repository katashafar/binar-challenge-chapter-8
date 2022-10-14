/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { Button, Form, FormGroup, Input, Label, Container } from "reactstrap";
import axios from "../lib/Axios";

function Create() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const exp = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      exp: exp.current.value,
    };

    axios
      .post("/api/players", payload)
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <>
      <Container>
        <h1>Register</h1>
      </Container>
      <Container>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input innerRef={username} type="text" name="username" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input innerRef={email} type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input innerRef={password} type="text" name="password" />
          </FormGroup>
          <FormGroup>
            <Label>Experience</Label>
            <Input innerRef={exp} type="number" name="exp" />
          </FormGroup>
          <Button color="success" type="submit">
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
