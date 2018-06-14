class Login {

  get url () { return 'account?execution=e1s1'}
  get email () { return $('#userid'); }
  get password () { return $('#password'); }
  get submit () { return $('input[name="_eventId_login"]'); }
  get errorMessage  ()  {return $('.global-errors');}

  login (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submit.click();
  }

  goToUrl () {
    browser.url('./' + this.url);
  }

  isNotLoggedIn () {
    return this.errorMessage.isVisibleWithinViewport();
  }
}

module.exports = Login;