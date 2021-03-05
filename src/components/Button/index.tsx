import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

// como não vamos alterar nada na herança do button, podemos declarar dessa maneira
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container type="button" {...rest}>
        {children}
    </Container>
);

export default Button;
