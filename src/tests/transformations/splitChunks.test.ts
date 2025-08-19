import { splitChunks } from '../../transformations/splitChunks';

describe('splitChunks', () => {
  it('creates chunks of size 3', () => {
    expect(splitChunks('hello world', 3)).toEqual(['hel', 'lo ', 'wor', 'ld']);
  });

  it('creates chunks of size 2', () => {
    expect(splitChunks('hello world', 2)).toEqual(['he', 'll', 'o ', 'wo', 'rl', 'd']);
  });

  it('creates chunks of size 1', () => {
    expect(splitChunks('hello world')).toEqual([
      'h', 'e', 'l', 'l', 'o', ' ',
      'w', 'o', 'r', 'l', 'd',
    ]);
  });
});
