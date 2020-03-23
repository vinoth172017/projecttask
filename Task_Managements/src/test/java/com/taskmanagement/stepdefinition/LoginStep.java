package com.taskmanagement.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.taskmanagement.excelutilitty.ExelUlities;
import com.taskmanagement.pagesobjects.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	WebDriver driver; 
	public LoginPage tasklogin;		//Creating Object for login Pages	
									
//@TC01	Login scenario methods 	
	
		@Given("^The user launch the Chrome application$")
		public void the_user_launch_the_chrome_application() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			System.setProperty("webdriver.chrome.driver", "src//test//resources//Driver//chromedriver.exe");
			driver = new ChromeDriver();
			tasklogin= new LoginPage(driver);
			driver.get("http://examples.codecharge.com/TaskManager/Default.php");
			driver.manage().window().maximize();
			//tasklogin.browserLaunch("chrome", "http://examples.codecharge.com/TaskManager/Default.php");
		}

		@When("^Clicking on administration to nagivate Login Page$")
		public void clicking_on_Administration_to_nagivate_Login_Page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			tasklogin.loginPage();
		}

		
		@Then("^The user login using \"([^\"]*)\" and \"([^\"]*)\" with vaild and invaild deatils$")
		public void the_user_login_using_and_with_vaild_and_invaild_deatils(String username, String password) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions	
			tasklogin.loginDetails(username,password);
			Thread.sleep(4000);
		}
		
		@Then("^Clicking on login button$")
		public void click_on_login_Button() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			tasklogin.loginClick();
		}

}
