/* eslint-disable no-unused-vars */
import { useRef } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "../lib/Axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
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
      .then((response) => {
        reset();
        alert("success");
        navigate(-1);
      })
      .catch((error) => {
        alert(error.response.data.result);
      });
  };

  const reset = () => {
    username.current.value = null;
    email.current.value = null;
    password.current.value = null;
    exp.current.value = null;
  };

  return (
    <>
      <Container>
        <h1>Register</h1>
      </Container>
      <Container>
        <Row>
          <Col>
            <Link to={"/"}>
              <Button color="warning">Back</Button>
            </Link>
          </Col>
        </Row>
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
