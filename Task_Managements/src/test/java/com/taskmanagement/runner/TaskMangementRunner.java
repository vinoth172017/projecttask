package com.taskmanagement.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/main/resources/feature/TaskTestcase.feature",
plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
tags= {"@TC_01_Login,@TC_02_Add_Task,@TC_03_Search_Task,@TC_04_Task_Table_Printing"},
glue = {"com.taskmanagement.stepdefinition"},
monochrome = true
)
public class TaskMangementRunner  {
	@AfterClass
  public static void extendReport() {
      Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
      Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
      Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
      Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
      Reporter.setSystemInfo("Selenium", "3.141.59");
      Reporter.setSystemInfo("Maven", "4.0.0");
      Reporter.setSystemInfo("Java Version", "1.8.0_131");
}
}
	