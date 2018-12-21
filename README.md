# Rgy
 :smirk: Express yourself.

**NOTE** - Work in progress. Do not use for anything you care about.

## :scroll: Getting Started

Clone
```sh
$ git clone git@github.com:am80l/rgy.git
```

Import
```js
const Rgy = require('rgy');
```

## :scroll: Constants - Have some shortcuts.

### Range(a `Numbers | String`, b `Number | String`)
> Generate a range of *numbers* or *letters*

**Numeric Range**
```js
Range(20, 23); // RegEx Equivelent: (20|21|22|23)
```

**Lower-Case Alphabetical Range**
```js
Range("a", "c"); // RegEx Equivelent: [a-c]
```

**Upper-Case Alphabetical Range**
```js
Range("D", "F"); // RegEx Equivelent: [D-F]
```

**Upper-Case and Lower-Case Alphabetical Range**
```js
Range("x", "Z"); // RegEx Equivelent: [x-zX-Z]
```

### Letters
> Match anything alphabetical.

### Numbers
> Match anything numerical.

## :scroll: Constants - Write your own.
> You can write your own pluggable character matching rules. A constant must be an `Array` or a `Function` that returns an `Array`.

### Example
> Match characters that you would find in an email address.
```js
const EmailCharacters = ['.', '_', '@', '-'];
```

## :scroll: Examples

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
