import {LitElement, html} from '@polymer/lit-element';
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
		return {
		    inputLabel: String,
		    optionsToSelect: Object
		}
	};

	_render({inputLabel, optionsToSelect}) {
        var optionTypesArr = JSON.parse(optionsToSelect);
        return html`
            <mwc-textfield outlined label= ${inputLabel} id="search-textfield"></mwc-textfield>
            <select id="search-select">
                <option selected value="0">${optionTypesArr[0]}</option>
                <option value="1">${optionTypesArr[1]}</option>
                <option value="2">${optionTypesArr[2]}</option>
                <option value="3">${optionTypesArr[3]}</option>
                <option value="4">${optionTypesArr[4]}</option>
                <option value="5">${optionTypesArr[5]}</option>
                <option value="6">${optionTypesArr[6]}</option>
            </select>
            <mwc-button style="margin: 10px;" raised label="Search"></mwc-button>
        `;
	}
}

window.customElements.define('lhwc-search-with-options', SearchWithOptions);