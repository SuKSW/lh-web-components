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
            .m-sec-heading-area {
                color: white;
                height: 50px;
                background-color: #3CBC8D;
                margin: 0px;
                width: 100%;
            }
            .m-sec-heading {
                font-weight: bold;
                margin-right: 10px;
            }
            .m-sec-heading-other {
                margin-right: 6px;
                font-size: 14px;
            }
            .m-sec-body {
                background-color: #e3e7ed;
            }
        </style>
        <div><table class="m-sec-heading-area">
            <tr id="m-sec-heading-area" class="m-sec-heading-area">
                <td class="m-sec-heading">${heading}</td>
                <td class="m-sec-heading-other">
                    <slot name="main-section-heading-slot"></slot>
                </td>
            </tr></table>

            <div id="m-sec-body" class="m-sec-body">
                <slot></slot>
            </div>
        </div>
	`;
	}
}

window.customElements.define('lhwc-main-section', MainSection);
