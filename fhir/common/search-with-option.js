import {LitElement, html} from '@polymer/lit-element';
import {Button} from "@material/mwc-button";
import {Textfield} from "@material/mwc-textfield";

/**
 * `lhwc-search-with-options element`
 * web component for all FHIR resources
 */
class SearchWithOptions extends LitElement {
    constructor() {
        super();
        this.inputValue = "";
        this.inputValue2 = "a";
        this.inputValue3 = "";
        this.optionSelected = "";
    }

	static get properties() {
		return {
		    inputValue: String,
		    inputValue2: String,
		    inputValue3: String,
            optionSelected: String,
		    inputLabel: String,
		    optionsToSelect: Object
		}
	};

	_render({inputLabel, optionsToSelect}) {
        var optionsArr = JSON.parse(optionsToSelect);
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


            Native : <input class="search-input" id="search-input"
                on-input=${e => this.inputValue = e.target.value}></input></br>
            MVC textfield1 :
            <mwc-textfield on-input=${e => this.inputValue2 = e.target.value}></mwc-textfield></br>
            MVC textfield2 :
            <mwc-textfield on-input="setValueToInputValue3"></mwc-textfield></br>


            <select class="search-gap-tiny" id="search-select">
                ${optionsArr.map((i) => html`<option value$=${i.id}>${i.name}</option>`)}
            </select>
            <mwc-button class="search-gap-tiny" raised label="Search"
                on-click=${() => this.showTheInput()}>
            </mwc-button>
            <mwc-button class="search-gap-tiny" raised label="Search"
                on-click="setValueToInputValue3">
            </mwc-button>
        `;
	}

	setValueToInputValue3 (e) {
	    this.inputValue3 = e.target.value;
	}

	showTheInput() {
        console.log(this.inputValue);
        console.log(this.inputValue2);
        console.log(this.inputValue3);
    }
}

window.customElements.define('lhwc-search-with-options', SearchWithOptions);