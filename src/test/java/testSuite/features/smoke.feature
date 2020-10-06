@smoke
Feature: SUT Page titles and delivery
  If these pages do not draw fully, then further testing is very likely to give false failures.

  Scenario Outline: Visit a page
    When I navigate to the page "<address>"
    Then the page is fully drawn
    And the page title is "<title>"
    Examples:
      | address                                                | title                      |
      | http://koalateasoftware.com                            | Koala Tea Software         |
      | http://koalateasoftware.com/about                      | About                      |
      | http://koalateasoftware.com/web-site-development       | Web Site Development       |
      | http://koalateasoftware.com/software-quality-assurance | Software Quality Assurance |
