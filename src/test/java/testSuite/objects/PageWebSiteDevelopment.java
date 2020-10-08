package testSuite.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import testFramework.objects.HtmlPage;

import java.util.List;

/**
 * Web Site Development is a chapter
 * Sections of the chapter are the different projects / wed sites
 * Sub Sections are: Test Plan, Test Results
 */
public class PageWebSiteDevelopment {
    private final By allSectionNavItems = By.xpath("//nav[@id='projNav']//A");
    private final By testPlanSection = By.id("testPlanPane");
    private final By testResultsSection = By.id("testResultsPane");
    private final By testResultsHolder = By.xpath("//*[@id='testResultsPane']//iframe");

    private By getSectionNavItemLocator(String sectionName) {
        return By.xpath("//*[@id='projNav']//A[normalize-space(text())='" + sectionName + "']");
    }

    private By getSubSectionNavItemLocator(String name) {
        return By.xpath("//*[@id='projectInfo']//*[@class='nav-item']//*[normalize-space(text())='" + name + "']");
    }

    private final WebDriver myDriver;

    public PageWebSiteDevelopment(WebDriver webDriver) {
        myDriver = webDriver;
        //noinspection unused - use the wait inherent in the instantiation of this object
        HtmlPage htmlPage = new HtmlPage(myDriver);
    }

    public List<WebElement> getNavOptions() {
        return myDriver.findElements(allSectionNavItems);
    }

    public void selectNavOption(String optionToChoose) {
        // again byLinkText is useless
        myDriver.findElement(getSectionNavItemLocator(optionToChoose)).click();
    }

    /**
     * In the current implementation, Bootstrap tabbed areas are used. Bootstrap achieves the display / hiding
     * off tab panes by adding, or removing various things to the classes of the various panes
     *
     * @return - true if they are
     */
    public boolean testResultsAreVisible() {
        try {
            String classOfPane = myDriver.findElement(testResultsSection).getAttribute("class").toLowerCase();
            return classOfPane.contains("show") && classOfPane.contains("active");
        } catch (NoSuchElementException e) {
            return false; // it is not visible :)
        }
    }

    public boolean testPlanIsVisible() {
        try {
            String classOfPane = myDriver.findElement(testPlanSection).getAttribute("class").toLowerCase();
            return classOfPane.contains("show") && classOfPane.contains("active");
        } catch (NoSuchElementException e) {
            return false; // it is not visible
        }
    }

    public void shownSubSection(String optionName) {
        myDriver.findElement(getSubSectionNavItemLocator(optionName)).click();
    }

    public Integer sizeOfTestResultsHolder() {
        return myDriver.findElement(testResultsHolder).getSize().width;
    }
}