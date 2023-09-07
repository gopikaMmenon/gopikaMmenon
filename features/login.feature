Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I verify login
    Examples:
      | username | password             | message                        |
      | u1903084 | 190070               | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
