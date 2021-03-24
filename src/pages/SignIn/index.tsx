import React, { useState } from 'react';
//Imagem de Logo
import logoImg from '../../assets/icons/basics/logo.png';
//Companents
import Input from '../../components/Input';
import Button from '../../components/Buttons/sucess';
//Hooks Auth
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Form,
  FormTitle,
  Logo
} from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt='Guarda Documentos' />
      </Logo>
      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle><h3>Entrada</h3></FormTitle>
        <Input
          type="email"
          required
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
}


export default SignIn;