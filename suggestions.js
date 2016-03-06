"use strict";

module.exports = [
  { find: /Javascript/g, suggest: 'JavaScript' },
  { find: /```js/g, suggest: '```javascript' },
  { find: /^# /g, suggest: 'Sitepoint doesn\'t allow H1 titles' }
];
