import React from 'react';
import PropTypes from 'prop-types';
import DomLink from '../DomLink';
import List from '../List';
import ListItem from '../ListItem';

const UsersList = ({ users }) => (
  <List children=
    {users.map(user =>
      <DomLink
        key={user.id}
        to={`/user-profile/${user.id}`}
        children={<ListItem children={user.username} />}
      />
    )}
  />
);

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
