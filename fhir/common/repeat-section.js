import {LitElement, html} from '@polymer/lit-element';
import {SubSection} from './sub-section.js';
/**
 *
 *
 */
class RepeatSection extends LitElement {
    static get properties() {
        return {
            concepts: Object
        };
    }


	_render({concepts}) {
        var employees = JSON.parse(concepts);
        console.log(concepts);
        const items = [1,2,3];
        return html`

            <div>${items.map((i) => html`<lhwc-sub-section>${i}</lhwc-sub-section>`)}
                                  </div>
            <table><tr>${items.map((i) => html`<td>${i}</td>`)}
                                              </tr></table>

            <ul>${items.map((i) => html`<li>${i}</li>`)}
                                  </ul>
        `;
	}
}

window.customElements.define('lhwc-repeat-section', RepeatSection);