Feature: Test Results
  These are embedded files generated and deployed by another process
  There is a slight risk that the files are not present, or the embedding is not correctly set up

  Scenario: View test results
    Given I navigate to the page "http://koalateasoftware.com/web-site-development/koala-tea-software"
    When I select the WSD chapter's sub-section nav option "Test Results"
    Then the test results holder is not empty
