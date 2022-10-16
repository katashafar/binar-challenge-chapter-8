import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  Col,
  Row,
} from "reactstrap";
import { useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../lib/Axios";

function Edit() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const expRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      exp: expRef.current.value,
    };

    axios
      .put("/api/players/" + userId, payload)
      .then((response) => {
        reset();
        alert("Update success");
        navigate(-1);
      })
      .catch((error) => {
        alert(error.response.data.result);
      });
  };

  const reset = () => {
    usernameRef.current.value = null;
    emailRef.current.value = null;
    expRef.current.value = null;
  };

  const getPlayer = async () => {
    try {
      const data = await axios.get("/api/players" + userId);
      const { username, email, exp } = data.data.result;
      username.current.value = username;
      email.current.value = email;
      exp.current.value = exp;
    } catch (error) {}
  };

  useEffect(() => {
    getPlayer();
  });

  return (
    <>
      <Container>
        <h1>Edit Form</h1>
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
            <Input innerRef={usernameRef} type="text" name="username" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input innerRef={emailRef} type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Experience</Label>
            <Input innerRef={expRef} type="number" name="exp" />
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>{" "}
          &nbsp;
          <Button color="danger" type="button" onClick={reset}>
            Reset
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Edit;
