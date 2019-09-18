import React from 'react';
import Email from '../../components/EmailInput'
import Sub from '../../components/ButtonSend'
import { Link } from "react-router-dom"
import { Container } from './styles';

export default function Forgot() {
  return (
    <div>
      <Container>
        <Email/>
        <Sub/>
        <div className="link">
          <Link className="lin" to="/">Retornar ao Login</Link>
        </div>
      </Container>
    </div>
  );
}