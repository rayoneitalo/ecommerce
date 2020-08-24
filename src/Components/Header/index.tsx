import React from 'react';
import { Link } from 'react-router-dom';
import { Container, RightSide } from './styles';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to='/'>
        <Logo />
      </Link>
      <RightSide>
        <Link to='/shop'>Shop</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/sign'>Sign</Link>
      </RightSide>
    </Container>
  );
};

export default Header;
