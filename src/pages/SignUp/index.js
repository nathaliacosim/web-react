import React from 'react';
import Name from '../../components/TextInput'
import Email from '../../components/EmailInput'
import Pass from '../../components/PassInput'
import Sub from '../../components/ButtonSubmit'
import { Link } from "react-router-dom"
import { Container } from './styles';

export default function SignUp() {
  return (
    <Container>
      <Name/>
      <Email/>
      <Pass/>
      <Sub/>
      <div className="link">
        <Link className="lin" to="/">Retornar ao Login</Link>
      </div>
    </Container>
  );
}