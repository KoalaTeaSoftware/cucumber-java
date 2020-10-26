package testFramework.helpers;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import testFramework.Context;

/**
 * This is for putting things into the pretty HTML report
 */
public class Reports {

    /**
     * Just what is says on the tin.
     *
     * @param message - what you want to see in the report
     */
    public static void writeToHtmlReport(String message) {
        Context.scenario.write(message);
    }

    /**
     * Defined within the actor because the different types of actor behave in different ways
     * This definition is good for the various browsers and has to be overridden for the API and Appium actors
     *
     * @param message - what you want to see written in the report
     */
    public static void writeScreenShotToHtmlReport(String message) {
        TakesScreenshot ts = (TakesScreenshot) Context.defaultDriver;
        byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);

        Context.scenario.embed(screenshot, "image/png", message);

        /* for IE
        BufferedImage image = new Robot().createScreenCapture(new    Rectangle(Toolkit.getDefaultToolkit().getScreenSize()));
ImageIO.write(image, "png", new File("/screenshot.png"));
         */
    }

    public static void writePageSourceToHtmlReport() {
        Reports.writeToHtmlReport(Context.defaultDriver.getPageSource());
    }
}
