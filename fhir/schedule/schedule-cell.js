import {LitElement, html} from '@polymer/lit-element';
import {Button} from "@material/mwc-button";

/**
 * schedule-cell element
 *
 */
class ScheduleCell extends LitElement {
	static get properties() {
		return { message: String}
	};

	_render({message}) {
        return html`
          <div></div>


        `;
	}

}

window.customElements.define('schedule-cell', ScheduleCell);
