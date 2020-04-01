import React from 'react';
import { Container } from '@material-ui/core';
import {
  Link
} from "react-router-dom";

function ProtectedPage() {
  return (
    <Container fixed>
      THE SECRET KRABBY PATTY FORMULA IS: LOVE
    </Container>
  );
}

export default ProtectedPage;
