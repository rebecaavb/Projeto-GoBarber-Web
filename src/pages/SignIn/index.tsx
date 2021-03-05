import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles'
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        {/* elementos do formulário */}
        <Content>
            <img src={logoImg} alt="Logotipo GoBarber" />

            <form>
                <h1> Faça seu logon </h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                <Button type="submit"> Entrar </Button>

                <a href="forgot"> Esqueci minha senha </a>
            </form>

            <a href="signup">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        { /** imagem */}
        <Background />
    </Container>
);

export default SignIn;
