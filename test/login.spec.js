const Login = require('./Login.page.js');

const login = new Login();

describe('Login Page', function () {

  // Replace with valid email address & password
  const validEmail = 'valid@email.com';
  const validPass = 'asdasd';

  beforeEach(function() {
    // Replace URL with correct login page
    browser.url('./');
  });


  it('should let you login with valid credentials', function () {
    login.goToUrl();
    login.login(validEmail, validPass);

    expect(login.isNotLoggedIn()).to.be.true;
  });
})