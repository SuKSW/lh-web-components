import {html} from '@polymer/lit-element/lit-element.js';

export const style = html`<style>

.sch-table-container {
    overflow: scroll;
    height: 400px;
    background-color: #f7f9fc;
    margin: 0px;
    border: 1px solid #ccc;
    padding: 10px;
}
.sch-table {
    margin: 0px;
    padding: 0px;
    overflow: scroll;
    border-collapse: collapse;
}
.sch-table-day{
    background-color: #fffff9;
    font-weight: normal;
    font-size: 14px;
    height: 22px;
    width: 130px;
    border: 1px solid #ccc;
}
.sch-table-intervals {
    background-color: #fffff9;
    height: 30px;
    white-space: nowrap;
    border: 1px solid #ccc;
    font-size: 12px;
    text-align: center;
    padding-top: 8px;

}


.sch-dis-th:hover {
    background-color: #d7f7cd;
}

</style>`;