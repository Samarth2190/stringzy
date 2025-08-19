import { DateFormats, isDate } from '../../validations/isDate';

describe('isDate', () => {
  it('validates dates formatted as YYYY-MM-DD', () => {
    expect(isDate('2020-01-01', DateFormats.YYYYMMDD)).toBe(true);
    expect(isDate('1999-06-22', DateFormats.YYYYMMDD)).toBe(true);
    expect(isDate('1852-12-31', DateFormats.YYYYMMDD)).toBe(true);
  });

  it('invalidates dates formatted as YYYY-MM-DD with out-of-range months', () => {
    expect(isDate('2020-13-31', DateFormats.YYYYMMDD)).toBe(false);
    expect(isDate('1000-02-40', DateFormats.YYYYMMDD)).toBe(false);
    expect(isDate('1970-15-32', DateFormats.YYYYMMDD)).toBe(false);
  });

  it('validates dates formatted as MM-DD-YYYY', () => {
    expect(isDate('12-31-2020', DateFormats.MMDDYYYY)).toBe(true);
    expect(isDate('02-04-1900', DateFormats.MMDDYYYY)).toBe(true);
    expect(isDate('05-20-1820', DateFormats.MMDDYYYY)).toBe(true);
  });

  it('invalidates dates formatted as MM-DD-YYYY', () => {
    expect(isDate('13-31-2000', DateFormats.MMDDYYYY)).toBe(false);
    expect(isDate('02-31-1990', DateFormats.MMDDYYYY)).toBe(false);
    expect(isDate('01-33-1970', DateFormats.MMDDYYYY)).toBe(false);
  });

  it('validates dates formatted as DD-MM-YYYY', () => {
    expect(isDate('31-12-2020', DateFormats.DDMMYYYY)).toBe(true);
    expect(isDate('23-01-1888', DateFormats.DDMMYYYY)).toBe(true);
    expect(isDate('28-02-2000', DateFormats.DDMMYYYY)).toBe(true);
  });

  it('invalidates dates formatted as DD-MM-YYYY', () => {
    expect(isDate('32-12-2020', DateFormats.DDMMYYYY)).toBe(false);
    expect(isDate('30-02-2001', DateFormats.DDMMYYYY)).toBe(false);
    expect(isDate('01-13-1999', DateFormats.DDMMYYYY)).toBe(false);
  });

  it('properly handles other valid separators', () => {
    expect(isDate('2020/12/31', DateFormats.YYYYMMDD, '/')).toBe(true);
    expect(isDate('2020.12.31', DateFormats.YYYYMMDD, '.')).toBe(true);
  });

  it('properly invalidates non-valid separators', () => {
    expect(isDate('2020?12?31', DateFormats.YYYYMMDD, '?' as '-')).toBe(false);
    expect(isDate('2020!12!31', DateFormats.YYYYMMDD, '!' as '-')).toBe(false);
  });

  it('invalidates improperly formatted dates', () => {
    expect(isDate('1-01-2000', DateFormats.MMDDYYYY)).toBe(false);
    expect(isDate('01-1-2000', DateFormats.MMDDYYYY)).toBe(false);
    expect(isDate('01-1--2000', DateFormats.MMDDYYYY)).toBe(false);
    expect(isDate('not a date', DateFormats.MMDDYYYY)).toBe(false);
    expect(isDate(11012000 as any, DateFormats.MMDDYYYY)).toBe(false);
  });
});
