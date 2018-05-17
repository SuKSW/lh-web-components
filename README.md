# LibreHealth Web Components for FHIR

## Prerequisites

* Node.js - This will install npm as well
* Git     - Required for Polymer CLI and for cloning

## Intructions

1. Install Polymer CLI for Polymer 3.0       
	`npm install -g polymer-cli`
2. Check whether the polymer CLI version is higher than 1.7.1    
 	`polymer --version`  
3. Clone the Material Web Components repo    
	`git clone https://github.com/material-components/material-components-web-components.git` 
4. Clone this repo to a seperate place  
	`git clone https://github.com/SuKSW/lh-web-components.git`   
6. Change directory to "lh_web_components" and install project dependencies    
	`cd lh_web_components   
	npm install`   
7. Add the remaining material web components from the cloned Material components file (The components available via npm have already been added)   

	`npm install file:<absolute path>/material-components-web-components/packages/<component name>`   
	
	Example :   
	`npm install  file:C:/Users/Username/Documents/material-components-web-components/packages/textfield`    
	
	The required components are,   
	* textfield
	* formfield
	
6. Run the demo to view the web components   
	`polymer serve`   
