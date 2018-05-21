import {LitElement, html} from '@polymer/lit-element';
import {style} from './schedule-base-css.js';
import {Button} from "@material/mwc-button";

/**
 * `lhwc-schedule-base element`
 * a web component for FHIR resource schedule
 *
 * @customElement
 * @demo demo/index.html
 */
class ScheduleBase extends LitElement {
	static get properties() {
		return { color: String}
	};

	_render({color}) {
	return html`
        ${style}
        <div class="schedule-base">
            <div id="schedule-base-heading" class="section-heading">Schedule</div>
            <div id="schedule-base-sidebar" class="schedule-base-sidebar">
                <div class="lh-section">
                    <label for="schedule-date">Date </label>
                    <input id="schedule-date" type="date" data-date-inline-picker="true" data-initialized="true"/>
                </div>
                <slot name="sidebar"></slot>
            </div>
            <div id="schedule-base-main" class="schedule-base-main lh-section">
                <slot name="main"></slot>
            </div>
        </div>
	`;
	}

}

window.customElements.define('lhwc-schedule-base', ScheduleBase);
