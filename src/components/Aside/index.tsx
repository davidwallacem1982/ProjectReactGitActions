import React, {useState} from 'react';
import logImg from '../../assets/icons/basics/logo.png';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import Toggle from '../Toggle';

import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter
} from './styles';
 
 import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,  
  MdExitToApp,
  MdClose,
  MdMenu
} from 'react-icons/md';

const Aside: React.FC = () => {
  
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();
  const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

 return (
    <Container  menuIsOpen={toggleMenuIsOpened}>
     <Header>
        <ToggleMenu onClick={handleToggleMenu}>
                { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
        </ToggleMenu>
        <LogImg src={logImg} alt="Logo MC"/>
      </Header>
      <MenuContainer>

        <MenuItemLink href="/">
          <MdDashboard/>
          Dashborad
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward/>
          Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward/>
          Saídas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp/>
          Sair
        </MenuItemButton>
        <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
          <Toggle
              labelLeft="Light"
              labelRight="Dark"
              checked={darkTheme}
              onChange={handleChangeTheme}
          />
        </ThemeToggleFooter>
      </MenuContainer>
    </Container>    
  );
}

export default Aside;
