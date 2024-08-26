let login = '//a[@href="/login"]'; //declaration of variable for passing

class DemoPOM {
  loginSignupLink() {
    return login; //pass the varible
  }
  ReturnHomePg() {
    return cy.xpath('//div[@class="shop-menu pull-right"]//a[text()=" Home"]');
    //pass the xpath
  }
}
export default DemoPOM;
