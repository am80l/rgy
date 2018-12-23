import Rgy from '../../src/rgy';
import { Start, End, Numbers } from '../../src/helpers/constants.js';
import Range from '../../src/helpers/range';

/*
  Subject: IPv4

  - RegEx -
  /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/

  - Matches -
  127.0.0.1
*/

// Match: Octal
// const MatchOctal = { any: Range(0, 255), minimum: 1, maximum: 3 };
const MatchOctal = { any: Range(0, 255) };

// Match: Period
const MatchPeriod = { any: '.' };

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

const valid = [
  '16.78.68.210',
  '33.167.243.100',
  '251.243.41.213',
  '101.150.21.198',
  '53.133.1.108',
  '84.43.168.88',
  '230.15.162.54',
  '52.131.112.133',
  '32.45.108.130',
  '107.228.147.9',
  '64.226.189.248',
  '249.218.47.35',
  '146.145.162.221',
  '253.178.68.247',
  '79.68.75.48',
  '204.162.81.155',
  '125.172.122.32',
  '153.10.31.239',
  '181.90.128.106',
  '50.88.30.228',
  '130.192.238.102',
  '182.201.157.25',
  '187.84.2.200',
  '194.205.9.132',
  '83.7.247.119',
  '75.65.99.237',
  '196.84.200.95',
  '8.187.195.220',
  '111.192.119.127',
  '245.251.94.123',
];

const invalid = [
  '16.78.68.2101',
  '33.167.243',
  '251.243.41.',
  '101.150.21.a',
  '53.2..1.108',
  '84.43.168.88.1',
  '230.15.162.54 ',
  ' 52.131.112.133',
  '300.45.108.130',
];

describe('Case Study: IPv4', () => {
  describe('Valid IPs', () => {
    valid.forEach(ip => {
      it(`Correctly tests for - ${ip}`, () => {
        const test = RgyIPv4.test(ip);
        expect(test).toBe(true);
      });
    });
  });

  describe('Invalid IPs', () => {
    invalid.forEach(ip => {
      it(`Correctly tests for - ${ip}`, () => {
        const test = RgyIPv4.test(ip);
        expect(test).toBe(false);
      });
    });
  });
});
