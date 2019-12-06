'use strict';

const urlAlias = url => {
  const regex = /https?:\/\/|www\.|\?.+|#.+|index\.html|\/$/g;
  url = url.replace(regex, '');
  // Replace one more time
  url = url.replace(regex, '');
  return url;
};

module.exports.urlAlias = urlAlias;
