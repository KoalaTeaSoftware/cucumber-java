@functional
Feature: Friendly URLs & Site Navigation
  The site allows (and only really responds to) the use of friendly URLs. The Given steps exercise 'good' URLs
  This differs from the 'broken links' testing in that it demonstrates that the links in the nav bar take you
  to where you expect to be taken.

  Scenario Outline: Follow nav links on all pages
  It is worth looking at all pages, because relative links (if they are used) may work in some pages and not others
  This may not be the fastest, or most elegant way of doing this, but it is simple
    Given I navigate to the page "<url>"
    When I click on the nav link with text "<linkText>"
    Then the page title is "<expectedPageTitle>"
    Examples:
      | url                                                    | linkText                   | expectedPageTitle          |
      | http://koalateasoftware.com/                           | Koala Tea Software         | Koala Tea Software         |
      | http://koalateasoftware.com/                           | About                      | About                      |
      | http://koalateasoftware.com/                           | Web Site Development       | Web Site Development       |
      | http://koalateasoftware.com/                           | Software Quality Assurance | Software Quality Assurance |
      | http://koalateasoftware.com/about                      | Koala Tea Software         | Koala Tea Software         |
      | http://koalateasoftware.com/about                      | About                      | About                      |
      | http://koalateasoftware.com/about                      | Web Site Development       | Web Site Development       |
      | http://koalateasoftware.com/about                      | Software Quality Assurance | Software Quality Assurance |
      | http://koalateasoftware.com/web-site-development       | Koala Tea Software         | Koala Tea Software         |
      | http://koalateasoftware.com/web-site-development       | About                      | About                      |
      | http://koalateasoftware.com/web-site-development       | Web Site Development       | Web Site Development       |
      | http://koalateasoftware.com/web-site-development       | Software Quality Assurance | Software Quality Assurance |
      | http://koalateasoftware.com/software-quality-assurance | Koala Tea Software         | Koala Tea Software         |
      | http://koalateasoftware.com/software-quality-assurance | About                      | About                      |
      | http://koalateasoftware.com/software-quality-assurance | Web Site Development       | Web Site Development       |
      | http://koalateasoftware.com/software-quality-assurance | Software Quality Assurance | Software Quality Assurance |

  Scenario Outline: Friendly response to bad URLs
    Given I navigate to the page "<url>"
    Then the page title is "<expectedPageTitle>"
    Examples:
      | url                                                     | expectedPageTitle    |
      | http://koalateasoftware.com/web-suite-development       | Koala Tea Software   |
      | http://koalateasoftware.com/about/nothing               | About                |
      | http://koalateasoftware.com/web-site-development/disney | Web Site Development |
