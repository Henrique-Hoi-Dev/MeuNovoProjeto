import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeader } from './styles';
import backIcon from '../../assets/back.svg';
import logo from '../../assets/logo.png';

function HeaderList() {
  return (
    <PageHeader>
      <div className="header">
        <Link to="/">
          <img src={backIcon} alt="voltar" />
        </Link>
        <img src={logo} alt="voltar" />
      </div>

      <div className="header-content">
        <h2>Lista Produto</h2>
      </div>
    </PageHeader>
  );
}

export default HeaderList;
