package testSuite.steps;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import testFramework.Context;
import testSuite.objects.PageWebSiteDevelopment;

import java.util.ArrayList;
import java.util.List;

public class chapterWSD {
    private PageWebSiteDevelopment pageWebSiteDevelopment;

    /**
     * Lazy instantiation of the handle on the page
     * This will (generally speaking) allow the instantiation to occur once for each scenario
     *
     * @return - the instance of the page being looked at
     */
    private PageWebSiteDevelopment getMe() {
        if (pageWebSiteDevelopment == null) {
            pageWebSiteDevelopment = new PageWebSiteDevelopment(Context.driver);
        }
        return pageWebSiteDevelopment;
    }

    @Then("the nav for the chapter web site development contains")
    public void theNavForTheChapterWebSiteDevelopmentContains(DataTable dataTable) {
        List<String> unExpectedLinks = new ArrayList<>();
        List<String> expectedLinks = dataTable.asList(String.class);

        PageWebSiteDevelopment pageWebSiteDevelopment = getMe();
        List<WebElement> actualLinks = pageWebSiteDevelopment.getNavOptions();


        Assert.assertEquals("The number of navs available should match the expected number",
                expectedLinks.size(), actualLinks.size());

        for (int i = 0; i < actualLinks.size(); i++) {
            String actualLinkText = actualLinks.get(i).getText();
            int foundAt = expectedLinks.indexOf(actualLinkText);
            if (foundAt < 0) {
                unExpectedLinks.add(actualLinkText);
            }
        }

        Assert.assertEquals("These are links that were not expected:" + unExpectedLinks.toString() + ":",
                unExpectedLinks.size(), 0);
    }

    @And("I select the WSD chapter's nav option {string}")
    public void iSelectTheWSDChapterSNavOption(String OptionToChoose) {
        PageWebSiteDevelopment pageWebSiteDevelopment = getMe();
        pageWebSiteDevelopment.selectNavOption(OptionToChoose);
    }

    @And("the test results are not visible")
    public void theTestResultsAreNotVisible() {
        PageWebSiteDevelopment pageWebSiteDevelopment = getMe();
        Assert.assertFalse("The test results should not be visible", pageWebSiteDevelopment.testResultsAreVisible());
    }


    @And("the test plan is visible")
    public void theTestPlanIsVisible() {
        PageWebSiteDevelopment pageWebSiteDevelopment = getMe();
        Assert.assertTrue("The test results should not be visible", pageWebSiteDevelopment.testPlanIsVisible());
    }

    @When("I select the WSD chapter's sub-section nav option {string}")
    public void iSelectTheWSDChapterSSubSectionNavOption(String optionName) {
        PageWebSiteDevelopment pageWebSiteDevelopment = getMe();
        pageWebSiteDevelopment.shownSubSection(optionName);
    }

    @And("the test plan is not visible")
    public void theTestPlanIsNotVisible() {
        PageWebSiteDevelopment pageWebSiteDevelopment = getMe();
        Assert.assertFalse("The test results should not be visible", pageWebSiteDevelopment.testPlanIsVisible());
    }

    @And("the test results are visible")
    public void theTestResultsAreVisible() {
        PageWebSiteDevelopment pageWebSiteDevelopment = getMe();
        Assert.assertTrue("The test results should be visible", pageWebSiteDevelopment.testResultsAreVisible());
    }

    @Then("the test results holder is not empty")
    public void theTestResultsHolderIsNotEmpty() {
        PageWebSiteDevelopment pageWebSiteDevelopment = getMe();
        Assert.assertTrue("The holder of the test results should be of moderate size",
                pageWebSiteDevelopment.sizeOfTestResultsHolder() > 300);
    }
}
