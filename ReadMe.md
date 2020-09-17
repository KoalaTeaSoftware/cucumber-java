# Cucumber / Java Test Framework

## Installation

This is assuming that you are using the IntelliJ open source version and using GitHub as your VCS

* Create your empty project locally
* Copy these into the root of that project
  * /src
  * /pom.xml
* Edit /pom.xml
  * groupId
  * artifactId
  * version
* Have it re-build the Maven dependencies
* Build the project
  * You should see it create a /...iml file with a name that corresponds to the artefactId that you put in the POM
 
## Smoke Test Of Framework

* Run \src\test\java\testFramework\FrameworkRunner.java
* You should see a load of files generated in /target/cucumber-html-reports
* review the .html files to see that you get the expected results


## Using The Framework To Test Your Own Thing

* Update the /test/configuration files
* Add the necessaries to /test/features/SUT
* Add your test objects and code to /test/java/testSuite

## Overview Of Framework

The details of how the framework works can be found scattered around the place in ReadMe files.

### Actors
At the bottom, there is the idea of the Actor. This isolates you from the machine that actually does the testing (e.g. the Selenium Web Driver).

At the start of the test, the framework will create a default actor, and give you a handle on that (in the Context).

This default actor is created using the ActorFactory, and you can use it if you wanted to create another (e.g. if you wanted to have another actor, for example you have an API which could be used to check the actions that you perform through the main SUT)

### Context

The package testFramework.Context contains various members that can be useful to you as you perform test steps.

At the moment, if you want to share information between steps and scenarios, you can hack this object to contain these data. This not an ideal solution to this need. 

