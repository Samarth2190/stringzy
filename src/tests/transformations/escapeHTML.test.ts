import { describe, it } from 'node:test';
import assert from 'node:assert';
import { escapeHtml } from '../../transformations/escapeHTML';

describe('escapeHtml', () => {
  it('escapes ampersand', () => {
    assert.strictEqual(escapeHtml('Tom & Jerry'), 'Tom &amp; Jerry');
  });

  it('escapes less than', () => {
    assert.strictEqual(escapeHtml('5 < 10'), '5 &lt; 10');
  });

  it('escapes greater than', () => {
    assert.strictEqual(escapeHtml('10 > 5'), '10 &gt; 5');
  });

  it('escapes double quotes', () => {
    assert.strictEqual(escapeHtml('Say "Hello"'), 'Say &quot;Hello&quot;');
  });

  it('escapes single quotes', () => {
    assert.strictEqual(escapeHtml("It's working"), 'It&#39;s working');
  });

  it('escapes all special characters together', () => {
    assert.strictEqual(escapeHtml(`&<>"'`), '&amp;&lt;&gt;&quot;&#39;');
  });

  it('escapes script tag', () => {
    assert.strictEqual(
      escapeHtml('<script>alert("XSS")</script>'),
      '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
    );
  });

  it('escapes HTML with attributes', () => {
    assert.strictEqual(
      escapeHtml('<div class="test">content</div>'),
      '&lt;div class=&quot;test&quot;&gt;content&lt;/div&gt;'
    );
  });

  it('handles empty string', () => {
    assert.strictEqual(escapeHtml(''), '');
  });

  it('handles string with no special characters', () => {
    assert.strictEqual(escapeHtml('Hello World'), 'Hello World');
  });

  it('escapes repeated characters', () => {
    assert.strictEqual(escapeHtml('<<>>'), '&lt;&lt;&gt;&gt;');
  });

  it('preserves whitespace', () => {
    assert.strictEqual(escapeHtml('  <  >  '), '  &lt;  &gt;  ');
  });
});
