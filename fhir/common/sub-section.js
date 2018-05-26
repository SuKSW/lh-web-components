import {LitElement, html} from '@polymer/lit-element';

/**
 *
 *
 */
class SubSection extends LitElement {

	_render() {
	return html`
        <style>
            .sub-section {
                background-color: #f7f9fc;
                margin: 8px;
                border: 1px solid #ccc;
                padding: 10px;
            }
        </style>
        <div>
            <div id="sub-section" class="sub-section">
                <slot></slot>
            </div>
        </div>
	`;
	}
}

window.customElements.define('lhwc-sub-section', SubSection);
