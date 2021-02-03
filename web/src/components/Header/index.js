import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TiThMenu } from 'react-icons/ti';
import { Container, Menu, Profile } from './styles';
import logo from '../../assets/logo.png';

function Home() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      {/* Menu ate o memomento só linka a lista */}
      <Menu>
        <div>
          <Link to="/list">
            <TiThMenu size={50} color="#4D4C4C" />
          </Link>
        </div>
        <Profile>
          <nav>
            <h4>Profissional:</h4>
            <strong>{profile.name}</strong>
            <h4>Cargo:</h4>
            <strong>{profile.name}</strong>
          </nav>
          <img
            src={
              profile.avatar
                ? profile.avatar.url
                : 'https://avatars.githubusercontent.com/u/62766753?s=400&u=24cd8dbd3643a8e36dd9e4347810621a87c2a579&v=4s'
            }
            alt="avatar"
          />
        </Profile>
      </Menu>
    </Container>
  );
}

export default Home;
