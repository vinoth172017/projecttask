package com.taskmanagement.pagesobjects;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class LoginPage {
	WebDriver driver; 
					//login locators
	By Administration=By.xpath("/html/body/table[1]/tbody/tr[2]/td[3]");
	By Login =By.name("login");
	By Password=By.name("password");
	By Loginclick=By.name("DoLogin");
	
	public LoginPage(WebDriver driver) {
		this.driver=driver;
	}
	public void browserLaunch(String browser,String url)//
	{
		try {
			//To launch firefox Browser
			if (browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver","src//test//resources//Driver//geckodriver.exe");
				driver = new FirefoxDriver();
			}
			// To launch Chrome Browser
			else if (browser.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver","src//test//resources//Driver//chromedriver.exe");
				driver=new ChromeDriver();
			}
			// to launch InternetExolorer
			else if (browser.equalsIgnoreCase("Internet Explore")) {
					System.setProperty("webdriver.ie.driver","src//test//resources//Driver//IEDriverServer.exe");
				driver=new InternetExplorerDriver();  
			}
			//to maximize the window
			driver.manage().window().maximize(); 
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.get(url);
		
		} catch (WebDriverException e) 
		{
			System.out.println("Browser could not be launched");
		}
	}
				//Methods for login pages and login details
	public void loginPage() 
	{
		driver.findElement(Administration).click();
		
	}
	
	public void loginDetails(String username, String password) throws IOException 
	{
		driver.findElement(Login).sendKeys(username);
		driver.findElement(Password).sendKeys(password);
		driver.findElement(Loginclick).click();
	}
	
	public void loginClick(String message)		//getting login and closing the browser
	{
		System.out.println(message);
	}
	
	//To take screenshot 
	public void screenshot(String path) throws InterruptedException, IOException
	{
		Thread.sleep(4000);
		TakesScreenshot snap = (TakesScreenshot)driver;
		File source = snap.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source, new File(path));
		Thread.sleep(3000);
		driver.close();
	}
}
