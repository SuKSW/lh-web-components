import {LitElement, html} from '@polymer/lit-element';
import {style} from './schedule-display-css.js';

/**
 * `lhwc-schedule-display element`
 * web component for FHIR resource schedule
 *
 */
class ScheduleDisplay extends LitElement {
    static get properties() {
        return {
          daysOfWeek: Array,
          timeIntervals: Array
        }
    }

    constructor() {
        super();
        this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.timeIntervals = ["0.00 - 1.00", "1.00 - 2.00", "2.00 - 3.00", "3.00 - 4.00", "4.00 - 5.00",
            "5.00 - 6.00", "6.00 - 7.00", "7.00 - 8.00", "8.00 - 9.00", "9.00 - 10.00", "10.00 - 11.00",
            "11.00 - 12.00", "12.00 - 13.00", "13.00 - 14.00", "14.00 - 15.00", "15.00 - 16.00",
            "16.00 - 17.00", "17.00 - 18.00", "18.00 - 19.00", "19.00 - 20.00", "20.00 - 21.00",
            "21.00 - 22.00", "22.00 - 23.00", "23.00 - 0.00"];
    }

	_renderStyle() {
        return style;
    }


	_render({ daysOfWeek, timeIntervals }) {
        return html`
        ${this._renderStyle()}
        <div class="sch-table-container">
        <table class="sch-table">
            <tr>
                <th></th>
                <th class="sch-table-day">${daysOfWeek[0]}</th>
                <th class="sch-table-day">${daysOfWeek[1]}</th>
                <th class="sch-table-day">${daysOfWeek[2]}</th>
                <th class="sch-table-day">${daysOfWeek[3]}</th>
                <th class="sch-table-day">${daysOfWeek[4]}</th>
                <th class="sch-table-day">${daysOfWeek[5]}</th>
                <th class="sch-table-day">${daysOfWeek[6]}</th>
            </tr>
            <tr>
                <td>
                ${timeIntervals.map((interval) => html`<div class="sch-table-intervals">${interval}</div>`)}
                </td>
        </table>
        </div>

        `;
	}
}

window.customElements.define('lhwc-schedule-display', ScheduleDisplay);
