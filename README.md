## LibreHealth Web Components for FHIR

1. Install Node.js (this will install npm as well)
2. Install Git (required for Polymer CLI)
3. Install Polymer CLI for 3.0 
	`npm install -g polymer-cli` 
4. Clone the Material Web Components repo to a seperate place
	`git clone https://github.com/material-components/material-components-web-components.git` 
5. Clone this repo to a seperate place:
	`git clone https://github.com/SuKSW/lh-web-components.git`  
6. Change directory to lh_web_components and install project dependencies
	`cd lh_web_components 
	npm install` 
7. Add the remaining material web components from the cloned Material components file (The components available via npm have already been added) 

	`npm install file:<absolute path>/material-components-web-components/packages/<component name>` 
	
	Example : 
	`npm install  file:C:/Users/Subhashinie/Documents/GSoC/material-components-web-components/packages/textfield`  
	
	The required components are, 
	*textfield
	*formfield
	
6. Run the demo to view the web components 
	polymer serve 
