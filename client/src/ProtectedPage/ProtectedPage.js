import React from 'react';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {
  withRouter
} from "react-router-dom";

function ProtectedPage(props) {
  const { onSignout, signout, history } = props;
  return (
    <Container fixed>
      <p>THE SECRET KRABBY PATTY FORMULA IS: LOVE</p>
      <Button variant="contained" disabled={signout.loading} onClick={() => {
        onSignout();
        history.push("/");
        }}>Sign Out</Button>
    </Container>
  );
}

export default withRouter(ProtectedPage);
