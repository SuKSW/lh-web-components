import {LitElement, html} from '@polymer/lit-element';

/**
 *
 *
 */
class MainSection extends LitElement {
	static get properties() {
		return { heading: String}
	};

	_render({heading}) {
	return html`
        <style>
            .main-section-heading {
                color: white;
                text-align: left;
                padding: 10px 16px;
                font-size: 17px;
                background-color: #3CBC8D;
                font-weight: bold;
                margin: 0px;
                grid-area: header;
            }
            .main-section-body {
                background-color: #e3e7ed;
            }
        </style>
        <div>
            <div id="main-section-heading" class="main-section-heading">${heading}</div>
            <div id="main-section-body" class="main-section-body">
                <slot></slot>
            </div>
        </div>
	`;
	}
}

window.customElements.define('lhwc-main-section', MainSection);
