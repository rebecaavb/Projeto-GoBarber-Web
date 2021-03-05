import React from 'react';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="Logotipo GoBarber" />

            <form>
                <h1> Faça seu cadastro </h1>

                <Input name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />

                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                <Button type="submit"> Cadastrar </Button>
            </form>

            <a href="signup">
                <FiArrowLeft />
               Voltar para logon
            </a>

        </Content>
    </Container>

);

export default SignUp;
