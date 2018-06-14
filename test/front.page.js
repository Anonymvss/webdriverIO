class Front {
  // Replace these selectors
  get searchField () { return $('input[name="fh_search"]'); }

  goToUrl (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submit.click();
  }

  isLoggedIn () {
    this.email.clear();
    this.email.send("Test");
  }
}

module.exports = Front;