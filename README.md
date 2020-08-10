# feed-db

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![code style: prettier][code-style-prettier-image]][code-style-prettier-url]

Feed database read APIs.

## Installation

```sh
npm install feed-db
```

## Usages

### Feeds

```js
const { Feeds } = require("feed-db");

const feeds = new Feeds("feed-db.json");

console.log(feeds.getFeed("https://myblog.com"));
console.log(feeds.getFeed("https://www.myblog.com"));
console.log(feeds.getFeed("myblog.com"));
```

## Related

- [dev-blog-directory](https://github.com/dev-blog-directory/dev-blog-directory) - A Developer Blog Directory. Auto generated documents from [raw data](https://github.com/dev-blog-directory/dev-blog-directory-raw).
- [dev-blog-directory-raw](https://github.com/dailyrandomphoto/dev-blog-directory-raw) - Raw data storage of [Developer Blog Directory](https://github.com/dailyrandomphoto/dev-blog-directory).
- [dev-blog-directory-feed-db](https://github.com/dev-blog-directory/dev-blog-directory-feed-db) - Feed database of developer blogs.

## License

Copyright (c) 2020 [dailyrandomphoto][my-url]. Licensed under the [MIT license][license-url].

[my-url]: https://github.com/dailyrandomphoto
[npm-url]: https://www.npmjs.com/package/feed-db
[travis-url]: https://travis-ci.org/dailyrandomphoto/feed-db
[license-url]: LICENSE
[code-style-prettier-url]: https://github.com/prettier/prettier
[npm-downloads-image]: https://img.shields.io/npm/dm/feed-db
[npm-version-image]: https://img.shields.io/npm/v/feed-db
[license-image]: https://img.shields.io/npm/l/feed-db
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/feed-db
[code-style-prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
