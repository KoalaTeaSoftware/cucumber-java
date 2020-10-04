@smoke
Feature: SUT capabilities
  These scenarios smoke-test features of the test framework

  Scenario Outline: Visit a page
    When I navigate to the page "<address>"
    Then the page is fully drawn
    And the page title is "<title>"
    Examples:
      | address                                                | title              |
      | http://koalateasoftware.com                            | Koala Tea Software |
      | http://koalateasoftware.com/about                      | Koala Tea Software |
      | http://koalateasoftware.com/web-site-development       | Koala Tea Software |
      | http://koalateasoftware.com/software-quality-assurance | Koala Tea Software |
