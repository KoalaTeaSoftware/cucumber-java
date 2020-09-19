package testFramework.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import testFramework.Context;

import java.time.Duration;

public class W3cLinkChecker {
    /**
     * It is best to aim this directly at the single files that you create.
     * For example, Bootstrap's css invokes error messages (false negatives?) from this tester.
     *
     * @param urlOfCssFile - make it a single file.Scheme is not necessary
     */
    public W3cLinkChecker(String urlOfCssFile) {
        String fullUrl = "https://validator.w3.org/checklink?uri=";
        fullUrl += urlOfCssFile;
        fullUrl += "%2F&summary=on&hide_type=all&depth=&check=Check";

        Context.defaultActor.getResource(fullUrl);

        new WebDriverWait(Context.driver, Duration.ofSeconds(10)).until(ExpectedConditions.presenceOfElementLocated(By.tagName("H3")));
    }

    /**
     * @return - whether it contains text that indicates success, or failure
     */
    public Boolean fileValidates() {
        if (Context.driver.findElement(By.tagName("h3")).getText().toLowerCase().contains("broken links"))
            return false; // it definitely says there is a problem

        // otherwise, hunt for the p that specifically indicates success
        for (WebElement p : Context.driver.findElements(By.tagName("p"))) {
            if (p.getText().equalsIgnoreCase("Valid links!"))
                return true;
        }
        return false;
    }

}