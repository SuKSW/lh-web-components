import {LitElement, html} from '@polymer/lit-element';
import {Button} from "@material/mwc-button";
import {Formfield} from "@material/mwc-formfield";

/**
 * `schedule-element`
 * web component for FHIR resource Schedule
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ScheduleElement extends LitElement {
	static get properties() {
		return { message: String} 
	};
	
	_render({message}) {
	return html`
	  <style></style>
	  <h2>Hello ${message}!</h2>
	  <mwc-button raised>Hi there</mwc-button>
	  <mwc-formfield alignEnd label="Enter a date.">
        <input type="date">
      </mwc-formfield>
	`;
	}
	
}

window.customElements.define('schedule-element', ScheduleElement);
