package testSuite.steps;

import io.cucumber.java.en.Given;
import org.openqa.selenium.By;
import testFramework.Context;

import static testFramework.objects.HtmlPage.waitForElement;

public class basic {
    @Given("the page is fully drawn")
    public void thPageIsFullyDrawn() {
        waitForElement(
                Context.driver,
                By.id("footer"),
                Context.pageLoadWait);
    }
}
