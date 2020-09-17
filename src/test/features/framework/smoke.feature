@smoke
Feature: Framework capabilities
  These scenarios smoke-test features of the test framework

  Scenario: Visit a page
  This page is fairly fast, so it should give a quick test
    When I navigate to the page "http://koalateasoftware.com"
    Then the page title is "Home"

  Scenario: Fail a test with an interesting screen grab
    When I navigate to the page "http://koalateasoftware.com"
    And I write to the html report "The following step will cause the scenario to fail. "
    Then the page title is "qwertyuiop"
    And I write to the html report "This step should be skipped"
