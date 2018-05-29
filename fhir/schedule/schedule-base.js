import {LitElement, html} from '@polymer/lit-element';
import {SubSection} from '../common/sub-section.js';
import {ScheduleDisplay} from './schedule-display/schedule-display.js';

/**
 * `lhwc-schedule-base element`
 * a web component for FHIR resource schedule
 *
 * @customElement
 * @demo demo/index.html
 */
class ScheduleBase extends LitElement {
    static get properties() {
        return {
          resourceReference: String,
          resourceType: String,
          scheduleDate: Date
        }
    }

    constructor() {
        super();
        this.resourceReference = "";
        this.resourceType = "";
    }

	_render({resourceReference, resourceType, scheduleDate}) {
        return html`
        <style>
        </style>
        <lhwc-main-section heading="Schedule View">
            <div slot="main-section-heading-slot">
                <label for="schedule-date">Date </label>
                <input id="schedule-date" type="date"/>
                <lhwc-search-with-options
                    inputValue=${resourceReference}
                    optionSelected=${resourceType}
                    inputLabel="Reference"
                    optionsToSelect='[ "HealthcareService", "Location", "Practitioner", "PractitionerRole",
                         "Device", "Patient", "RelatedPerson" ]'>
                </lhwc-search-with-options>
            </div>
            <div id="schedule-base">
                <lhwc-schedule-display></lhwc-schedule-display>
            </div>
        </lhwc-main-section>
        `;
	}
}

window.customElements.define('lhwc-schedule-base', ScheduleBase);
