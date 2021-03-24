import React, { ButtonHTMLAttributes } from 'react';

import { Container }  from './styles'

//Interface para receber os atributos de um Button do HTML
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({children, ...rest }) => (
    <Container {...rest}>
        {children}
    </Container>
);

export default Button;