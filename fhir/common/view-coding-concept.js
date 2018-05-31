import {LitElement, html} from '@polymer/lit-element';

/**
 * `lhwc-view-coding-concept`
 * web component for all FHIR components
 *
 */
class ViewCodingConcept extends LitElement {
	static get properties() {
        return {
            codingConcept: String,
            display: String,
            code: String,
            userSelected: Boolean,
            text: String
        }
    };

	_render({codingConcept, display, code, userSelected, text}) {
	console.log("ok");
	return html`
	    <style>
	    </style>
	    <table style="font-size: 12px;">
	        <tr><td>${codingConcept}      </td><td>: ${display}</td></tr>
	        <tr><td>Code            </td><td>: ${code}</td></tr>
            <tr><td>User Selected   </td><td>: ${userSelected}</td></tr>
            <tr><td>Description     </td><td>: ${text}</td></tr>
	    </table>


	`;
	}

}

window.customElements.define('lhwc-view-coding-concept', ViewCodingConcept);
