package testFramework.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import testFramework.Context;

import java.time.Duration;

public class W3cCssValidator {
    /**
     * It is best to aim this directly at the single files that you create.
     * For example, Bootstrap's css invokes error messages (false negatives?) from this tester.
     *
     * @param urlOfCssFile - make it a single file.Scheme is not necessary
     */
    public W3cCssValidator(String urlOfCssFile) {
        String fullUrl = "http://jigsaw.w3.org/css-validator/validator?uri=";
        fullUrl += urlOfCssFile;
        fullUrl += "&profile=css3svg&usermedium=all&warning=1&vextwarning=";

        Context.defaultActor.getResource(fullUrl);

        new WebDriverWait(Context.driver, Duration.ofSeconds(3))
                // use the 'presence', i.e. is the element actually in the DOM - it may not be visible
                .until(ExpectedConditions.titleContains("W3C CSS Validator results for "));
    }

    /**
     * On both the success and failure pages, the first h3 tells you the result
     *
     * @return - whether it contains text that indicates success, or failure
     */
    public Boolean fileValidates() {
        String resultString = Context.driver.findElement(By.tagName("H3")).getText();

        return resultString.contains("No Error Found");
    }

    /**
     * "Absence of evidence" != "Evidence of absence"
     * In case you don't want to rely on simply the inverse of the 'is valid' test, this specifically looks for appropriate text
     *
     * @return
     */
    public Boolean fileFailsValidation() {
        String resultString = Context.driver.findElement(By.tagName("H3")).getText();
        return resultString.contains("We found the following errors");
    }
}