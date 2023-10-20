'use strict';

const settings = {

    menu:
        [
            { icon: "person", name: "über mich", id: "about", iconPath: 'person.png', url: 'http://api.bialas.cloud:3001/v2/description' },
            { icon: "psychology", name: "kentnisse", id: "knowledge", url: 'http://api.bialas.cloud:3001/v2/knowledge' },
            { icon: "feed", name: "blog", id: "blog", url: 'http://api.bialas.cloud:3001/v2/blog' },
            { icon: "download", name: "download", id: "download", url: 'http://api.bialas.cloud:3001/v2/download' },
        ],
    aboutMe: 'profil-photo.jpeg',
    dataJson: '../../data/db.json'
}

export default settings;