function validate() {
  const password = document.getElementById('password');
  const passwordConf = document.getElementById('passwordConf');

  if (password.value != passwordConf.value) {
    // passwords don't match
    password.classList.add('error');
    passwordConf.classList.add('error');

    const errorFeedback = document.querySelector('#password ~ .error-feedback');
    errorFeedback.textContent = 'Passwords don\'t match';

    return false;
  }

  return true;
}