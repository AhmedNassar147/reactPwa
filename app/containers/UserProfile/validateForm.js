const validateEmail = (email) => {
  const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (filter.test(email)) return true;
  else return false;
};

const validateText = (text, num) => {
  if (text.length >= num) return false;
  else return true;
}

const validateForm = (userInfo, formErrors, updateUser) => {
  if (!userInfo || Object.keys(userInfo).length < 0) return;
  if (validateText(userInfo.username, 3)) {
    formErrors({ username: 'userName should has at least 2 characters' });
    return;
  }
  if (!validateEmail(userInfo.email)) {
    formErrors({ email: 'invalid email' });
    return;
  }
  updateUser(userInfo);
};
export default validateForm;

