import React from 'react';
import { Link } from 'react-router-dom';

import { FaListUl, FaPencilAlt } from 'react-icons/fa';
import { Container, ButtonMenu, Menu } from './styles';
import logo from '../../assets/logo.png';

function Home() {
  return (
    <Container>
      <Menu>
        <div className="logo-home">
          <img src={logo} alt="logo" />
          <h2>Controle de estoque</h2>
        </div>
      </Menu>
      <ButtonMenu>
        <div className="button-home">
          <Link to="/product" className="record-product">
            <FaPencilAlt /> Registrar Produto
          </Link>
          <Link to="/list" className="list">
            <FaListUl size="25" /> Lista de Produtos
          </Link>
        </div>
      </ButtonMenu>
    </Container>
  );
}

export default Home;
