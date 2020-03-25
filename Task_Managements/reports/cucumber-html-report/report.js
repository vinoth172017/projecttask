$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/TaskTestcase.feature");
formatter.feature({
  "line": 2,
  "name": "Task_Management Website",
  "description": "",
  "id": "task-management-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login into Task_Mangement Website",
  "description": "",
  "id": "task-management-website;login-into-task-mangement-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Clicking on administration to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Clicking on login button \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "task-management-website;login-into-task-mangement-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 12,
      "id": "task-management-website;login-into-task-mangement-website;;1"
    },
    {
      "cells": [
        "vinoth",
        "vinoth",
        "invalid login"
      ],
      "line": 13,
      "id": "task-management-website;login-into-task-mangement-website;;2"
    },
    {
      "cells": [
        "sanjeev",
        "sanjeev",
        "invalid login"
      ],
      "line": 14,
      "id": "task-management-website;login-into-task-mangement-website;;3"
    },
    {
      "cells": [
        "admin",
        "admin",
        "valid login"
      ],
      "line": 15,
      "id": "task-management-website;login-into-task-mangement-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login into Task_Mangement Website",
  "description": "",
  "id": "task-management-website;login-into-task-mangement-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Clicking on administration to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login using \"vinoth\" and \"vinoth\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Clicking on login button \"invalid login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7357000101,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicking_on_Administration_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 1885861400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinoth",
      "offset": 22
    },
    {
      "val": "vinoth",
      "offset": 35
    }
  ],
  "location": "LoginStep.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 5460039199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid login",
      "offset": 26
    }
  ],
  "location": "LoginStep.click_on_login_Button(String)"
});
formatter.result({
  "duration": 304410800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Task_Mangement Website",
  "description": "",
  "id": "task-management-website;login-into-task-mangement-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Clicking on administration to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login using \"sanjeev\" and \"sanjeev\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Clicking on login button \"invalid login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4192495500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicking_on_Administration_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 6706772800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjeev",
      "offset": 22
    },
    {
      "val": "sanjeev",
      "offset": 36
    }
  ],
  "location": "LoginStep.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 5613467299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid login",
      "offset": 26
    }
  ],
  "location": "LoginStep.click_on_login_Button(String)"
});
formatter.result({
  "duration": 208028400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Task_Mangement Website",
  "description": "",
  "id": "task-management-website;login-into-task-mangement-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Clicking on administration to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login using \"admin\" and \"admin\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Clicking on login button \"valid login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4705723000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicking_on_Administration_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 1417547500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "LoginStep.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 5523068400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid login",
      "offset": 26
    }
  ],
  "location": "LoginStep.click_on_login_Button(String)"
});
formatter.result({
  "duration": 4117238101,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add Task in Task_Mangement Website",
  "description": "",
  "id": "task-management-website;add-task-in-task-mangement-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC_02_Add_Task"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on AddTask and login",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Enter the task details",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on addbutton to add Task",
  "keyword": "And "
});
formatter.match({
  "location": "AddTaskStep.the_user_launch_chrome_addtask()"
});
formatter.result({
  "duration": 6162546900,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskStep.click_AddTask_and_login()"
});
formatter.result({
  "duration": 8981296500,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskStep.clicking_on_AddTask_to_nagivate_Add_Task_Page()"
});
formatter.result({
  "duration": 7063003800,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskStep.click_on_Addbutton_to_add_Task()"
});
formatter.result({
  "duration": 4264259200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Searching in Task_Mangement Website",
  "description": "",
  "id": "task-management-website;searching-in-task-mangement-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC_03_Search_Task"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "The user launch Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Enter correct details to search the added task",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Click on search button to get the details of the task",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.the_user_launch_chrome_sear()"
});
formatter.result({
  "duration": 5671335900,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.enter_Correct_Details_to_search()"
});
formatter.result({
  "duration": 544701600,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.click_Search_Button_to_Get_Details()"
});
formatter.result({
  "duration": 8785967300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Printing Task Table in Task_Mangement Website",
  "description": "",
  "id": "task-management-website;printing-task-table-in-task-mangement-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_04_Task_Table_Printing"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user launch Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Open the home page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "In task web table get the first row in the console",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskTableStep.the_user_launch_chrome_taskt()"
});
formatter.result({
  "duration": 7256269400,
  "status": "passed"
});
formatter.match({
  "location": "TaskTableStep.Open_the_home_page()"
});
formatter.result({
  "duration": 3928066000,
  "status": "passed"
});
formatter.match({
  "location": "TaskTableStep.print_the_home_page_Task_Table_in_the_console()"
});
formatter.result({
  "duration": 4357789099,
  "status": "passed"
});
});