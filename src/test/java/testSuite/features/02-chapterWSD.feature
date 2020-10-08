Feature: Chapter - Web Site Development
  Check that the chapter is there and that the chapter navigation works
  Internal elements are often subject to their own 'feature verification'
  (e.g. the test plan section is populated using the MarkDown parsing feature)

  Scenario: Directly visit chapter
    Given I navigate to the page "http://koalateasoftware.com/web-site-development"
    Then the page is fully drawn
    And the page title is "Web Site Development"
      # this 'landing page' for the chapter is a general introduction to web site development
    And the first heading is "Web Site Development"
    And the first heading does not contain "Test Plan For"

  Scenario Outline: HTML Syntax Compliance with W3C standards
    Given the w3C HTML tester reviews the file "<url>"
    Then the w3c HTML tester reports compliance
    Examples:
      | url                                                                 |
      | http://koalateasoftware.com/web-site-development                    |
      | http://koalateasoftware.com/web-site-development/koala-tea-software |

  Scenario Outline: Check links on a page
    Given the w3c link checker reviews the file "<url>"
    Then the w3c link checker reports compliance
    Examples:
      | url                                                                 |
      | http://koalateasoftware.com/web-site-development                    |
      | http://koalateasoftware.com/web-site-development/koala-tea-software |

  Scenario: Review chapter nav
    Given I navigate to the page "http://koalateasoftware.com/web-site-development"
    Then the nav for the chapter web site development contains
      | Web Site Development |
      | Koala Tea Software   |

  Scenario: Exercise the section navigation
    Given I navigate to the page "http://koalateasoftware.com/web-site-development"
    And I select the WSD chapter's nav option "Koala Tea Software"
    Then the page title is "Koala Tea Software"
      # by default, the user's initial view is of the test plan
    And the test plan is visible
    And the test results are not visible

  Scenario: Exercise the sub-section nav
  This Gherkin is a little bit smelly, but the default view of this section is the test plan section, so to
  get back from the results sub-section, you need to have performed got to that section.
  The code is basic, and the steps give sufficient granularity to make this approach acceptable.
    Given I navigate to the page "http://koalateasoftware.com/web-site-development"
    And the page title is "Web Site Development"
    And I select the WSD chapter's nav option "Koala Tea Software"
    And the page title is "Koala Tea Software"
    When I select the WSD chapter's sub-section nav option "Test Results"
    And the test plan is not visible
    And the test results are visible

    When I select the WSD chapter's sub-section nav option "Test Plan"
    And the test plan is visible
    And the test results are not visible

    When I select the WSD chapter's nav option "Web Site Development"
    And the test plan is not visible
    And the test results are not visible
    And the page title is "Web Site Development"


