import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import Wrapper from '../Wrapper';
import Header from '../Header';
import UsersList from '../UsersList';

const HomeView = ({ users, loading, error }) => {
  if (loading) return <Spinner />;
  if (error) return <Header title="Ooooh Please try again" />;
  return (
    <Wrapper>
      <Header title="Home Page" />
      <UsersList users={users} />
    </Wrapper>
  );
}

HomeView.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default HomeView;
