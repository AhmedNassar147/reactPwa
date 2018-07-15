import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';


const UserForm = ({ error, userInfo, updateUserForm, userFormChanged, success }) => (
  <Form>
    <h2 children={success && success.toJS().msg} style={{ color: 'grey' }} />
    <Input
      type="text"
      name="username"
      onChange={(e) => userFormChanged(e.target.name, e.target.value)}
      error={error && error.toJS().username}
      value={userInfo.username ? userInfo.username : ''}
      placeholder="username"
    />
    <Input
      type="email"
      name="email"
      onChange={(e) => userFormChanged(e.target.name, e.target.value)}
      error={error && error.toJS().email}
      value={userInfo.email ? userInfo.email : ''}
      placeholder="email"
    />
    <Input
      type="text"
      name="numberOfBookings"
      onChange={(e) => userFormChanged(e.target.name, e.target.value)}
      value={userInfo.numberOfBookings ? userInfo.numberOfBookings : ''}
      placeholder="number of books"
    />
    <Input
      type="checkbox"
      name='isPremiumUser'
      id="isPremiumUser"
      onChange={(e) => userFormChanged(e.target.name, e.target.checked)}
      checked={userInfo.isPremiumUser ? userInfo.isPremiumUser : false}
      style={{ display: 'inline', width: 30 }}
      isChkBx={true}
    />
    <Input
      type="text"
      name="premiumCode"
      onChange={(e) => userFormChanged(e.target.name, e.target.value)}
      value={userInfo.premiumCode ? userInfo.premiumCode : ''}
      placeholder="premium code"
      disabled={userInfo.isPremiumUser}
    />
    <Button children="Update Data" onClick={(e) => updateUserForm(e)} />
  </Form>
);

UserForm.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  success: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  userInfo: PropTypes.object,
  updateUserForm: PropTypes.func,
  userFormChanged: PropTypes.func,
};

export default UserForm;
