import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png'

export const Container = styled.div`
    // conseguir que o container tenha 10% do viewport height (da parte visível da tela que o usuário tem)
    height: 100vh;
    display: flex;
    // estica ao máximo que puder
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }
    }

    // eu quero estilizar somente os 'a's que vierem diretamente do meu content
    > a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            display: flex;
            align-items: center;

            svg {
                margin-right: 16px;
            }

            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }
    }
`;

export const Background = styled.div`
    // ocupar todo espaço MENOS o 700px
    flex: 1;
    background: url(${signUpBackgroundImg}) no-repeat center;
    // cobrir o tamanho do que eu tenho sobrando
    background-size: cover;
`;
