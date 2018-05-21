import {LitElement, html} from '@polymer/lit-element';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * `schedule-display-intervals element`
 * web component for FHIR resource schedule
 *
 */
class ScheduleDisplayIntervals extends LitElement {
	static get properties() {
		return {
		    message: String,
		    employees: {
                value() {
                    return ["Banana", "Orange", "Apple", "Mango"];
                }
            }
		}
	};
	constructor() {
        super();
        this.fruits = ["Banana", "Orange", "Apple", "Mango"];
      }
	_render({employees}) {
	return html `
	    <style>
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                width: auto;
                background-color: #fffff9;
            }

            li {
                display: block;
                color: #000;
                padding: 8px 16px;
                text-decoration: none;
                border: 1px solid #ccc;
            }

            /* Change the link color on hover */
            li:hover {
                background-color: #d7f7cd;
            }
        </style>
       <ul>
        <li>0.00 - 1.00</li>
        <li>1.00 - 2.00</li>
       </ul>

	`;
	}

}

window.customElements.define('schedule-display-intervals', ScheduleDisplayIntervals);
