import { escapeHtml } from '../../transformations/escapeHTML';

describe('escapeHtml', () => {
  it('escapes ampersand', () => {
    expect(escapeHtml('Tom & Jerry')).toBe('Tom &amp; Jerry');
  });

  it('escapes less than', () => {
    expect(escapeHtml('5 < 10')).toBe('5 &lt; 10');
  });

  it('escapes greater than', () => {
    expect(escapeHtml('10 > 5')).toBe('10 &gt; 5');
  });

  it('escapes double quotes', () => {
    expect(escapeHtml('Say "Hello"')).toBe('Say &quot;Hello&quot;');
  });

  it('escapes single quotes', () => {
    expect(escapeHtml("It's working")).toBe('It&#39;s working');
  });

  it('escapes all special characters together', () => {
    expect(escapeHtml(`&<>"'`)).toBe('&amp;&lt;&gt;&quot;&#39;');
  });

  it('escapes script tag', () => {
    expect(escapeHtml('<script>alert("XSS")</script>')).toBe(
      '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
    );
  });

  it('escapes HTML with attributes', () => {
    expect(escapeHtml('<div class="test">content</div>')).toBe(
      '&lt;div class=&quot;test&quot;&gt;content&lt;/div&gt;'
    );
  });

  it('handles empty string', () => {
    expect(escapeHtml('')).toBe('');
  });

  it('handles string with no special characters', () => {
    expect(escapeHtml('Hello World')).toBe('Hello World');
  });

  it('escapes repeated characters', () => {
    expect(escapeHtml('<<>>')).toBe('&lt;&lt;&gt;&gt;');
  });

  it('preserves whitespace', () => {
    expect(escapeHtml('  <  >  ')).toBe('  &lt;  &gt;  ');
  });
});
