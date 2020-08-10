'use strict';

const fs = require('fs-extra');
const {readJsonSync: readFileSync} = require('node-serialization');
const {urlAlias} = require('./utils.js');

class Feeds {
  constructor(file) {
    if (fs.existsSync(file)) {
      this.init(file);
    } else {
      console.log(`Can't find file '${file}'.`);
      this.DB = {};
    }
  }

  init(file) {
    const feedList = readFileSync(file);
    this.DB = {};
    feedList.forEach(feed => {
      if (feed && feed.alias) {
        this.DB[feed.alias] = feed;
      }
    });
  }

  getFeed(url) {
    return this.DB[urlAlias(url)];
  }
}

module.exports = Feeds;
