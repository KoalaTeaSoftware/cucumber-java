@standards
Feature: Standards Compliance
  This set of tests is provided as an example of how to use these capabilities of the framework
  The intention is that you copy the ones you want into an appropriate place in your SUT test suite

  Scenario Outline: CSS Compliance with W3C standards
  This is intended for testing directly created components of the SUT
  For example, Bootstrap 4' css will generate a load of error messages from this tester
    Given the w3C CSS tester reviews the file "<file>"
    Then the w3c CSS tester reports compliance
    Examples:
      | file                                                |
      | http://koalateasoftware.com/kts/essentialStyles.css |
      | http://koalateasoftware.com/kts/remainingStyles.css |

  Scenario Outline: HTML Compliance with W3C standards
    Given the w3C HTML tester reviews the file "<url>"
    Then the w3c HTML tester reports compliance
    Examples:
      | url                                                    |
      | http://koalateasoftware.com                            |
      | http://koalateasoftware.com/about                      |
      | http://koalateasoftware.com/web-site-development       |
      | http://koalateasoftware.com/software-quality-assurance |

  Scenario Outline: Check links on a page
    Given the w3c link checker reviews the file "<url>"
    Then the w3c link checker reports compliance
    Examples:
      | url                                                    |
      | http://koalateasoftware.com                            |
      | http://koalateasoftware.com/about                      |
      | http://koalateasoftware.com/web-site-development       |
      | http://koalateasoftware.com/software-quality-assurance |
