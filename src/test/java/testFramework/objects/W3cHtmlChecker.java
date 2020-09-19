package testFramework.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import testFramework.Context;

import java.time.Duration;

public class W3cHtmlChecker {
    /**
     * It is best to aim this directly at the single files that you create.
     * For example, Bootstrap's css invokes error messages (false negatives?) from this tester.
     *
     * @param urlOfCssFile - make it a single file.Scheme is not necessary
     */
    public W3cHtmlChecker(String urlOfCssFile) {
        String fullUrl = "https://html5.validator.nu/?doc=";
        fullUrl += urlOfCssFile;
        fullUrl += "&parser=html";

        Context.defaultActor.getResource(fullUrl);

        new WebDriverWait(Context.driver, Duration.ofSeconds(10)).until(ExpectedConditions.titleContains("results for "));
    }

    /**
     * On both the success and failure pages, the first h3 tells you the result
     *
     * @return - whether it contains text that indicates success, or failure
     */
    public Boolean fileValidates() {
        /*
        <p class="success">The document validates according to the specified schema(s).</p>
         */
        String resultString = Context.driver.findElement(By.className("success")).getText();

        return resultString.contains(" document validates according to the ");
    }
}