import React from 'react';
import PropTypes from 'prop-types';

import IconsSocial from '~/components/IconsSocial';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <IconsSocial />
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
