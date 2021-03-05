import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

// sobreescrever somente o nome que é obrigatório
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    // receber um componente como uma propriedade
    icon: React.ComponentType<IconBaseProps>;
}

// herdando propriedades do input
// rest - pegando propriedades herdadas
const Input: React.FC<InputProps> = ( { icon: Icon, ...rest} ) => (
    <Container>
        {Icon && <Icon size={20} /> }
        <input {...rest} />
    </Container>
);

export default Input;
