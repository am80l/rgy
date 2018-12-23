# Rgy

[![Build Status](https://travis-ci.com/b-upstairs/rgy.svg?branch=master)](https://travis-ci.com/b-upstairs/rgy)

:smirk: Express yourself.

Rgy is a self documenting regex API.

**NOTE** - Work in progress. Do not use for anything you care about.

## Why?

If you're like most programmers, at some point in your career you may have come across something like this:

`^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[13-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$`

Hopefully the regex is accompanied by a comment explaining the intent and useage of the expression, though the fact is, even the most experienced programmers can have trouble reading and maintaining a regular expression like this, which leads to wasted time trying to understand code that could be better spent working on other parts of your application.

### The solution? Rgy!

Rgy (pronouned reggie) is a small api that allows you to create human readable, self documenting regular expressions. And you don't need to know any regex at all to use it.

Using Rgy, you can take an expression from this:

```
^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}↵
(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
```

To this:

```js
Rgy([
  { any: Range(0, 255) },
  { any: "-", length: 1 },
  { any: Range(0, 255) },
  { any: "-", length: 1 },
  { any: Range(0, 255) },
]);
```

## :scroll: Getting Started

Clone

```sh
$ git clone git@github.com:am80l/rgy.git
```

Import

```js
const Rgy = require("rgy");
```

## :scroll: Constants - Have some shortcuts.

### Range(a `Numbers | String`, b `Number | String`)

> Generate a range of _numbers_ or _letters_

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
const EmailCharacters = [".", "_", "@", "-"];
```

## :scroll: Examples

### IPv4 Validation

```js
const ipTest = Rgy([
  Start,
  { any: Range(0, 255), minimum: 1, maximum: 3 },
  { exactly: "-", length: 1 },
  { any: Range(0, 255), minimum: 1, maximum: 3 },
  { exactly: "-", length: 1 },
  { any: Range(0, 255), minimum: 1, maximum: 3 },
  End
]);

ipTest.test("127.0.0.1"); // true
ipTest.test("300.20.10.0"); // false
```
