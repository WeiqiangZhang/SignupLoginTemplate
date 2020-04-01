import React from 'react';
import { Container, Grid, Typography, TextField, Button, withStyles, Box } from '@material-ui/core';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import Alert from '@material-ui/lab/Alert';

import {
  Link,
} from "react-router-dom";

const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const StyledTextField = withStyles({
  root: {
    margin: '0 0 1.25rem 0',
  },
})(TextField);

const renderTextField = ({
  label,
  input,
  type,
  meta: { touched, invalid, error }
}) => (
    <StyledTextField
      {...input}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      variant="outlined"
      type={type}
      fullWidth
    />
  );

class LoginPage extends React.Component {
  render() {
    const { handleSubmit, onLogin, login } = this.props;

    const StyledButton = withStyles({
      root: {
        backgroundColor: '#4caf50',
        color: "white",
        marginBottom: "2rem"
      },
    })(Button);

    const submit = (values) => {
      const errors = validate(values);
      if (Object.keys(errors).length > 0) {
        throw new SubmissionError(errors);
      } else {
        onLogin(values.email, values.password);
      }
    }
    return (
      <Container maxWidth="xl">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Typography paragraph variant="h3" align="center">Login</Typography>
          <Box width={1 / 2}>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <Field name="email" component={renderTextField} type="text" label="Email" placeholder="Email" />
              </div>
              <div>
                <Field name="password" component={renderTextField} type="password" label="Password" placeholder="Password" />
              </div>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                {login.error && <Alert severity="error">{login.errorMessage}</Alert>}
                <StyledButton variant="contained" type="submit" disabled={login.loading}>Submit</StyledButton>
              </Grid>
            </form>
          </Box>
          <div>
            <Typography variant="subtitle1" display="inline">New User? Click here to </Typography>
            <Link to="/signup">
              <Typography variant="subtitle1" display="inline">Sign Up!</Typography>
            </Link>
          </div>
        </Grid>
      </Container>
    )
  }
}

LoginPage = reduxForm({
  form: 'login'
})(LoginPage);

export default LoginPage;
