import React, { useState } from "react";
import { Container, TextField, Button, Grid } from "@material-ui/core";

import useAuth from "../hooks/useAuth";

const defaultFormState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { login, errors } = useAuth();

  const handleForm = (e: any, field: string) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    login(formState.email, formState.password);
  };

  return (
    <Container>
      <h1>Login</h1>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            id="outlined-required"
            variant="outlined"
            value={formState.email}
            onChange={(e) => handleForm(e, "email")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="password"
            label="Password"
            id="outlined-required"
            variant="outlined"
            value={formState.password}
            onChange={(e) => handleForm(e, "password")}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={(e) => handleSubmit(e)}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Grid>
        {errors && <div>{errors}</div>}
      </Grid>
    </Container>
  );
};

export default Login;
