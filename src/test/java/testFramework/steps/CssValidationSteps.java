package testFramework.steps;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import testFramework.objects.W3cCssValidator;

public class CssValidationSteps {
    private W3cCssValidator w3cCssValidator = null;
    private String url;

    @Given("the w3C CSS tester reviews the file {string}")
    public void theWCCSSTesterReviewsTheFile(String urlOfFile) {
        this.url = urlOfFile;
        w3cCssValidator = new W3cCssValidator(urlOfFile);
    }

    @Then("the w3c CSS tester reports compliance")
    public void theWCCSSTesterReportsCompliance() {
        Assert.assertTrue("File :" + this.url + ": should be valid", w3cCssValidator.fileValidates());
    }
}
