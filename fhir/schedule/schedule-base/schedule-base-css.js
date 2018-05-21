import {html} from '@polymer/lit-element/lit-element.js';

export const style = html`


<style>

.section-heading {
    color: white;
    text-align: left;
    padding: 10px 16px;
    font-size: 17px;
    background-color: #3CBC8D;
    font-weight: bold;
    margin: 0px;
    grid-area: header;
}
.schedule-base {
    background-color: #e3e7ed;
    padding: 5px;
    overflow: auto;
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-areas:
    'header header'
    'sidebar main'
    'sidebar main';
    grid-gap: 10px;
}
.schedule-base-sidebar {
    display: inline-block;
    grid-area: sidebar;
}
.lh-section {
    background-color: #f7f9fc;
    margin: 8px;
    border: 1px solid #ccc;
    padding: 10px;
}
.schedule-base-main {
    grid-area: main;
}
</style>`;