'use strict';

const {resolve} = require('path');
const chai = require('chai');
chai.use(require('chai-as-promised'));
const {expect} = chai;
const lib = require('feed-db');
const {Feeds, urlAlias} = require('feed-db');

describe('feed-db', () => {
  it('should do something', () => {
    expect(lib).to.be.an('object');
    expect(Feeds).to.be.a('function');
    expect(urlAlias).to.be.a('function');
  });

  describe('Feeds', () => {
    it('should do something', () => {
      const feeds = new Feeds(resolve(__dirname, './feed-db.json'));
      expect(feeds.getFeed('http://www.01happy.com/')).to.be.an('object');
      expect(feeds.getFeed('https://01happy.com/')).to.be.an('object');
      expect(feeds.getFeed('www.01happy.com')).to.be.an('object');
      expect(feeds.getFeed('01happy.com')).to.be.an('object');
      expect(feeds.getFeed('abcdefg')).to.be.a('undefined');
    });
  });
});
