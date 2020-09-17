package testFramework.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import testFramework.Context;
import testFramework.actors.Actor;
import testFramework.objects.HtmlPage;

public class basic {

    @Given("I write to the html report {string}")
    public void iWriteToTheHtmlReport(String arg0) {
        System.out.println(arg0);
        Actor.writeToHtmlReport(arg0);
    }

    @Given("I fail a test")
    public void iFailATest() {
        Assert.fail("A deliberately failing test");
    }

    @Given("I review the default resource")
    public void iReviewTheDefaultResource() {
        try {
            String fullUrl = Context.sutConfiguration.getProperty("defaultUiProtocol") + "://";
            fullUrl += Context.sutConfiguration.getProperty("defaultUiDomainName");
            Context.defaultActor.getResource(fullUrl);
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
            Actor.writeToHtmlReport("Some default domain data has not been configured");
        }
    }

    @Then("the page title is the default")
    public void thePageTitleIsTheDefault() {
        try {
            String expected = Context.sutConfiguration.getProperty("defaultUiPageTitleString");

            HtmlPage page = new HtmlPage(Context.driver);

            Assert.assertEquals("The page title is not as expected", expected, page.readPageTitle());
        } catch (NoSuchFieldException e) {
            Actor.writeToHtmlReport("The default domain name has not been configured");
        }

    }

    @Given("I navigate to the page {string}")
    public void iNavigateToThePage(String fullUrl) {
        Context.defaultActor.getResource(fullUrl);
    }

    @Then("the page title is {string}")
    public void thePageTitleIs(String expected) {
        HtmlPage page = new HtmlPage(Context.driver);

        Assert.assertEquals("The page title is not as expected", expected, page.readPageTitle());
    }
}
