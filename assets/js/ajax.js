'use strict';

import settings from "./settings.js";

export const ajax = {

    startUrl : settings.dataJson,

    async fetchData(url = this.startUrl) {
        try {
          const response = await fetch(url);
          const json = await response.json();
          return json;
        } catch (error) {
          throw new Error('Fehler bei Data lesen');
        }
      }
}