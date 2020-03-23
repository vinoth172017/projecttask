@Task_Management
Feature: Task_Management Website

@TC_01_Login
Scenario Outline:
	Login into Task_Mangement Website
Given The user launch the Chrome application
When Clicking on administration to nagivate Login Page
Then The user login using "<username>" and "<password>" with vaild and invaild deatils
Then Clicking on login button

Examples: 
|username	|password	|
|vinoth		|vinoth		|
|sanjeev	|sanjeev	|
|admin		|admin		|

@TC_02_Add_Task
Scenario:
	Add Task in Task_Mangement Website
Given user launch the Chrome application
When Click on AddTask and login
Then Enter the task details
And Click on addbutton to add Task

@TC_03_Search_Task
Scenario:
	Searching in Task_Mangement Website
Given The user launch Chrome application
When Enter correct details to search the added task
Then Click on search button to get the details of the task

@TC_04_Task_Table_Printing
Scenario:
	Printing Task Table in Task_Mangement Website
Given user launch Chrome application
When Open the home page
Then In task web table get the first row in the console