import React from 'react';

import { Container } from './styles';

import facebook from '~/assets/facebook.svg';
import twitter from '~/assets/twitter.svg';
import github from '~/assets/github.svg';

function IconsSocial() {
  return (
    <Container>
      <a href="http://">
        <img className="face" src={facebook} alt="facebook" />
      </a>
      <a href="http://">
        <img className="twi" src={twitter} alt="twitter" />
      </a>
      <a href="http://">
        <img className="git" src={github} alt="github" />
      </a>
    </Container>
  );
}

export default IconsSocial;
