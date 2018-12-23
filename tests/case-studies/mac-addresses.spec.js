import Rgy from '../../src/rgy';
import { Start, End, Numbers } from '../../src/helpers/constants.js';
import Range from '../../src/helpers/range';

/*
  Subject: Mac Addresses

  - RegEx -
  (Unknown)

  - Matches -
  AA:BB:CC:00:22:44
*/

const valid = [
  'F0:B1:16:D6:B7:30',
  '1D:9B:87:38:E4:2F',
  'FF:81:33:FD:63:B1',
  '4A:22:B3:9F:F4:B3',
  '87:A3:0C:CA:2A:CA',
  '62:DD:73:07:1A:0D',
  '2E:ED:24:35:33:0B',
  'A0:D6:8F:3D:38:68',
  '8F:28:B8:93:1F:19',
  '45:A1:1D:9F:4B:15',
  '0F:A8:E7:DC:E8:0E',
  '1F:D6:20:08:FC:20',
  '24:83:7B:3F:B2:46',
  '3D:D1:34:0F:1B:17',
  'AB:8B:fD:16:5E:2F',
  '51:00:D3:89:90:92',
  '77:E9:DA:42:67:C1',
  '08:66:9B:4F:58:DE',
  '76:89:EA:18:9B:F1',
  '15:E1:63:87:95:12',
  '63:c2:45:9B:9B:C6',
  '39:B5:64:92:32:3E',
  '31:E5:81:5B:B1:B3',
  'AA:BC:D6:53:20:38',
  '08:3A:9E:B8:95:F2',
  '70:99:7B:1A:AD:D0',
  '95:30:CD:CD:11:DD',
  '36:ED:E6:31:3F:FB',
  '0E:A2:5F:74:E8:D0',
  'C5:37:22:63:42:D8',
];

const invalid = [
  'F0:B1::16:D6:B7:30',
  '1D:9B:*:E4:2F',
  'FO:81:33:FD:63:B1',
  '4A:223:9F:F4:B3',
  '62:D:73:/07:1A:0D',
  '-2E:ED:35:?33:0B',
  'A0:D6:8F:3D:H8:68',
  '8F:28:B8:93:112:19',
  '45:A1:1D:9F:4B15',
];

const MatchHex = { any: [...Range(0, 9), ...Range('a', 'F')], length: 2 };

const RgyMacAddresses = Rgy([
  MatchHex,
  { any: ':' },
  MatchHex,
  { any: ':' },
  MatchHex,
  { any: ':' },
  MatchHex,
  { any: ':' },
  MatchHex,
  { any: ':' },
  MatchHex,
]);

describe('Case Study: MacAddress', () => {
  describe('Valid MacAddresses', () => {
    valid.forEach(macAddress => {
      it(`Correctly tests for - ${macAddress}`, () => {
        const test = RgyMacAddresses.test(macAddress);
        expect(test).toBe(true);
      });
    });
  });

  describe('Invalid MacAddresses', () => {
    invalid.forEach(macAddress => {
      it(`Correctly tests for - ${macAddress}`, () => {
        const test = RgyMacAddresses.test(macAddress);
        expect(test).toBe(false);
      });
    });
  });
});
