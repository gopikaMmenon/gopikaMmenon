const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('/html/body/div[1]/div[2]/div[1]/form/table/tbody/tr[1]/td[2]/input');
    }

    get inputPassword () {
        return $('/html/body/div[1]/div[2]/div[1]/form/table/tbody/tr[2]/td[2]/input');
    }

    get btnSubmit () {
        return $('/html/body/div[1]/div[2]/div[1]/form/table/tbody/tr[3]/td/p/input');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
