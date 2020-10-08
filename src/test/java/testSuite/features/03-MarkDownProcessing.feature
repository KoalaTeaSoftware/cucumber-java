Feature: MarkDown Processing
  Files using MarkDown conventions are used by the system. It is necessary to see that the files are
  1. Correctly referred-to
  2. Correctly interpreted (the final validation has to be subject to human judgement, but this testing can highlight catastrophic failures)

  Scenario: Visit pages giving details of WSD projects
  The MarkDown could contain all sort of stuff, but in this case, it should give the main heading for the test plan
  The assumption is that, if it has parsed that, it may well parse the rest.
  Catastrophic failure of the parsing is likely to prevent completion of the page.
    Given I navigate to the page "http://koalateasoftware.com/web-site-development/koala-tea-software"
      # by default, the test plan is the 'active' member of the navigation
    And the first heading is "Test Plan For Koala Tea Software"
    And the page is fully drawn
