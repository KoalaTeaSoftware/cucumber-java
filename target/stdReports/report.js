$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/features/framework/smoke.feature");
formatter.feature({
  "name": "Framework capabilities",
  "description": "  These scenarios smoke-test features of the test framework",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Visit a page",
  "description": "    This page is fairly fast, so it should give a quick test",
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
  "location": "testFramework.steps.basic.iNavigateToThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title is \"Home\"",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.basic.thePageTitleIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Fail a test with an interesting screen grab",
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
  "location": "testFramework.steps.basic.iNavigateToThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write to the html report \"The following step will cause the scenario to fail. \"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.basic.iWriteToTheHtmlReport(java.lang.String)"
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
  "location": "testFramework.steps.basic.thePageTitleIs(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: The page title is not as expected expected:\u003c[qwertyuiop]\u003e but was:\u003c[Home]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat testFramework.steps.basic.thePageTitleIs(basic.java:58)\r\n\tat ✽.the page title is \"qwertyuiop\"(file:///D:/Web%20Site%20Work/cucumberframe/cucumber-java/src/test/features/framework/smoke.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I write to the html report \"This step should be skipped\"",
  "keyword": "And "
});
formatter.match({
  "location": "testFramework.steps.basic.iWriteToTheHtmlReport(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "Screenshot taken because this scenario is marked as FAILED");
formatter.write("\u003chtml lang\u003d\"en\"\u003e\u003chead\u003e\n    \u003c!-- hello --\u003e\n    \u003ctitle\u003eHome\u003c/title\u003e\n    \u003clink rel\u003d\"apple-touch-icon\" sizes\u003d\"180x180\" href\u003d\"/apple-touch-icon.png\"\u003e\n    \u003clink rel\u003d\"icon\" type\u003d\"image/png\" sizes\u003d\"32x32\" href\u003d\"/favicon-32x32.png\"\u003e\n    \u003clink rel\u003d\"icon\" type\u003d\"image/png\" sizes\u003d\"16x16\" href\u003d\"/favicon-16x16.png\"\u003e\n    \u003clink rel\u003d\"manifest\" href\u003d\"/site.webmanifest\"\u003e\n    \u003cmeta name\u003d\"robots\" content\u003d\"noindex,nofollow\"\u003e\n\u003cmeta http-equiv\u003d\"Cache-Control\" content\u003d\"no-cache\"\u003e\n\u003cmeta http-equiv\u003d\"Cache-Control\" content\u003d\"no-store\"\u003e\n\u003cmeta http-equiv\u003d\"Cache-Control\" content\u003d\"must-revalidate\"\u003e\n\u003cmeta http-equiv\u003d\"Pragma\" content\u003d\"no-cache\"\u003e\n\u003cmeta http-equiv\u003d\"Expires\" content\u003d\"0\"\u003e\n\n\u003cmeta charset\u003d\"utf-8\"\u003e\n\u003cmeta name\u003d\"viewport\" content\u003d\"width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\"\u003e\n\u003c!--suppress JSUnresolvedLibraryURL, SpellCheckingInspection --\u003e\n\u003clink rel\u003d\"stylesheet\" href\u003d\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity\u003d\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin\u003d\"anonymous\"\u003e\n\u003c!--suppress JSUnresolvedLibraryURL, SpellCheckingInspection --\u003e\n\u003cscript src\u003d\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity\u003d\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin\u003d\"anonymous\"\u003e\u003c/script\u003e\n\u003c!--suppress JSUnresolvedLibraryURL, SpellCheckingInspection --\u003e\n\u003cscript src\u003d\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity\u003d\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin\u003d\"anonymous\"\u003e\u003c/script\u003e\n\u003c!--suppress JSUnresolvedLibraryURL, SpellCheckingInspection --\u003e\n\u003cscript src\u003d\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity\u003d\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin\u003d\"anonymous\"\u003e\u003c/script\u003e\n\u003c!--suppress HtmlUnknownTarget --\u003e\n\u003clink rel\u003d\"stylesheet\" type\u003d\"text/css\" href\u003d\"/index.css\"\u003e\n\n\u003c!--\u003cscript src\u003d\"https://cdn.jsdelivr.net/npm/vue\"\u003e\u003c/script\u003e--\u003e\n\u003c!--\u003clink rel\u003d\"apple-touch-icon\" sizes\u003d\"152x152\" href\u003d\"/apple-touch-icon.png\" --\u003e\n\u003c!--\u003clink rel\u003d\"icon\" type\u003d\"image/png\" sizes\u003d\"32x32\" href\u003d\"/favicon-32x32.png\"\u003e--\u003e\n\u003c!--\u003clink rel\u003d\"icon\" type\u003d\"image/png\" sizes\u003d\"16x16\" href\u003d\"/favicon-16x16.png\"\u003e--\u003e\n\u003c!--link rel\u003d\"manifest\" href\u003d\"/site.webmanifest\" \u003e--\u003e\n\u003c!--\u003clink rel\u003d\"mask-icon\" href\u003d\"/safari-pinned-tab.svg\"--\u003e\n\u003c/head\u003e\n\u003cbody id\u003d\"home\" class\u003d\"container-fluid\"\u003e\n\u003cdiv id\u003d\"furniture\"\u003e\n    \u003cnav id\u003d\"mainNav\" class\u003d\"nav navbar navbar-expand-lg navbar-light bg-light\"\u003e\n    \u003ca class\u003d\"navbar-brand\" href\u003d\"/\"\u003eKoala Tea Software\u003c/a\u003e\n    \u003cbutton class\u003d\"navbar-toggler\" type\u003d\"button\" data-toggle\u003d\"collapse\" data-target\u003d\"#navbarNavAltMarkup\" aria-controls\u003d\"navbarNavAltMarkup\" aria-expanded\u003d\"false\" aria-label\u003d\"Toggle navigation\"\u003e\n        \u003cspan class\u003d\"navbar-toggler-icon\"\u003e\u003c/span\u003e\n    \u003c/button\u003e\n    \u003cdiv class\u003d\"collapse navbar-collapse\" id\u003d\"navbarNavAltMarkup\"\u003e\n        \u003cdiv class\u003d\"navbar-nav\"\u003e\n            \u003ca class\u003d\"nav-item nav-link\" id\u003d\"projectsNav\" href\u003d\"projects\"\u003eProjects \u003c/a\u003e        \u003c/div\u003e\n    \u003c/div\u003e\n\u003c/nav\u003e\n\n\u003c/div\u003e\n\u003cdiv id\u003d\"contents\" class\u003d\"container-fluid\"\u003e\n    \u003cdiv class\u003d\"container-fluid\"\u003e\n    \u003ch1\u003eWelcome\u003c/h1\u003e\n    \u003cp\u003eI\u0027m Mark\u003c/p\u003e\n\u003c/div\u003e\n\u003c/div\u003e\n\u003cdiv id\u003d\"footer\"\u003e\n    \u003cdiv id\u003d\"footerContents\" class\u003d\"row\"\u003e\n\u003c/div\u003e\n\u003c/div\u003e\n\n\u003c/body\u003e\u003c/html\u003e");
formatter.after({
  "status": "passed"
});
});