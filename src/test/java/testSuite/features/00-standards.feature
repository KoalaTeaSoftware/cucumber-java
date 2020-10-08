@standards
Feature: Standards Compliance
  Syntax errors could be a reason for functional failure, so it is worth regarding this as a smoke test.

  Scenario Outline: CSS Compliance with W3C standards
  This is intended for testing directly created components of the SUT
  For example, Bootstrap 4' css will generate a load of error messages from this tester
    Given the w3C CSS tester reviews the file "<file>"
    Then the w3c CSS tester reports compliance
    Examples:
      | file                                                |
      | http://koalateasoftware.com/kts/stylesEssential.css |
      | http://koalateasoftware.com/kts/stylesRemaining.css |

  Scenario Outline: HTML Compliance with W3C standards
    Given the w3C HTML tester reviews the file "<url>"
    Then the w3c HTML tester reports compliance
    Examples:
      | url                               |
      | http://koalateasoftware.com       |
      | http://koalateasoftware.com/about |

  Scenario Outline: Check links on a page
    Given the w3c link checker reviews the file "<url>"
    Then the w3c link checker reports compliance
    Examples:
      | url                                                    |
      | http://koalateasoftware.com                            |
      | http://koalateasoftware.com/about                      |
