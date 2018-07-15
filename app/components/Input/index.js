import React from 'react';
import styled from 'styled-components';

const Label = props => <label {...props} />;

const Input = props => (
  <span>
    {props.isChkBx ? (<Label children="PremiumUser" htmlFor="isPremiumUser" />) : null}
    <StyledInput {...props} />
    {props.error && <Label children={props.error} style={{ color: 'red' }} />}
  </span>
);

const StyledInput = styled.input`
  width: 250px;
  color: black;
  border: 2px solid #EC407A;
  margin: 8px auto;
  padding: 2px;
  display: block;
  border-radius: 3px;
`;

export default Input;
