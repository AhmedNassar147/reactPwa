import React from 'react';
import styled from 'styled-components';

const Button = props => <StyledButton {...props} />;

const StyledButton = styled.button`
  color: white;
  margin: 4px;
  padding: 10px;
  width: 200px;
  background: #EC407A;
  border-radius: 2px;
  cursor: pointer;
`;
export default Button;
