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
  "line": 5,
  "name": "",
  "description": "Login into Task_Mangement Website",
  "id": "task-management-website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Clicking on administration to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "task-management-website;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "task-management-website;;;1"
    },
    {
      "cells": [
        "vinoth",
        "vinoth"
      ],
      "line": 14,
      "id": "task-management-website;;;2"
    },
    {
      "cells": [
        "sanjeev",
        "sanjeev"
      ],
      "line": 15,
      "id": "task-management-website;;;3"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 16,
      "id": "task-management-website;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "Login into Task_Mangement Website",
  "id": "task-management-website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Clicking on administration to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user login using \"vinoth\" and \"vinoth\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7214063800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicking_on_Administration_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 1643765900,
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
  "duration": 1301126200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_login_Button()"
});
formatter.result({
  "duration": 371475400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "Login into Task_Mangement Website",
  "id": "task-management-website;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Clicking on administration to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user login using \"sanjeev\" and \"sanjeev\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6436970600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicking_on_Administration_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 1835759000,
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
  "duration": 1558068400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_login_Button()"
});
formatter.result({
  "duration": 298965300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "Login into Task_Mangement Website",
  "id": "task-management-website;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Clicking on administration to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user login using \"admin\" and \"admin\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4660862000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicking_on_Administration_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 2074006300,
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
  "duration": 1638672500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_login_Button()"
});
formatter.result({
  "duration": 671478100,
  "status": "passed"
});
});