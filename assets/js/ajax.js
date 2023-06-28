'use strict';

import settings from "./settings.js";

export const ajax = {

    aboutUrl : settings.menu[0].url,

    async fetchData(url = this.aboutUrl) {
        try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        } catch (error) {
          throw new Error('Fehler bei Data lesen');
        }
      }
}