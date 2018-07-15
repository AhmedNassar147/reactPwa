import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DomLink = props => <StyledLink {...props} />;

const StyledLink = styled(Link) `
  font-size: 1.5em;
  text-decoration: none;
  color: white;
`;

export default DomLink;
