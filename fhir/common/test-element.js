import {LitElement, html} from '@polymer/lit-element';
import {Button} from "@material/mwc-button";

class myTestEle extends LitElement {
	static get properties() {
		return { message: String}
	};

	_render() {
        return html`
            <mwc-button raised on-click=${() => this.sayHello()}>click me</mwc-button>
            <div><button on-click=${()=>window.alert("hey")}></button></div>
        `;
	}

	sayHello() {
        console.log('Ow!');
    }


}

window.customElements.define('my-test-element', myTestEle);
