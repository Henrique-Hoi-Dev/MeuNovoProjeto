import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import { TiThMenu } from 'react-icons/ti';
import { Container, Header, Profile } from './styles';

export default function Home() {
  const profile = useSelector((state) => state.user.profile);
  console.log(profile);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // função para deslogar
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  const useStyles = makeStyles({
    root: {
      borderRadius: 3,
      border: 0,
      color: '#9c98a6',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
    },
  });

  const classes = useStyles();

  return (
    <Container>
      <Header>
        <div>
          <TiThMenu onClick={handleClick} size={50} color="#4D4C4C" />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link className={classes.root} to="/perfil">
                Meu Perfil
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className={classes.root} to="/product">
                Cadastro de Produtos
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className={classes.root} to="/list">
                Lista de Produtos
              </Link>
            </MenuItem>
            <MenuItem className={classes.root} onClick={handleSignOut}>
              Logar Outra conta
            </MenuItem>
            <MenuItem className={classes.root} onClick={handleClose}>
              {' '}
              Caixa
            </MenuItem>
          </Menu>
        </div>

        <Profile>
          <nav>
            <h4>Profissional:</h4>
            <strong>{profile.name}</strong>
            <h4>Cargo:</h4>
            <strong>{profile.cargo ? profile.cargo : 'sem cargo'}</strong>
          </nav>

          <img
            src={
              profile.avatar
                ? profile.avatar.url
                : 'https://i.pinimg.com/474x/a6/70/05/a67005e9bf90bc529088205650784bba.jpg'
            }
            alt="avatar"
          />
        </Profile>
      </Header>
    </Container>
  );
}
