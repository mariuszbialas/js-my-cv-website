'use strict';

import {elements} from "./index.js";
import dom from "./dom.js";


export const content = {

    renderAbout(data) {

        const { description, img } = data.about[0];

        elements.main.innerHTML = '';

        const container = dom.create({
            parent: elements.main,
            classes: ['content']
        });

        const pic = dom.create({
            type: 'img',
            parent: container,
            attr: { "src": img}
        });

        dom.create({
            content: description,
            type: 'p',
            parent: container,
            classes: ['text']
        });

    },

    renderKnowledge(data) {
        elements.main.innerHTML = '';
        data = data.knowledge;

        const container = dom.create({
            parent: elements.main,
            classes: ['skills', 'content']
        });
        const ul = dom.create({type: 'ul', parent: container});

        data.forEach(skill => {
                const li = dom.create({
                    type:'li',
                    parent: ul
                });
                dom.create({
                    content:skill.name,
                    type: 'span',
                    parent: li
                });
                const percent = dom.create({
                    type: 'span',
                    parent: li,
                    classes: ['percent']
                });
                dom.create({
                    parent: percent,
                    attr: {style: `width: ${skill.percent}%`}
                });
            });
    },

    renderBlog(data) {
        elements.main.innerHTML = '';

        data.blog.forEach(post => {

            const container = dom.create({
                type: 'article',
                parent: elements.main,
                classes: ['content']
            });

            dom.create({
                content: post.title,
                type: 'p',
                parent: container,
                classes: ['title']
            });

            dom.create({
                content: post.date,
                type: 'p',
                parent: container,
                classes: ['date']
            });

            dom.create({
                content: post.description,
                type: 'p',
                parent: container,
                classes: ['post']
            });

            if(post.link) 
                dom.create({
                content: 'GitHub ❯❯❯',
                type: 'a',
                parent: container,
                attr: {'href': post.link, 'target': '_blank'},
                classes: ['link'],
                })
        })
    },

    renderDownload(data) {
        elements.main.innerHTML = '';
        data = data.download;
        
        data.forEach(item => {
            let container = dom.create({
                parent: elements.main,
                classes: ['download', 'content']
            });

            dom.create({
                content: item.name,
                type: 'p',
                parent: container,
                classes: ['title']
            });

            let fileName = item.url.split('/');
            fileName = fileName[fileName.length - 1];
            let link = dom.create({
                content: fileName,
                type: 'a',
                parent: container,
                classes: ['link'],
                attr: {'href': item.url, 'target': '_blank'}
            });
        })
    }
}