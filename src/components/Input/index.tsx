import React, { InputHTMLAttributes } from 'react';

import { Container }  from './styles'

//Interface para receber os atributos de um Input do HTML
type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => (
    <Container {...rest} />
);

export default Input;