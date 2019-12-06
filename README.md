# feed-db

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][devDependencies-image]][devDependencies-url]

Feed database read APIs.

## Installation

```sh
npm install feed-db
```

## Usages

### Feeds
```js
const {Feeds} = require('feed-db');

const feeds = new Feeds('feed-db.json');

console.log(feeds.getFeed('https://myblog.com'));
console.log(feeds.getFeed('https://www.myblog.com'));
console.log(feeds.getFeed('myblog.com'));
```

## Related

- [dev-blog-directory](https://github.com/dev-blog-directory/dev-blog-directory) - A Developer Blog Directory. Auto generated documents from [raw data](https://github.com/dev-blog-directory/dev-blog-directory-raw).
- [dev-blog-directory-raw](https://github.com/dailyrandomphoto/dev-blog-directory-raw) - Raw data storage of [Developer Blog Directory](https://github.com/dailyrandomphoto/dev-blog-directory).
- [dev-blog-directory-feed-db](https://github.com/dev-blog-directory/dev-blog-directory-feed-db) - Feed database of developer blogs.


## License
Copyright (c) 2019 [dailyrandomphoto][my-url]. Licensed under the [MIT license][license-url].

[my-url]: https://github.com/dailyrandomphoto
[npm-url]: https://www.npmjs.com/package/feed-db
[travis-url]: https://travis-ci.org/dailyrandomphoto/feed-db
[coveralls-url]: https://coveralls.io/github/dailyrandomphoto/feed-db?branch=master
[license-url]: LICENSE
[dependencies-url]: https://david-dm.org/dailyrandomphoto/feed-db
[devDependencies-url]: https://david-dm.org/dailyrandomphoto/feed-db?type=dev

[npm-downloads-image]: https://img.shields.io/npm/dm/feed-db
[npm-version-image]: https://img.shields.io/npm/v/feed-db
[license-image]: https://img.shields.io/npm/l/feed-db
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/feed-db
[coveralls-image]: https://img.shields.io/coveralls/github/dailyrandomphoto/feed-db
[dependencies-image]: https://img.shields.io/david/dailyrandomphoto/feed-db
[devDependencies-image]: https://img.shields.io/david/dev/dailyrandomphoto/feed-db
