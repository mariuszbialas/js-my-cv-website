'use strict';

import { elements } from './index.js';
import dom from './dom.js';

export const content = {

  renderAbout(data) {

    const { title, description, img } = data.about[0];

    elements.main.innerHTML = '';

    const container = dom.create({
      parent: elements.main,
      classes: ['content, about'],
    });

    const pic = dom.create({
      type: 'img',
      parent: container,
      attr: { src: `/assets/img/${img}`, alt: 'Mariusz Bialas profil Bild' },
    });

    dom.create({
      content: title,
      type: 'h1',
      parent: container,
    });

    description.forEach(item => {
      dom.create({
        content: item,
        type: 'p',
        parent: container,
        classes: ['text'],
      });
    }

    )
  },

  renderKnowledge(data) {
    elements.main.innerHTML = '';

    const container = dom.create({
      parent: elements.main,
      classes: ['skills', 'content'],
    });
    const ul = dom.create({ type: 'ul', parent: container });

    data.knowledge.forEach((skill) => {
      const li = dom.create({
        type: 'li',
        parent: ul,
      });
      dom.create({
        content: skill.name,
        type: 'span',
        parent: li,
      });
      const percent = dom.create({
        type: 'span',
        parent: li,
        classes: ['percent'],
      });
      dom.create({
        parent: percent,
        attr: { style: `width: ${skill.percent}%` },
      });
    });
  },

  renderBlog(data) {
    elements.main.innerHTML = '';

    data.blog.forEach((post) => {
      const container = dom.create({
        type: 'article',
        parent: elements.main,
        classes: ['content'],
      });

      dom.create({
        content: post.title,
        type: 'p',
        parent: container,
        classes: ['title'],
      });

      const date = dom.create({ parent: container });

      dom.create({
        content: post.date,
        type: 'p',
        parent: date,
        classes: ['date'],
      });

      dom.create({
        content: post.description,
        type: 'p',
        parent: container,
        classes: ['post'],
      });

      if (post.github)
        dom.create({
          content: 'gitHub repository ❯❯❯',
          type: 'a',
          parent: container,
          attr: { href: post.github, target: '_blank' },
          classes: ['link'],
        });

        if (post.url)
        dom.create({
          content: 'Projekt Webseite ❯❯❯',
          type: 'a',
          parent: container,
          attr: { href: post.url, target: '_blank' },
          classes: ['link'],
        });

        if (post.line)
        dom.create({
          content: post.divide,
          type: 'span',
          parent: container,
          classes: ['post'],
        });
    });
  },

  renderDownload(data) {
    elements.main.innerHTML = '';

    data.download.forEach((item) => {
      let container = dom.create({
        parent: elements.main,
        classes: ['download', 'content'],
      });

      dom.create({
        content: item.name,
        type: 'p',
        parent: container,
        classes: ['title'],
      });

      const link = dom.create({
        parent: container,
      });

      let fileName = item.url.split('/');
      fileName = fileName[fileName.length - 1];
      dom.create({
        content: fileName,
        type: 'a',
        parent: link,
        classes: ['link'],
        attr: { href: item.url, target: '_blank' },
      });
    });
  },
};


