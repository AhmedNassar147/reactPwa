import React from 'react';
import styled from 'styled-components';

const Form = props => <StyledForm {...props} />;

const StyledForm = styled.form`
  text-align: center;
  box-shadow: 0px 1px 2px 0px #EC407A;
  padding: 5px 0px;
`;

export default Form;
