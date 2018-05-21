import {LitElement, html} from '@polymer/lit-element';
import {style} from './common-css.js';
import {Button} from "@material/mwc-button";
import {Textfield} from "@material/mwc-textfield";

/**
 * `lhwc-search-with-options element`
 * web component for all FHIR resources
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SearchWithOptions extends LitElement {
	static get properties() {
		return { searchInput: String}
	};

	_render({searchInput}) {
	return html`
	    ${style}
        <div class="lh-section">
            <div>
                <label for="search-select">${searchInput} Type </label>
                <select id="search-select" name="actor-reference" class="search-select">
                    <option value="healthcare-service">Healthcare Service</option>
                    <option value="location">Location</option>
                    <option value="practitioner">Practitioner</option>
                    <option value="device">Device</option>
                    <option selected value="patient">Patient</option>
                </select>
            </div>
            <div>
                <label for="search-textfield">${searchInput}</label>
                <mwc-textfield outlined id="search-textfield"></mwc-textfield>
            <div>
            <mwc-button class="search-button" raised label="Search"></mwc-button>
        </div>

	`;
	}
}

window.customElements.define('lhwc-search-with-options', SearchWithOptions);