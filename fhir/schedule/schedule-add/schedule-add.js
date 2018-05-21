import {LitElement, html} from '@polymer/lit-element';
import {Button} from "@material/mwc-button";
import {Formfield} from "@material/mwc-formfield";
import {Textfield} from "@material/mwc-textfield";
import {style} from './schedule-add-css.js';

/**
 * `schedule-element`
 * web component for FHIR resource Schedule
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ScheduleAddElement extends LitElement {
	static get properties() {
		return { message: String}
	};

	_renderStyle() {
        return style;
    }

	_render({message}) {
	return html`
	    ${this._renderStyle()}
        <div>
            <h2>Add Schedule</h2>
            <form class="fhir">
                <label for="fname">Service Type</label>
                <input type="text" id="fname" name="firstname" placeholder="Eg.Paediatric Cardiology">
                </br>
                <label for="nnname">Specialty</label>
                <input type="text" id="nnname" name="irstname" placeholder="Eg.Hepatology">
                </br>
                <mwc-textfield outlined label="Service Type" class="schedule-input"></mwc-textfield>

                <mwc-formfield alignEnd label="Service Type">
                    <input type="date">
                </mwc-formfield>

                <label for="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>

                <mwc-button raised onclick=${this.addSchedule()}>Add</mwc-button>
            </form>
        </div>

	`;
	}

	addSchedule() {
	    console.log("aaaaaa");
	}

}

window.customElements.define('schedule-add-element', ScheduleAddElement);
