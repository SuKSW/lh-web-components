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

	_render() {
	return html`
    <style>
    .schedule-base {
        overflow: auto;
        display: grid;
        grid-template-columns: 230px auto;
        grid-template-areas:
        'header header'
        'sidebar main'
        'sidebar main';
        grid-gap: 10px;
    }
    .schedule-base-sidebar {
        display: inline-block;
        grid-area: sidebar;
    }
    .schedule-base-main {
        grid-area: main;
    }
    </style>
    <lhwc-main-section heading="Schedule View">
        <div id="schedule-base" class="schedule-base">
            <div id="schedule-base-sidebar" class="schedule-base-sidebar">
                <lhwc-sub-section>
                    <label for="schedule-date">Date </label>
                    <input id="schedule-date" type="date" data-date-inline-picker="true" data-initialized="true"/>
                </lhwc-sub-section>
                <lhwc-sub-section>
                    <lhwc-search-with-options
                        inputLabel="Enter reference.."
                        optionsToSelect='[ "HealthcareService", "Location", "Practitioner", "PractitionerRole",
                             "Device", "Patient", "RelatedPerson" ]'>
                    </lhwc-search-with-options>
                </lhwc-sub-section>
            </div>
            <div id="schedule-base-main" class="schedule-base-main lh-section">
                <lhwc-schedule-display></lhwc-schedule-display>
            </div>
        </div>
    </lhwc-main-section>
	`;
	}
}

window.customElements.define('lhwc-schedule-base', ScheduleBase);
