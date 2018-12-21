# Rgy
Express yourself.

**NOTE** - Work in progress. Do not use for anything you care about.

## Getting Start

Clone
```sh
$ git clone git@github.com:am80l/rgy.git
```

Import
```js
const Rgy = require('rgy');
```

## Write an Expression

```js

```

## Examples

### IPv4 Validation
```js
const ipTest = Rgy([
  Start,
  { any: Range(0, 255), minimum: 1, maximum: 3 },
  { exactly: '-', length: 1 },
  { any: Range(0, 255), minimum: 1, maximum: 3 },
  { exactly: '-', length: 1 },
  { any: Range(0, 255), minimum: 1, maximum: 3 },
  End
]);

ipTest.test('127.0.0.1'); // true
ipTest.test('300.20.10.0'); // false
```
