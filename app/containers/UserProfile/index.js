import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Wrapper, Spinner, UserForm } from 'components'
import { makeSelectUserInfo, makeSelectUserInfoError, makeSelectUserInfoSuccess } from './selectors';
import profileActions from './actions';
import reducer from './reducer';
import saga from './saga';
import validateForm from './validateForm';

class UserProfile extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function

  componentWillMount = () => this.props.getUserData(this.props.match.params.id);

  handleUpdateUserForm = e => {
    const { clearFormErrors, userInfo, updateUser, formErrors } = this.props;
    clearFormErrors();
    if (e !== undefined && e.preventDefault) e.preventDefault();
    validateForm(userInfo, formErrors, updateUser);
  };

  render() {
    const { userInfo, loading, error, success, userFormChanged } = this.props;
    if (loading) return <Spinner />;
    if (error && error.toJS().user) return <Wrapper children="Can't find User" />;
    return <Wrapper children={
      <UserForm error={error}
        updateUserForm={this.handleUpdateUserForm}
        userInfo={userInfo}
        userFormChanged={userFormChanged}
        success={success}
      />}
    />
  }
};

UserProfile.propTypes = {
  loading: PropTypes.bool,
  match: PropTypes.object,
  userFormChanged: PropTypes.func,
  getUserData: PropTypes.func,
  formErrors: PropTypes.func,
  clearFormErrors: PropTypes.func,
  updateUser: PropTypes.func,
  userInfo: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  success: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: (id) => dispatch(profileActions.getUserData(id)),
    userFormChanged: (inpName, inpValue) => dispatch(
      profileActions.userFormChanged({ inpName, inpValue })
    ),
    updateUser: (data) => dispatch(profileActions.updateUserData(data)),
    formErrors: (err) => dispatch(profileActions.validateForm(err)),
    clearFormErrors: () => dispatch(profileActions.clearErrors()),
  };
}

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectUserInfo(),
  error: makeSelectUserInfoError(),
  success: makeSelectUserInfoSuccess(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'userProfile', reducer });
const withSaga = injectSaga({ key: 'userProfile', saga });
export default compose(withReducer, withSaga, withConnect)(UserProfile);
