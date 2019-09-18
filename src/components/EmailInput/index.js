import React from 'react';
import { Container } from './styles';

export default function EmailInput() {
  return (
    <Container>
      <input className="input-style" type="email" placeholder="Email"></input>
    </Container>
  );
}
