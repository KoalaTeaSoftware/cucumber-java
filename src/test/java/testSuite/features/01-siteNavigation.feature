@functional
Feature: Friendly URLs & Site Navigation
  The site allows the use of (and only really responds to) friendly URLs.

  Scenario Outline: Try silly addresses (in the address bar)
    Given I navigate to the page "<url>"
    Then the page title is "<expectedTitle>"
    Examples:
      | url                                 | expectedTitle      |
      | koalateasoftware.com/engine-trouble | Koala Tea Software |
#      | koalateasoftware.com/pigs/are/great | Koala Tea Software |

  Scenario Outline: Follow nav links on all pages
  This differs from the 'broken links' testing in that it demonstrates that the links in the nav bar actually take you
  to where you want to be taken.
  It is worth looking at a few pages, because relative links (if they are used) may work in some pages and not others.
  This may not be the fastest, or most elegant way of doing this, but it is simple.
    Given I navigate to the page "<url>"
    When I click on the nav link with text "<linkText>"
    Then the page title is "<expectedPageTitle>"
    Examples:
      | url                                                    | linkText             | expectedPageTitle    |
      | http://koalateasoftware.com/                           | Koala Tea Software   | Web Site Development |
#      | http://koalateasoftware.com/                           | About                      | About                      |
      | http://koalateasoftware.com/                           | Web Site Development | Web Site Development |
#      | http://koalateasoftware.com/                           | Software Quality Assurance | Software Quality Assurance |
      | http://koalateasoftware.com/about                      | Koala Tea Software   | Web Site Development |
#      | http://koalateasoftware.com/about                      | About                      | About                      |
      | http://koalateasoftware.com/about                      | Web Site Development | Web Site Development |
#      | http://koalateasoftware.com/about                      | Software Quality Assurance | Software Quality Assurance |
      | http://koalateasoftware.com/web-site-development       | Koala Tea Software   | Web Site Development |
#      | http://koalateasoftware.com/web-site-development       | About                      | About                      |
      | http://koalateasoftware.com/web-site-development       | Web Site Development | Web Site Development |
#      | http://koalateasoftware.com/web-site-development       | Software Quality Assurance | Software Quality Assurance |
      | http://koalateasoftware.com/software-quality-assurance | Koala Tea Software   | Web Site Development |
#      | http://koalateasoftware.com/software-quality-assurance | About                      | About                      |
      | http://koalateasoftware.com/software-quality-assurance | Web Site Development | Web Site Development |
#      | http://koalateasoftware.com/software-quality-assurance | Software Quality Assurance | Software Quality Assurance |
