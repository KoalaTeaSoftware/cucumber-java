$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/features/framework/standards.feature");
formatter.feature({
  "name": "Standards Compliance",
  "description": "  This set of tests is provided as an example of how to use these capabilities of the framework\n  The intention is that you copy the ones you want into an appropriate place in your SUT test suite",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@standards"
    }
  ]
});
formatter.scenario({
  "name": "CSS Compliance with W3C standards",
  "description": "  This is intended for testing directly created components of the SUT\n  For example, Bootstrap 4\u0027 css will generate a load of error messages from this tester",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@standards"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the w3C CSS tester reviews the file \"http://koalateasoftware.com/index.css\"",
  "keyword": "Given "
});
formatter.match({
  "location": "testFramework.steps.CssSyntaxCheckSteps.theWCCSSTesterReviewsTheFile(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the w3c CSS tester reports compliance",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.CssSyntaxCheckSteps.theWCCSSTesterReportsCompliance()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "HTML Compliance with W3C standards",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@standards"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the w3C HTML tester reviews the file \"http://koalateasoftware.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "testFramework.steps.HtmlSyntaxCheckSteps.theW3CHTMLTesterReviewsTheFile(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the w3c HTML tester reports compliance",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.HtmlSyntaxCheckSteps.theW3CHTMLTesterReportsCompliance()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".success\"}\n  (Session info: headless chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HP-LAPTOP\u0027, ip: \u0027192.168.1.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\goldt\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56476}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2bc211dac9a82a3120417e8426e19c02\n*** Element info: {Using\u003dclass name, value\u003dsuccess}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat testFramework.objects.W3cHtmlChecker.fileValidates(W3cHtmlChecker.java:36)\r\n\tat testFramework.steps.HtmlSyntaxCheckSteps.theW3CHTMLTesterReportsCompliance(HtmlSyntaxCheckSteps.java:21)\r\n\tat ✽.the w3c HTML tester reports compliance(file:///D:/Web%20Site%20Work/cucumberframe/cucumber-java/src/test/features/framework/standards.feature:14)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Screenshot taken because this scenario is marked as FAILED");
formatter.write("\u003chtml lang\u003d\"en\"\u003e\u003chead\u003e\u003clink href\u003d\"icon.png\" rel\u003d\"icon\"\u003e\u003clink href\u003d\"style.css\" rel\u003d\"stylesheet\"\u003e\u003ctitle\u003e(X)HTML5 validation results for http://koalateasoftware.com\u003c/title\u003e\u003cstyle\u003e\u003c/style\u003e\u003c/head\u003e\u003cbody\u003e\u003ch1\u003e(X)HTML5 validation results for http://koalateasoftware.com\u003c/h1\u003e\u003cform method\u003d\"get\" class\u003d\"simple\"\u003e\u003cfieldset\u003e\u003clegend\u003eValidator Input\u003c/legend\u003e\u003ctable\u003e\u003ctbody\u003e\u003ctr title\u003d\"The document to validate.\"\u003e\u003cth\u003e\u003cselect id\u003d\"docselect\"\u003e\u003coption value\u003d\"\"\u003eAddress\u003c/option\u003e\u003coption value\u003d\"file\"\u003eFile Upload\u003c/option\u003e\u003coption value\u003d\"textarea\"\u003eText Field\u003c/option\u003e\u003c/select\u003e\u003c/th\u003e\u003ctd\u003e\u003cinput type\u003d\"url\" name\u003d\"doc\" id\u003d\"doc\" pattern\u003d\"(?:(?:https?://.+)|(?:data:.+))?\" title\u003d\"Absolute URL (http, https or data only) of the document to be checked.\" tabindex\u003d\"0\" autofocus\u003d\"autofocus\" value\u003d\"http://koalateasoftware.com\" aria-labelledby\u003d\"docselect\"\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr title\u003d\"Display a report about the textual alternatives for images.\"\u003e\u003cth\u003e\u003c/th\u003e\u003ctd\u003e\u003clabel for\u003d\"showimagereport\"\u003e\u003cinput type\u003d\"checkbox\" name\u003d\"showimagereport\" id\u003d\"showimagereport\" value\u003d\"yes\"\u003e Show Image Report\u003c/label\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr title\u003d\"Display the markup source of the input document.\"\u003e\u003cth\u003e\u003c/th\u003e\u003ctd\u003e\u003clabel for\u003d\"showsource\"\u003e\u003cinput type\u003d\"checkbox\" name\u003d\"showsource\" id\u003d\"showsource\" value\u003d\"yes\"\u003e Show Source\u003c/label\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003c/th\u003e\u003ctd\u003e\u003cinput value\u003d\"Validate\" type\u003d\"submit\" id\u003d\"submit\"\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/fieldset\u003e\u003c/form\u003e\u003cscript src\u003d\"script.js\"\u003e\u003c/script\u003e\u003cp\u003e\u003cinput type\u003d\"button\" value\u003d\"Group Messages\"\u003e\u003c/p\u003e\u003col\u003e\u003cli class\u003d\"error\"\u003e\u003cp\u003e\u003cstrong\u003eError\u003c/strong\u003e: \u003cspan\u003eBad value \u003ccode\u003eCache-Control\u003c/code\u003e for attribute \u003ccode\u003ehttp-equiv\u003c/code\u003e on element \u003ca href\u003d\"https://html.spec.whatwg.org/multipage/#the-meta-element\"\u003e\u003ccode\u003emeta\u003c/code\u003e\u003c/a\u003e.\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"location\"\u003eFrom line \u003cspan class\u003d\"first-line\"\u003e11\u003c/span\u003e, column \u003cspan class\u003d\"first-col\"\u003e1\u003c/span\u003e; to line \u003cspan class\u003d\"last-line\"\u003e11\u003c/span\u003e, column \u003cspan class\u003d\"last-col\"\u003e53\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"extract\"\u003e\u003ccode\u003eofollow\"\u0026gt;\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u003cb\u003e\u0026lt;meta http-equiv\u003d\"Cache-Control\" content\u003d\"no-cache\"/\u0026gt;\u003c/b\u003e\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u0026lt;meta\u003c/code\u003e\u003c/p\u003e\u003c/li\u003e\u003cli class\u003d\"error\"\u003e\u003cp\u003e\u003cstrong\u003eError\u003c/strong\u003e: \u003cspan\u003eBad value \u003ccode\u003eCache-Control\u003c/code\u003e for attribute \u003ccode\u003ehttp-equiv\u003c/code\u003e on element \u003ca href\u003d\"https://html.spec.whatwg.org/multipage/#the-meta-element\"\u003e\u003ccode\u003emeta\u003c/code\u003e\u003c/a\u003e.\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"location\"\u003eFrom line \u003cspan class\u003d\"first-line\"\u003e12\u003c/span\u003e, column \u003cspan class\u003d\"first-col\"\u003e1\u003c/span\u003e; to line \u003cspan class\u003d\"last-line\"\u003e12\u003c/span\u003e, column \u003cspan class\u003d\"last-col\"\u003e53\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"extract\"\u003e\u003ccode\u003e-cache\"/\u0026gt;\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u003cb\u003e\u0026lt;meta http-equiv\u003d\"Cache-Control\" content\u003d\"no-store\"/\u0026gt;\u003c/b\u003e\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u0026lt;meta\u003c/code\u003e\u003c/p\u003e\u003c/li\u003e\u003cli class\u003d\"error\"\u003e\u003cp\u003e\u003cstrong\u003eError\u003c/strong\u003e: \u003cspan\u003eBad value \u003ccode\u003eCache-Control\u003c/code\u003e for attribute \u003ccode\u003ehttp-equiv\u003c/code\u003e on element \u003ca href\u003d\"https://html.spec.whatwg.org/multipage/#the-meta-element\"\u003e\u003ccode\u003emeta\u003c/code\u003e\u003c/a\u003e.\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"location\"\u003eFrom line \u003cspan class\u003d\"first-line\"\u003e13\u003c/span\u003e, column \u003cspan class\u003d\"first-col\"\u003e1\u003c/span\u003e; to line \u003cspan class\u003d\"last-line\"\u003e13\u003c/span\u003e, column \u003cspan class\u003d\"last-col\"\u003e60\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"extract\"\u003e\u003ccode\u003e-store\"/\u0026gt;\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u003cb\u003e\u0026lt;meta http-equiv\u003d\"Cache-Control\" content\u003d\"must-revalidate\"/\u0026gt;\u003c/b\u003e\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u0026lt;meta\u003c/code\u003e\u003c/p\u003e\u003c/li\u003e\u003cli class\u003d\"error\"\u003e\u003cp\u003e\u003cstrong\u003eError\u003c/strong\u003e: \u003cspan\u003eBad value \u003ccode\u003ePragma\u003c/code\u003e for attribute \u003ccode\u003ehttp-equiv\u003c/code\u003e on element \u003ca href\u003d\"https://html.spec.whatwg.org/multipage/#the-meta-element\"\u003e\u003ccode\u003emeta\u003c/code\u003e\u003c/a\u003e.\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"location\"\u003eFrom line \u003cspan class\u003d\"first-line\"\u003e14\u003c/span\u003e, column \u003cspan class\u003d\"first-col\"\u003e1\u003c/span\u003e; to line \u003cspan class\u003d\"last-line\"\u003e14\u003c/span\u003e, column \u003cspan class\u003d\"last-col\"\u003e46\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"extract\"\u003e\u003ccode\u003elidate\"/\u0026gt;\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u003cb\u003e\u0026lt;meta http-equiv\u003d\"Pragma\" content\u003d\"no-cache\"/\u0026gt;\u003c/b\u003e\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u0026lt;meta\u003c/code\u003e\u003c/p\u003e\u003c/li\u003e\u003cli class\u003d\"error\"\u003e\u003cp\u003e\u003cstrong\u003eError\u003c/strong\u003e: \u003cspan\u003eBad value \u003ccode\u003eExpires\u003c/code\u003e for attribute \u003ccode\u003ehttp-equiv\u003c/code\u003e on element \u003ca href\u003d\"https://html.spec.whatwg.org/multipage/#the-meta-element\"\u003e\u003ccode\u003emeta\u003c/code\u003e\u003c/a\u003e.\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"location\"\u003eFrom line \u003cspan class\u003d\"first-line\"\u003e15\u003c/span\u003e, column \u003cspan class\u003d\"first-col\"\u003e1\u003c/span\u003e; to line \u003cspan class\u003d\"last-line\"\u003e15\u003c/span\u003e, column \u003cspan class\u003d\"last-col\"\u003e40\u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"extract\"\u003e\u003ccode\u003e-cache\"/\u0026gt;\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u003cb\u003e\u0026lt;meta http-equiv\u003d\"Expires\" content\u003d\"0\"/\u0026gt;\u003c/b\u003e\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u003cspan class\u003d\"lf\" title\u003d\"Line break\"\u003e↩\u003c/span\u003e\u0026lt;met\u003c/code\u003e\u003c/p\u003e\u003c/li\u003e\u003c/ol\u003e\u003cp class\u003d\"failure\"\u003eThere were errors. (Tried in the text/html mode.)\u003c/p\u003e\u003cdiv class\u003d\"details\"\u003e\u003cp class\u003d\"msgmediatype\"\u003eUsed the HTML parser. Externally specified character encoding was UTF-8.\u003c/p\u003e\u003c/div\u003e\u003cp class\u003d\"stats\"\u003eTotal execution time 46 milliseconds.\u003c/p\u003e\u003chr\u003e\u003cp\u003e\u003ca href\u003d\"https://about.validator.nu/\"\u003eAbout this Service\u003c/a\u003e • \u003ca href\u003d\"//validator.nu/\"\u003eMore options\u003c/a\u003e\u003c/p\u003e\u003c/body\u003e\u003c/html\u003e");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check links on a page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@standards"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the w3c link checker reviews the file \"http://koalateasoftware.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "testFramework.steps.PageLinkCheck.theW3CLinkCheckerReviewsTheFile(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the w3c link checker reports compliance",
  "keyword": "Then "
});
formatter.match({
  "location": "testFramework.steps.PageLinkCheck.theW3CLinkCheckerReportsCompliance()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});