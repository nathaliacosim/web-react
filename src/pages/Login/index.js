import React from 'react';
import Email from '../../components/EmailInput'
import Pass from '../../components/PassInput'
import Sub from '../../components/ButtonSubmit'
import { Link } from "react-router-dom"
import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <Email/>
      <Pass/>
      <Sub/>
      <div className="link">
        <Link className="lin" to="/forgot">Esqueceu a senha?</Link>
        <Link className="lin" to="/sign-up">Novo? Cadastre-se!</Link>
      </div>
    </Container>
  );
}