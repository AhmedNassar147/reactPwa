import React from 'react';
import styled from 'styled-components';

const ListItem = props => <Item {...props} />;

const Item = styled.li`
  list-style: none;
  text-align: center;  
  padding: 7px;
  margin-top: 7px;
  background: grey;
  opacity: 0.5;
  border-radius: 2px;
`;

export default ListItem;
