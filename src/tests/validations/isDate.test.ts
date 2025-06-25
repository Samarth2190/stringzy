import { describe, it } from 'node:test';
import assert from 'node:assert';
import { DateFormats, isDate } from '../../validations/isDate';

describe('isDate', () => {
  it('validates dates formatted as YYYY-MM-DD', () => {
    assert.strictEqual(isDate('2020-01-01', DateFormats.YYYYMMDD), true);
    assert.strictEqual(isDate('1999-06-22', DateFormats.YYYYMMDD), true);
    assert.strictEqual(isDate('1852-12-31', DateFormats.YYYYMMDD), true);
  });
  it('invalidates dates formatted as YYYY-MM-DD with out-of-range months', () => {
    assert.strictEqual(isDate('2020-13-31', DateFormats.YYYYMMDD), false);
    assert.strictEqual(isDate('1000-02-40', DateFormats.YYYYMMDD), false);
    assert.strictEqual(isDate('1970-15-32', DateFormats.YYYYMMDD), false);
  });
  it('validates dates formatted as MM-DD-YYYY', () => {
    assert.strictEqual(isDate('12-31-2020', DateFormats.MMDDYYYY), true);
    assert.strictEqual(isDate('02-04-1900', DateFormats.MMDDYYYY), true);
    assert.strictEqual(isDate('05-20-1820', DateFormats.MMDDYYYY), true);
  });
  it('invalidates dates formatted as MM-DD-YYYY', () => {
    assert.strictEqual(isDate('13-31-2000', DateFormats.MMDDYYYY), false);
    assert.strictEqual(isDate('02-31-1990', DateFormats.MMDDYYYY), false);
    assert.strictEqual(isDate('01-33-1970', DateFormats.MMDDYYYY), false);
  });
  it('validates dates formatted as DD-MM-YYYY', () => {
    assert.strictEqual(isDate('31-12-2020', DateFormats.DDMMYYYY), true);
    assert.strictEqual(isDate('23-01-1888', DateFormats.DDMMYYYY), true);
    assert.strictEqual(isDate('28-02-2000', DateFormats.DDMMYYYY), true);
  });
  it('invalidates dates formatted as DD-MM-YYYY', () => {
    assert.strictEqual(isDate('32-12-2020', DateFormats.DDMMYYYY), false);
    assert.strictEqual(isDate('30-02-2001', DateFormats.DDMMYYYY), false);
    assert.strictEqual(isDate('01-13-1999', DateFormats.DDMMYYYY), false);
  });
  it('properly handles other valid separators', () => {
    assert.strictEqual(isDate('2020/12/31', DateFormats.YYYYMMDD, '/'), true);
    assert.strictEqual(isDate('2020.12.31', DateFormats.YYYYMMDD, '.'), true);
  });
  it('properly invalidates non-valid separators', () => {
    assert.strictEqual(isDate('2020?12?31', DateFormats.YYYYMMDD, '?' as '-'), false);
    assert.strictEqual(isDate('2020!12!31', DateFormats.YYYYMMDD, '!' as '-'), false);
  });
  it('invalidates improperly formatted dates', () => {
    assert.strictEqual(isDate('1-01-2000', DateFormats.MMDDYYYY), false);
    assert.strictEqual(isDate('01-1-2000', DateFormats.MMDDYYYY), false);
    assert.strictEqual(isDate('01-1--2000', DateFormats.MMDDYYYY), false);
    assert.strictEqual(isDate('not a date', DateFormats.MMDDYYYY), false);
    assert.strictEqual(isDate(11012000 as any, DateFormats.MMDDYYYY), false);
  });
});
