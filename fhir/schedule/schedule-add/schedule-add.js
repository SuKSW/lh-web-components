import {LitElement, html} from '@polymer/lit-element';
import {Button} from "@material/mwc-button";
import {Formfield} from "@material/mwc-formfield";
import {Textfield} from "@material/mwc-textfield";
import {style} from './schedule-add-css.js';

/**
 * `lhwc-schedule-add` element
 * web component for FHIR resource Schedule
 *
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
        <lhwc-main-section heading="Create schedule">
        </lhwc-main-section>

	`;
	}

	addSchedule() {
	    console.log("aaaaaa");
	}

}

window.customElements.define('lhwc-schedule-add', ScheduleAddElement);
