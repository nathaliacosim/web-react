import React from 'react';
import { Container } from './styles';

export default function PassInput() {
  return (
    <Container>
      <input className="input-style" type="password" placeholder="Password"></input>
    </Container>
  );
}
