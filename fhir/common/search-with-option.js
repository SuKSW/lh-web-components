import {LitElement, html} from '@polymer/lit-element';
import {Button} from "@material/mwc-button";

/**
 * `lhwc-search-with-options element`
 * web component for all FHIR resources
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SearchWithOptions extends LitElement {
    constructor() {
        super();
        this.inputValue = "";
        this.optionSelected = "";
    }

	static get properties() {
		return {
		    inputValue: String,
            optionSelected: String,
		    inputLabel: String,
		    optionsToSelect: Object
		}
	};

	_render({inputLabel, optionsToSelect}) {
        var optionTypesArr = JSON.parse(optionsToSelect);
        return html`
            <style>
             .search-input {
                width: 180px;
             }
             .search-gap-tiny {
                margin-left: 5px;
             }
            </style>
            <label class="search-gap-tiny" for="search-input">${inputLabel}</label>
            <input class="search-input" id="search-input"
                on-input=${e => this.inputValue = e.target.value}></input>
            <select class="search-gap-tiny" id="search-select">
                <option selected value="0">${optionTypesArr[0]}</option>
                <option value="1">${optionTypesArr[1]}</option>
                <option value="2">${optionTypesArr[2]}</option>
                <option value="3">${optionTypesArr[3]}</option>
                <option value="4">${optionTypesArr[4]}</option>
                <option value="5">${optionTypesArr[5]}</option>
                <option value="6">${optionTypesArr[6]}</option>
            </select>
            <mwc-button class="search-gap-tiny" raised label="Search"
                on-click=${() => this.searchSchedule()}>
            </mwc-button>
        `;
	}

	searchSchedule() {
        console.log(this.inputValue);
    }
}

window.customElements.define('lhwc-search-with-options', SearchWithOptions);