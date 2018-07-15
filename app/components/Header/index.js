import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ title }) => <Title children={title} />;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  border: 1px solid palevioletred;
  box-shadow: 1px 1px 2px 0px;
`;

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
