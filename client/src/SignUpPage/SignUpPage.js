import React from 'react';
import { Container, Grid, Typography, TextField, Button, withStyles, Box } from '@material-ui/core';
import { Field, reduxForm, SubmissionError } from 'redux-form'
import Alert from '@material-ui/lab/Alert';

const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password',
    'repassword'
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

  if (
    values.password && values.password.length < 6
  ) {
    errors.password = 'Password should be at least 6 characters';
  }
  if (
    values.repassword !== values.password
  ) {
    errors.repassword = 'Passwords do not match';
    errors.password = 'Passwords do not match';
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
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      variant="outlined"
      type={type}
      fullWidth
      {...input}
    />
  );

class SignUpPage extends React.Component {
  render() {
    const { handleSubmit, onSignup, signup } = this.props;

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
        onSignup(values.email, values.password);
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
          <Typography paragraph variant="h3" align="center">Sign Up</Typography>
          <Box width={1 / 2}>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <Field name="email" component={renderTextField} type="text" label="Email" placeholder="Email" />
              </div>
              <div>
                <Field name="password" component={renderTextField} type="password" label="Password" placeholder="Password" />
              </div>
              <div>
                <Field name="repassword" component={renderTextField} type="password" label="Repeat Password" placeholder="Repeat Password" />
              </div>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                {signup.error && <Alert severity="error">{signup.errorMessage}</Alert>}
                <StyledButton variant="contained" type="submit" disabled={signup.loading}>Submit</StyledButton>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Container>
    )
  }
}

SignUpPage = reduxForm({
  form: 'signup'
})(SignUpPage);

export default SignUpPage;
