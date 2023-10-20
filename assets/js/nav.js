'use strict';

import settings from "./settings.js";
import dom from "./dom.js";
import { elements } from "./index.js";
import { ajax } from "./ajax.js";
import { content } from "./content.js";


export const nav = {

    create() {

        for (const item of settings.menu) {

            const nav = dom.create({
                parent: elements.nav,
                classes: ['nav']
            });

            const text = dom.create({
                content: item.name,
                type: 'span',
                parent: nav,
                classes: [''],
                attr: { 'id': item.id },
                listeners: { 'click': (e) => this.click(e.target.id) }
            });

        }
    },

    click(name) {
        
        switch (name) {
            case 'about':
                ajax.fetchData(settings.dataJson)
                        .then(content.renderAbout);
                break;
        
            case 'knowledge':
                ajax.fetchData(settings.dataJson)
                        .then(content.renderKnowledge);
                break;
        
            case 'blog':
                ajax.fetchData(settings.dataJson)
                        .then(content.renderBlog);
                break;

            case 'download':
                ajax.fetchData(settings.dataJson)
                        .then(content.renderDownload);
                break;
        }
    }
}


// 'click': (e) => content.create(e.target.id,data[e.target.id]) 