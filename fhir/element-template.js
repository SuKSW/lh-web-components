import {LitElement, html} from '@polymer/lit-element';
import {style} from './____-css.js';
import {Button} from "@material/mwc-button";

/**
 * `______-element`
 * web component for FHIR resource _______
 *
 */
class _____ extends LitElement {
	static get properties() {
		return { message: String}
	};

	_renderStyle() {
        return style;
    }

	_render({message}) {
	return html`
	  ${this._renderStyle()}
	  <h2>Hello ${message}!</h2>


	`;
	}

}

window.customElements.define('______-element', ____);
