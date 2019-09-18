import React from 'react';
import { Container } from './styles';

export default function TextInput() {
  return (
    <Container>
      <input className="input-style" type="text" placeholder="Fullname"></input>
    </Container>
  );
}
