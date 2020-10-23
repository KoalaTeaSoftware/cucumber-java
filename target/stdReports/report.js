$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/testFramework/features/01-visit-web-pages.feature");
formatter.feature({
  "name": "Visit Web Pages",
  "description": "  These scenarios smoke-test features of the test framework",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Visit a the default SUT page",
  "description": "  Thus checks the defaults set in the SUT configuration.\n  koalateasoftware.com does not have any built in redirection to https. Other sites may give you false negatives",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I navigate to the page \"\u003caddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the page title is \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the page scheme is \"\u003cscheme\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "address",
        "title",
        "scheme"
      ]
    },
    {
      "cells": [
        "/",
        "Web Site Development",
        "http"
      ]
    },
    {
      "cells": [
        "koalateasoftware.com/",
        "Web Site Development",
        ""
      ]
    },
    {
      "cells": [
        "http://koalateasoftware.com",
        "Web Site Development",
        "http"
      ]
    },
    {
      "cells": [
        "https://koalateasoftware.com",
        "Web Site Development",
        "https"
      ]
    },
    {
      "cells": [
        "http://swordsandclapboards.com/",
        "Swords and Clapboards",
        "https"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Visit a the default SUT page",
  "description": "  Thus checks the defaults set in the SUT configuration.\n  koalateasoftware.com does not have any built in redirection to https. Other sites may give you false negatives",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the page \"/\"",
  "keyword": "When "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.iNavigateToThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title is \"Web Site Development\"",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageTitleIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page scheme is \"http\"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageSchemeIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Visit a the default SUT page",
  "description": "  Thus checks the defaults set in the SUT configuration.\n  koalateasoftware.com does not have any built in redirection to https. Other sites may give you false negatives",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the page \"koalateasoftware.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.iNavigateToThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title is \"Web Site Development\"",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageTitleIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page scheme is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageSchemeIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Visit a the default SUT page",
  "description": "  Thus checks the defaults set in the SUT configuration.\n  koalateasoftware.com does not have any built in redirection to https. Other sites may give you false negatives",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the page \"http://koalateasoftware.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.iNavigateToThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title is \"Web Site Development\"",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageTitleIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page scheme is \"http\"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageSchemeIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Visit a the default SUT page",
  "description": "  Thus checks the defaults set in the SUT configuration.\n  koalateasoftware.com does not have any built in redirection to https. Other sites may give you false negatives",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the page \"https://koalateasoftware.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.iNavigateToThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title is \"Web Site Development\"",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageTitleIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page scheme is \"https\"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageSchemeIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Visit a the default SUT page",
  "description": "  Thus checks the defaults set in the SUT configuration.\n  koalateasoftware.com does not have any built in redirection to https. Other sites may give you false negatives",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the page \"http://swordsandclapboards.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.iNavigateToThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title is \"Swords and Clapboards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageTitleIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page scheme is \"https\"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageSchemeIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/testFramework/features/02-screengrab.feature");
formatter.feature({
  "name": "Automatic screen grab when a scenario fails",
  "description": "  Whenever a step fails (causing a scenario to fail) a screen grab will be captured.\n  If you see the screen grab in the report, then this smoke test passes.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Fail a test and get a screen grab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the page \"http://koalateasoftware.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.iNavigateToThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write to the html report \"The following step will cause the scenario to fail. \"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.Framework.iWriteToTheHtmlReport(java.lang.String)"
});
formatter.write("The following step will cause the scenario to fail. ");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title is \"qwertyuiop\"",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.WebPageSteps.thePageTitleIs(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: The page title is not as expected expected:\u003c[qwertyuiop]\u003e but was:\u003c[Web Site Development]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat testFramework.steps.WebPageSteps.thePageTitleIs(WebPageSteps.java:29)\r\n\tat ✽.the page title is \"qwertyuiop\"(file:///D:/Web%20Site%20Work/cucumberframe/cucumber-java/src/test/java/testFramework/features/02-screengrab.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I write to the html report \"This step should be skipped\"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.Framework.iWriteToTheHtmlReport(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "Screenshot taken because this scenario is marked as FAILED");
formatter.write("\u003chtml xmlns\u003d\"http://www.w3.org/1999/xhtml\" lang\u003d\"en\" xml:lang\u003d\"en\"\u003e\u003chead\u003e\n    \u003cmeta charset\u003d\"utf-8\"\u003e\u003cmeta name\u003d\"viewport\" content\u003d\"width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\"\u003e\u003cmeta name\u003d\"robots\" content\u003d\"noindex,nofollow\"\u003e    \u003ctitle\u003eWeb Site Development\u003c/title\u003e\n    \u003clink rel\u003d\"stylesheet\" href\u003d\"/kts/stylesEssential.css\"\u003e\n    \u003clink rel\u003d\"apple-touch-icon\" sizes\u003d\"180x180\" href\u003d\"/kts/apple-touch-icon.png\"\u003e\n    \u003clink rel\u003d\"icon\" type\u003d\"image/png\" sizes\u003d\"32x32\" href\u003d\"/kts/favicon-32x32.png\"\u003e\n    \u003clink rel\u003d\"icon\" type\u003d\"image/png\" sizes\u003d\"16x16\" href\u003d\"/kts/favicon-16x16.png\"\u003e\n    \u003clink rel\u003d\"manifest\" href\u003d\"/site.webmanifest\"\u003e\n\u003c/head\u003e\n\u003cbody class\u003d\"container-fluid\"\u003e\n\u003cdiv id\u003d\"furniture\"\u003e\n    \u003cnav id\u003d\"mainNav\" class\u003d\"nav navbar navbar-expand-lg navbar-light bg-light\"\u003e\n        \u003ca class\u003d\"navbar-brand\" href\u003d\"/?33064d937c2dfe5448cdef1f4671bebf\"\u003eKoala Tea Software\u003c/a\u003e\n        \u003cbutton class\u003d\"navbar-toggler\" type\u003d\"button\" data-toggle\u003d\"collapse\" data-target\u003d\"#navbarNavAltMarkup\" aria-controls\u003d\"navbarNavAltMarkup\" aria-expanded\u003d\"false\" aria-label\u003d\"Toggle navigation\"\u003e\n            \u003cspan class\u003d\"navbar-toggler-icon\"\u003e\u003c/span\u003e\n        \u003c/button\u003e\n        \u003cdiv class\u003d\"collapse navbar-collapse\" id\u003d\"navbarNavAltMarkup\"\u003e\n            \u003cdiv class\u003d\"navbar-nav\"\u003e\n                \u003c!--suppress HtmlUnknownTarget --\u003e\n\u003c!--                \u003ca class\u003d\"nav-item nav-link\" href\u003d\"/software-quality-assurance?--\u003e\u003c!--\"\u003eSoftware Quality--\u003e\n\u003c!--                    Assurance\u003c/a\u003e--\u003e\n                \u003c!--suppress HtmlUnknownTarget --\u003e\n                \u003ca class\u003d\"nav-item nav-link\" href\u003d\"/web-site-development?33064d937c2dfe5448cdef1f4671bebf\"\u003eWeb Site Development\u003c/a\u003e\n                \u003c!--suppress HtmlUnknownTarget --\u003e\n\u003c!--                \u003ca class\u003d\"nav-item nav-link\" href\u003d\"/about?--\u003e\u003c!--\"\u003eAbout\u003c/a\u003e--\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/nav\u003e\n\u003c/div\u003e\n\u003cdiv id\u003d\"contents\" class\u003d\"container-fluid\"\u003e\n    \u003cdiv class\u003d\"container-fluid\" id\u003d\"web-site-development\"\u003e\n    \u003cnav id\u003d\"projNav\" class\u003d\"nav navbar navbar-expand-lg navbar-light bg-light\"\u003e\n        \u003c!--suppress HtmlUnknownTarget --\u003e\n        \u003ca class\u003d\"navbar-brand\" href\u003d\"/web-site-development?33064d937c2dfe5448cdef1f4671bebf\"\u003eWeb Site Development\u003c/a\u003e\n        \u003cbutton class\u003d\"navbar-toggler\" type\u003d\"button\" data-toggle\u003d\"collapse\" data-target\u003d\"#projNavAltMarkup\" aria-controls\u003d\"projNavAltMarkup\" aria-expanded\u003d\"false\" aria-label\u003d\"Toggle navigation\"\u003e\n            \u003cspan class\u003d\"navbar-toggler-icon\"\u003e\u003c/span\u003e\n        \u003c/button\u003e\n        \u003cdiv class\u003d\"collapse navbar-collapse\" id\u003d\"projNavAltMarkup\"\u003e\n            \u003cdiv class\u003d\"navbar-nav\"\u003e\n                \u003c!--suppress HtmlUnknownTarget --\u003e\n                \u003ca class\u003d\"nav-item nav-link\" href\u003d\"/web-site-development/koala-tea-software?33064d937c2dfe5448cdef1f4671bebf\"\u003eKoala Tea Software\u003c/a\u003e\n                \u003ca class\u003d\"nav-item nav-link\" href\u003d\"/web-site-development/swords-and-clapboards?33064d937c2dfe5448cdef1f4671bebf\"\u003eSwords and Clapboards\u003c/a\u003e\n                \u003ca class\u003d\"nav-item nav-link\" href\u003d\"/web-site-development/rose-goldthorp?33064d937c2dfe5448cdef1f4671bebf\"\u003eRose Goldthorp\u003c/a\u003e\n                \u003ca class\u003d\"nav-item nav-link\" href\u003d\"/web-site-development/the-greenlands?33064d937c2dfe5448cdef1f4671bebf\"\u003eThe Greenlands\u003c/a\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/nav\u003e\n    \u003cdiv class\u003d\"container-fluid\"\u003e\n                    \u003ch1\u003eWeb Site Development\u003c/h1\u003e\n            \u003cp class\u003d\"lead\"\u003eKoala Tea Software also develops web sites. Use the nav-bar above to see more details for\n                specific web sites.\n            \u003c/p\u003e\n            \u003cp\u003eThe sections of this chapter provide samples demonstrating the quality control that is applied to these sites. Clearly, these test suites are incomplete.\u003c/p\u003e\n            \u003ch2\u003eDev. Stack / Options\u003c/h2\u003e\n            \u003cul class\u003d\"list-group\"\u003e\n                \u003cli class\u003d\"list-group-item\"\u003eHTML\u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003eJavaScript (raw and / JQuery)\u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003eCSS (from SCSS and compressed)\u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003ePHP\u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003e\n                    Integrations with:\n                    \u003cul class\u003d\"list-group\"\u003e\n                        \u003cli class\u003d\"list-group-item\"\u003eMailchimp\u003c/li\u003e\n                        \u003cli class\u003d\"list-group-item\"\u003eWordPress (i.e. using WP to provide a simple CMS for The Business to\n                            provide contents)\n                        \u003c/li\u003e\n                    \u003c/ul\u003e\n                \u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003eAPIs (the Mailchimp and WP integrations pass data via RESsTful APIs\u003c/li\u003e\n            \u003c/ul\u003e\n            \u003ch2\u003eQuality Management\u003c/h2\u003e\n            \u003cp\u003eDevelopment takes a test driven approach (tempered by pragmatic considerations). Quality Control is\n                effected\n                using the Cucumber / Java test framework detailed elsewhere on this site. The results of the mst recent\n                run\n                of the test are displayed on this site. Here are some of the rest of the tools used:\n            \u003c/p\u003e\n            \u003cul class\u003d\"list-group\"\u003e\n                \u003cli class\u003d\"list-group-item\"\u003eChrome Lighthouse - This is a manual, dev-stage activity. We aim for 100%\n                    reports on all the aspects tested (but a pinch of salt, and client consultation tempers this aim).\n                \u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003e\n                    \u003ca href\u003d\"https://www.jetbrains.com/youtrack/\" rel\u003d\"noreferrer\" title\u003d\"The project management tool designed for agile teams\" target\u003d\"_blank\"\u003eYouTrack\u003c/a\u003e this is\n                    used to record non-urgent fixes / features) vital fixes bypass this.\n                \u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003eGitHub\u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003e\n                    \u003ca href\u003d\"https://www.jetbrains.com/phpstorm/\" rel\u003d\"noreferrer\" title\u003d\"The Lightning-Smart PHP IDE\" target\u003d\"_blank\"\u003ePHPStorm\u003c/a\u003e another IntelliJ product. It\n                    actually lives up to its claims, and eases the producing good quality code.\n                \u003c/li\u003e\n                \u003cli class\u003d\"list-group-item\"\u003eCucumber / Java test framework - this both captures and verifies the\n                    implementation of required functionality.\n                \u003c/li\u003e\n            \u003c/ul\u003e\n                \u003c/div\u003e\n\u003c/div\u003e\n\n\u003c/div\u003e\n\u003c!--suppress SpellCheckingInspection --\u003e\n\u003cscript src\u003d\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity\u003d\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin\u003d\"anonymous\"\u003e\u003c/script\u003e\n\u003c!--suppress SpellCheckingInspection --\u003e\n\u003cscript src\u003d\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\" integrity\u003d\"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN\" crossorigin\u003d\"anonymous\"\u003e\u003c/script\u003e\n\u003c!--suppress SpellCheckingInspection --\u003e\n\u003cscript src\u003d\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\" integrity\u003d\"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV\" crossorigin\u003d\"anonymous\"\u003e\u003c/script\u003e\n\u003c!--suppress SpellCheckingInspection --\u003e\n\u003clink rel\u003d\"stylesheet\" href\u003d\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" integrity\u003d\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\" crossorigin\u003d\"anonymous\"\u003e\n\u003clink rel\u003d\"stylesheet\" href\u003d\"/kts/stylesRemaining.css\"\u003e\n\u003cscript\u003edocument.title \u003d \"Web Site Development\";\u003c/script\u003e\n\u003cdiv id\u003d\"footer\" class\u003d\"container-fluid\"\u003e\n    \u0026nbsp;\n\u003c/div\u003e\n\n\u003c/body\u003e\u003c/html\u003e");
formatter.after({
  "status": "passed"
});
});