import {LitElement, html} from '@polymer/lit-element';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import {ScheduleDisplayIntervals} from "./schedule-display-intervals.js";
import {style} from './schedule-display-css.js';

/**
 * `lhwc-schedule-display element`
 * web component for FHIR resource schedule
 *
 */
class ScheduleDisplay extends LitElement {
    static get properties() {
        return {
          foo: String,
          days: Array
        }
    }

    constructor() {
        super();
        this.foo = 'aa';
        this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }

	_renderStyle() {
        return style;
    }


	_render({foo, days}) {
	return html`
        ${this._renderStyle()}

         <table class="schedule-display-table">
          <tr>
            <th class="sch-dis-col-1"></th>
            <th class="sch-dis-th"> ${days[0]}</th>
            <th class="sch-dis-th"> ${days[1]}</th>
            <th class="sch-dis-th"> ${days[2]}</th>
            <th class="sch-dis-th"> ${days[3]}</th>
            <th class="sch-dis-th"> ${days[4]}</th>
            <th class="sch-dis-th"> ${days[5]}</th>
            <th class="sch-dis-th"> ${days[6]}</th>
          </tr>
          <tr>
            <td class="sch-dis-col-1">
                <schedule-display-intervals></schedule-display-intervals>
            </td>
          </tr>
        </table>

	`;
	}
}

window.customElements.define('lhwc-schedule-display', ScheduleDisplay);
