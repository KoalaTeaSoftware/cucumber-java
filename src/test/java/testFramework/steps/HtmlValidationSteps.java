package testFramework.steps;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import testFramework.objects.W3cHtmlValidator;

public class HtmlValidationSteps {
    private W3cHtmlValidator w3cHtmlValidator = null;
    private String url;

    @Given("the w3C HTML tester reviews the file {string}")
    public void theW3CHTMLTesterReviewsTheFile(String urlOfFile) {
        this.url = urlOfFile;
        w3cHtmlValidator = new W3cHtmlValidator(urlOfFile);
    }

    @Then("the w3c HTML tester reports compliance")
    public void theW3CHTMLTesterReportsCompliance() {
        Assert.assertTrue("File :" + this.url + ": should be valid", w3cHtmlValidator.fileValidates());
    }
}
