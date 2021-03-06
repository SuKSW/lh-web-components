# LibreHealth Web Components for FHIR

## Prerequisites

* Node.js - In Windows this will install npm as well
* npm     - In Linux install using `sudo apt-get install npm`
* Git     - Required for Polymer CLI and for cloning

## Instructions

1. Install Polymer CLI for Polymer 3.0  
	`npm install -g polymer-cli`  
	(In linux remember to use `sudo`)

2. Check whether the polymer CLI version is higher than 1.7.1    
 	`polymer --version`

3. Clone both the Material Web Components repo and this repo to the same directory  
(We need to clone the Material Components repo because, some of the components that have not
yet been released via npm are also being used in this project)  
	`git clone https://github.com/material-components/material-components-web-components.git`  
	`git clone https://github.com/SuKSW/lh-web-components.git`

4. Change directory to "lh_web_components" and install project dependencies  
	`cd lh_web_components  
	npm install`

5. Uncomment a component in lh_web_components/demo/index.html to view

6. Run the demo to view the web components
	`polymer serve`
  
To view a different component edit lh_web_components/demo/index.html and refresh the browser
