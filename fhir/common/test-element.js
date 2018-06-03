import {LitElement, html} from '@polymer/lit-element';
import {Button} from "@material/mwc-button";
import { repeat } from 'lit-html/lib/repeat.js';
import {ViewCodingConcept} from './view-coding-concept.js';

class myTestEle extends LitElement {
	static get properties() {
		return { }
	};

	_render() {
	    const coding = "{\"coding\": [{\"system\": \"http://snomed.info/sct\",\"code\": \"408460008\","
	     + "\"display\": \"Surgery-Dental-Prosthetic dentistry (Prosthodontics)\", \"userSelected\": true } ],"
         + "\"text\": \"kuLxlUsPTsD9YuXpjZjLmQ==\" }";

       const codingJson = JSON.parse(coding);
       console.log(codingJson.text);
        return html`
                <lhwc-view-coding-concept
                    codingConcept= "Speciality"
                    display$= ${codingJson.coding[0].display}
                    code$= ${codingJson.coding[0].code}
                    userSelected$= ${codingJson.coding[0].userSelected}
                    text$= ${codingJson.text}
                    ></lhwc-view-coding-concept>
        `;
	}

	sayHello() {
        console.log('Ow!');
    }


}

window.customElements.define('my-test-element', myTestEle);
