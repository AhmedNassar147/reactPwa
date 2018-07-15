import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { HomeView } from 'components';
import { makeSelectUsers, makeSelectLoading, makeSelectError } from './selectors';
import homeActions from './actions';
import saga from './saga';
import reducer from './reducer';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount = () => this.props.fetchAllUsers();

  render() {
    const { loading, error, users } = this.props;
    return <HomeView users={users} loading={loading} error={error} />;
  }
}

HomePage.propTypes = {
  fetchAllUsers: PropTypes.func,
  loading: PropTypes.bool,
  users: PropTypes.array,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(homeActions.getUsers()),
  };
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });
export default compose(withReducer, withSaga, withConnect)(HomePage);
