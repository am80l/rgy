/*
  Subject: Date

  - RegEx -
  /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/

  - Matches -
  dd/mm/yy
*/

// Helper Function: Add 0 if length is 1
const PadLeftZero = n => (n.length === 1 ? '0' + n : n);

const DayRange = Range(1, 31).map(PadLeftZero);
const MonthRange = Range(1, 12).map(PadLeftZero);

// Match: Slash
const MatchSlash = { any: '/', length: 1 };

// @RGY
const RgyDate = Rgy([
  Start,
  { any: DayRange, length: 2 },
  Slash,
  { any: MonthRange, length: 2 },
  Slash,
  { any: Numbers, length: 4 },
  End,
]);

/*
  Subject: IPv4

  - RegEx -
  /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/

  - Matches -
  127.0.0.1
*/

// Match: Octal
const MatchOctal = { any: Range(0, 255), minimum: 1, maximum: 3 };

// Match: Period
const MatchPeriod = { any: '.', length: 1 };

// @RGY
const RgyIPv4 = Rgy([
  Start,
  MatchOctal,
  MatchPeriod,
  MatchOctal,
  MatchPeriod,
  MatchOctal,
  MatchPeriod,
  MatchOctal,
  End,
]);

/*
  Subject: Phone Number

  - RegEx -
  /^\+?(\d.*){3,}$/

  - Matches -
  555-555-5555
*/

// Match: Any 3 numbers
const Match3Numbers = { any: Number, length: 3 };

// Match: Any 4 numbers
const Match4Numbers = { any: Number, length: 4 };

// Match: Any valid phone nr. delimeter
const MatchDelimeter = { any: ['-', '.'], length: 1 };

// @RGY
const RgyPhoneNr = Rgy([Start, Match3Numbers, MatchDelimeter, Match3Numbers, MatchDelimeter, Match4Numbers]);

/*
  Subject: Hex Color

  - RegEx -
  /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

  - Matches -
  #FFF or #00AACC
*/

RgyHexColor([Start, { any: '#', length: 1 }, { any: [Range('a', 'F'), Numbers], minimum: 3, maximum: 6 }, End]);

/*
  Subject: Source of an Image Tag

  - RegEx -
  /^<\s*img[^>]+src\s*=\s*(["'])(.*?)\1[^>]*>$/

  - Matches -
  <img src="file.jpg"  />
*/

RgyImageSrc = Rgy([
  Start,
  { any: '<', length: 1 },
  { any: ' ' },
  { any: 'src', length: 3 },
  { any: ' ' },
  { any: Quote, length: 1 },
  { any: URLSafeCharacter, group: true },
  { any: Quote, length: 1 },
  { any: Any },
  { any: ['/>', '>'] },
  End,
]);
