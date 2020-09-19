Feature: Standards Compliance
  This set of tests is provided as an example of how to use these capabilities of the framework
  The intention is that you copy the ones you want into an appropriate place in your SUT test suite

  Scenario: CSS Compliance with W3C standards
  This is intended for testing directly created components of the SUT
  For example, Bootstrap 4' css will generate a load of error messages from this tester
    Given the w3C CSS tester reviews the file "http://koalateasoftware.com/index.css"
    Then the w3c CSS tester reports compliance