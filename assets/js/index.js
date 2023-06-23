'use strict';

import { dom } from "./dom.js";
import { nav } from "./nav.js";
import { ajax } from "./ajax.js";
import { content } from "./content.js";


// KONSTANTEN / VARIABLEN
export const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = dom.sel('main');
    elements.nav = dom.sel('nav.container');
}

const appendEventlisteners = () => {

}

const init = () => {
    domMapping();
    nav.create();
    ajax.fetchData().then(content.renderAbout);
    
}

// INIT
document.addEventListener('DOMContentLoaded', init);