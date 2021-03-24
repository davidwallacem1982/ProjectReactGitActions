import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.tertiary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    background-color: ${props => props.theme.colors.backgroundGrayEver};

    margin-bottom: 15px;
    border-radius:0px 10px 0px 10px;
    /* box-shadow: 5px 5px 5px 0px ${props => props.theme.colors.gray}; */

    > img {
        width: 250px;
        height: 50px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 10px;
    /* box-shadow: 5px 5px 5px 0px ${props => props.theme.colors.gray}; */

    background-color: ${props => props.theme.colors.primary};
`;

export const FormTitle = styled.h1`
    margin-bottom: 40px;

    color: ${props => props.theme.colors.black}; 

    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.sucess};  
    }
`;

