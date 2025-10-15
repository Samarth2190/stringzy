<div align="center">

![Stringzy banner](./assets/stringzy-banner2.jpg)

![NPM Version](https://img.shields.io/npm/v/stringzy)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Downloads](https://img.shields.io/npm/dt/stringzy)
![License](https://img.shields.io/npm/l/stringzy)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**A lightweight, zero-dependency NPM Package for elegant string manipulations. It provides a comprehensive range of text utilities for JavaScript and Node.js applications including transformations, validations, analysis, and formatting.**

[Checkout our Contributors!](#contri)

[Join the Community!](#community)

</div>

## ✨ Features

- 💪 **Powerful** - Transform, validate, analyze, and format strings with minimal code
- 🪶 **Lightweight** - Zero dependencies, tiny footprint
- 🧩 **Modular** - Import only what you need with organized namespaces
- 🚀 **Fast** - Optimized for performance
- ✅ **Tested** - Reliable and robust
- 🎯 **Comprehensive** - 4 specialized modules for all string needs

## 📦 Installation

```bash
# Using npm
npm install stringzy

# Using yarn
yarn add stringzy

# Using pnpm
pnpm add stringzy
```

## 🚀 Quick Start

```javascript
// Import the entire library
import stringzy from 'stringzy';

// Or import specific functions
import { isEmail, wordCount, formatPhone } from 'stringzy';

// Or import by namespace
import { transform, validate, analyze, format } from 'stringzy';

// Transform your strings
const slug = stringzy.toSlug('Hello World!'); // 'hello-world'
const isValid = stringzy.validate.isEmail('user@example.com'); // true
const count = stringzy.analyze.wordCount('Hello world'); // 2
```

## 📋 Table of Contents

### Transformations

- [truncateText](#truncatetext) - Truncates text to a specified maximum length
- [toSlug](#toslug) - Converts a string to a URL-friendly slug
- [capitalizeWords](#capitalizewords) - Capitalizes the first letter of each word
- [removeSpecialChars](#removespecialchars) - Removes special characters from a string
- [removeWords](#removewords) - Removes specified words from a string
- [removeDuplicates](#removeduplicates) - Removes duplicate words from a string
- [initials](#initials) - Extracts initials from a text string
- [camelCase](#camelcase) - Converts the given string to Camel Case
- [pascalCase](#pascalcase) - Converts the given string to Pascal Case
- [snakeCase](#snakecase) - Converts the given string to Snake Case
- [kebabCase](#kebabcase) - Converts the given string to Kebab Case
- [titleCase](#titlecase) - Converts the given string to Title Case
- [constantCase](#constantcase) - Converts the given string to Constant Case
- [escapeHTML](#escapehtml) - Escapes HTML special characters to prevent XSS attacks
- [maskSegment](#masksegment) - Masks a segment of a string by replacing characters between two indices with a specified character
- [deburr](#deburr) – Removes accents and diacritical marks from a string
- [splitChunks](#splitchunks) - Breaks a string down into chunks of specified length.
- [numberToText](#numbertotext) - Converts a number to its text representation in specified language
- [reverseWordsInString](#reversewordsinstring) - Reverses the order of words in a given string
- [stringPermutations](#stringpermutations) -  Generates all unique permutations of a given string.
- [stringCombinations](#stringcombinations) -  Generates all unique combinations of a given string.

### Validations

- [isURL](#isurl) - Checks if a string is a valid URL
- [isEmail](#isemail) - Checks if a string is a valid email address
- [isDate](#isdate) - Checks if a string is a valid date
- [isEmpty](#isempty) - Checks if a string is empty or contains only whitespace
- [isSlug](#isslug) - Checks if a string is a valid slug
- [isTypeOf](#istypeof) - Checks if a file or URL has a valid extension for a given type
- [isIPv4](#isipv4) - Checks if a string is a valid IPv4 address
- [isHexColor](#ishexcolor) - Checks if the input string is a valid hex color
- [isPalindrome](#ispalindrome) - Checks if the input string is a palindrome (ignores case, spaces, and punctuation)
- [isCoordinates](#iscoordinates) - Checks if given latitude and longitude are valid coordinates
- [isLowerCase](#islowercase) - Checks if given string only has lower case characters.
- [isUpperCase](#isuppercase) - Checks if given string only has upper case characters.
- [isAlphabetic](#isalphabetic) - Checks if input string contains only Alphabets (case insensitive)
- [isAlphaNumeric](#isalphanumeric) - Checks if input string contains only Alphabets and Digits (case insensitive)
- [isAnagram](#isanagram)- Checks if both strings are anagrams of each other. (ignores case and punctuations)
- [isMacAddress](#ismacaddress)- Checks if a given string is a valid MAC address.
- [isPanagram](#ispanagram)- Checks if a given string is a pangram (contains every letter of the English alphabet at least once).

### Analysis

- [wordCount](#wordcount) - Counts the number of words in a string
- [contentWordCount](#contentwordcount)- Counts the number of content words (nouns, verbs, adjectives, adverbs, etc.) in a string.
- [functionWordCount](#functionwordcount)- Counts the number of function words (prepositions, pronouns, conjunctions, articles, etc.) in a string.
- [readingDuration](#readingduration) - Calculates the reading duration of a given string
- [characterCount](#charactercount) - Counts the number of characters in a string
- [characterFrequency](#characterfrequency) - Analyzes character frequency in a string
- [stringSimilarity](#stringsimilarity) - Calculates the percentage similarity between two strings
- [complexity](#complexity) - Analyzes string complexity including score, uniqueness, and length
- [patternCount](#patterncount) - calculates the number of times a specific pattern occurs in a given text
- [vowelConsonantCount](#vowelconsonantcount) - Counts the number of vowels and consonants in a given string
- [checkMultiplePatterns](#checkmultiplepatterns) - Finds occurrences of multiple patterns within a given text using Rabin–Karp algorithm (case sensitive)
- [checkSubsequence](#checksubsequence) - Checks whether the second string is a subsequence of the first string (case sensitive)
- [stringRotation](#stringrotation) -  Checks if one string is a rotation of another (case sensitive).
- [lexicographicalRank](#lexicographicalrank) - Calculates the lexicographical rank of a string among all its unique permutations.

### Formatting

- [capitalize](#capitalize) - Capitalizes the first letter of each word
- [formatNumber](#formatnumber) - Formats a number string with thousand separators
- [formatPhone](#formatphone) - Formats a phone number string to standard format
- [formatDuration](#formatduration) - Converts a duration in seconds or milliseconds into a human-readable string
- [trim](#trim) - Removes unnecessary whitespace from a string.
- [formatRomanNumeral](#formatromannumeral) - Converts a positive integer into its Roman numeral representation.

## 📋 API Reference

### 🔄 Transformations

Functions for transforming and manipulating strings.

#### <a id="truncatetext"></a>`truncateText(text, maxLength, suffix = '...')`

Truncates text to a specified maximum length, adding a suffix if truncated.

```javascript
import { truncateText } from 'stringzy';

truncateText('This is a long sentence that needs truncating', 10);
// Returns: 'This is a...'

truncateText('This is a long sentence', 10, ' →');
// Returns: 'This is a →'

truncateText('Short', 10);
// Returns: 'Short' (no truncation needed)
```

| Parameter | Type   | Default  | Description                                            |
| --------- | ------ | -------- | ------------------------------------------------------ |
| text      | string | required | The input string to truncate                           |
| maxLength | number | required | Maximum length of the output string (excluding suffix) |
| suffix    | string | '...'    | String to append if truncation occurs                  |

#### <a id="toslug"></a>`toSlug(text)`

Converts a string to a URL-friendly slug.

```javascript
import { toSlug } from 'stringzy';

toSlug('Hello World!');
// Returns: 'hello-world'

toSlug('This is a TEST string 123');
// Returns: 'this-is-a-test-string-123'

toSlug('Special $#@! characters');
// Returns: 'special-characters'
```

| Parameter | Type   | Default  | Description                           |
| --------- | ------ | -------- | ------------------------------------- |
| text      | string | required | The input string to convert to a slug |

#### <a id="capitalizewords"></a>`capitalizeWords(text)`

Capitalizes the first letter of each word in a string.

```javascript
import { capitalizeWords } from 'stringzy';

capitalizeWords('hello world');
// Returns: 'Hello World'

capitalizeWords('javascript string manipulation');
// Returns: 'Javascript String Manipulation'

capitalizeWords('already Capitalized');
// Returns: 'Already Capitalized'
```

| Parameter | Type   | Default  | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| text      | string | required | The input string to capitalize |

#### <a id="removespecialchars"></a>`removeSpecialChars(text, replacement = '')`

Removes special characters from a string, optionally replacing them.

```javascript
import { removeSpecialChars } from 'stringzy';

removeSpecialChars('Hello, world!');
// Returns: 'Hello world'

removeSpecialChars('email@example.com');
// Returns: 'emailexamplecom'

removeSpecialChars('Phone: (123) 456-7890', '-');
// Returns: 'Phone-123-456-7890'
```

| Parameter   | Type   | Default  | Description                               |
| ----------- | ------ | -------- | ----------------------------------------- |
| text        | string | required | The input string to process               |
| replacement | string | ''       | String to replace special characters with |

#### <a id="removewords"></a>`removeWords(text, wordsToRemove)`

Removes specified words from a string

```javascript
import { removeWords } from 'stringzy';

removeWords('Hello world this is a test', ['this', 'is']);
// Returns: 'Hello world a test'

removeWords('Remove The Quick BROWN fox', ['the', 'brown']);
// Returns: 'Remove Quick fox'

removeWords('JavaScript is awesome and JavaScript rocks', ['JavaScript']);
// Returns: 'is awesome and rocks'
```

| Parameter     | Type     | Default  | Description                              |
| ------------- | -------- | -------- | ---------------------------------------- |
| text          | string   | required | The input string to process              |
| wordsToRemove | string[] | required | Array of words to remove from the string |

#### <a id="removeduplicates"></a>`removeDuplicates(text)`

Removes duplicate case-sensitive words from a given text.

```javascript
import { removeDuplicates } from 'stringzy';

removeDuplicates('Hello world this is a is a test');
// Returns: 'Hello world this is a test'

removeDuplicates('Remove me me me me or Me');
// Returns: 'Remove me or Me'

removeDuplicates('JavaScript is not bad and not awesome');
// Returns: 'JavaScript is not bad and awesome'
```

| Parameter | Type   | Default  | Description                 |
| --------- | ------ | -------- | --------------------------- |
| text      | string | required | The input string to process |

#### <a id="initials"></a>`initials(text, limit)`

Extracts initials from a text string.

```javascript
import { initials } from 'stringzy';

initials('John Doe');
// Returns: 'JD'

initials('Alice Bob Charlie', 2);
// Returns: 'AB'

initials('Hello World Test Case');
// Returns: 'HWTC'

initials('single');
// Returns: 's'

initials('  Multiple   Spaces   Between  ');
// Returns: 'MSB'
```

| Parameter | Type   | Default   | Description                                     |
| --------- | ------ | --------- | ----------------------------------------------- |
| text      | string | required  | The input string to extract initials from       |
| limit     | number | undefined | Maximum number of initials to return (optional) |

#### <a id="camelcase"></a>`camelCase(text)`

Converts the given string to Camel Case.

```javascript
import { camelCase } from 'stringzy';

camelCase('hello world'); // 'helloWorld'
camelCase('this is a test'); // 'thisIsATest'
```

| Parameter | Type   | Default  | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| text      | string | required | The input string to convert to Camel Case |

#### <a id="pascalcase"></a>`pascalCase(text)`

Converts the given string to Pascal Case.

```javascript
import { pascalCase } from 'stringzy';

pascalCase('hello world'); // 'HelloWorld'
pascalCase('this is a test'); // 'ThisIsATest'
```

| Parameter | Type   | Default  | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| text      | string | required | The input string to convert to Pascal Case |

#### <a id="snakecase"></a>`snakeCase(text)`

Converts the given string to Snake Case.

```javascript
import { snakeCase } from 'stringzy';
snakeCase('hello world'); // 'hello_world'
snakeCase('this is a test'); // 'this_is_a_test'
```

| Parameter | Type   | Default  | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| text      | string | required | The input string to convert to Snake Case |

#### <a id="kebabcase"></a>`kebabCase(text)`

Converts the given string to Kebab Case.

```javascript
import { kebabCase } from 'stringzy';

kebabCase('hello world'); // 'hello-world'
kebabCase('this is a test'); // 'this-is-a-test'
```

| Parameter | Type   | Default  | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| text      | string | required | The input string to convert to Kebab Case |

#### <a id="titlecase"></a>`titleCase(text)`

Converts the given string to Title Case.

```javascript
import { titleCase } from 'stringzy';

titleCase('hello world'); // 'Hello World'
titleCase('this is a test'); // 'This Is A Test'
```

| Parameter | Type   | Default  | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| text      | string | required | The input string to convert to Title Case |

#### <a id="constantcase"></a>`constantCase(text)`

Converts the given string to Constant Case.

```javascript
import { constantCase } from 'stringzy';

constantCase('hello world'); // 'HELLO_WORLD'
constantCase('this is a test'); // 'THIS_IS_A_TEST'
```

| Parameter | Type   | Default  | Description                                  |
| --------- | ------ | -------- | -------------------------------------------- |
| text      | string | required | The input string to convert to Constant Case |

#### <a id="escapehtml"></a>`escapeHTML(text)`

Escapes HTML special characters to prevent XSS attacks by converting them to their HTML entities.

```javascript
import { escapeHTML } from 'stringzy';

escapeHTML('Tom & Jerry');
// Returns: 'Tom &amp; Jerry'

escapeHTML('<script>alert("XSS")</script>');
// Returns: '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'

escapeHTML('<div class="test">content</div>');
// Returns: '&lt;div class=&quot;test&quot;&gt;content&lt;/div&gt;'

escapeHTML('Say "Hello" & it\'s < 5 > 2');
// Returns: 'Say &quot;Hello&quot; &amp; it&#39;s &lt; 5 &gt; 2'
```

| Parameter | Type   | Default  | Description                                     |
| --------- | ------ | -------- | ----------------------------------------------- |
| text      | string | required | The input string to escape HTML characters from |

#### <a id="masksegment"></a>`maskSegment(text, maskStart, maskEnd, maskChar?)`

Masks a segment of a string by replacing characters between two indices with a specified character (default is '\*').

```javascript
import { maskSegment } from 'stringzy';

maskSegment('1234567890', 2, 6);
// Returns: '12****7890'

maskSegment('abcdef', 1, 4, '#');
// Returns: 'a###ef'

maskSegment('token');
// Returns: '*****'
```

| Parameter | Type   | Default       | Description                                              |
| --------- | ------ | ------------- | -------------------------------------------------------- |
| text      | string | required      | The input string to apply the masking to                 |
| maskStart | number | `0`           | The start index (inclusive) of the segment to mask       |
| maskEnd   | number | `text.length` | The end index (exclusive) of the segment to mask         |
| maskChar  | string | `'*'`         | The character to use for masking (must be one character) |

#### <a id="deburr"></a>`deburr(text)`

Removes accents and diacritics from letters in a string (e.g. déjà vu → deja vu).

```javascript
import { deburr } from 'stringzy';

deburr('déjà vu');
// Returns: 'deja vu'

deburr('Élève São Paulo');
// Returns: 'Eleve Sao Paulo'

deburr('über cool');
// Returns: 'uber cool'
```

| Parameter | Type   | Default  | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| text      | string | required | The input string to strip diacritics from |

---

#### <a id="splitchunks"></a>`splitChunks(text, chunkSize)`

Takes a string and chunk size as the argument and splits the string into chunks of given size.

```javascript
import { splitChunks } from 'stringzy';

splitChunks('helloworld', 2);
// Returns: ['he', 'll', 'ow', 'or', 'ld']

splitChunks('helloworld', 3);
// Returns: ['hel', 'low', 'orl', 'd']

splitChunks('helloworld');
// Returns: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
```

| Parameter | Type   | Default  | Description                                               |
| --------- | ------ | -------- | --------------------------------------------------------- |
| text      | string | required | The input string that needs to be chunked                 |
| chunkSize | number | `1`      | The size of each chunk in which the string is to be split |

---

#### <a id="numbertotext"></a>`numberToText(num, lang)`

Converts a number to its text representation in the specified language.

```javascript
import { numberToText } from 'stringzy';
numberToText(12345); // Returns: 'twelve thousand three hundred forty-five'
numberToText(12345, 'en'); // Returns: 'twelve thousand three hundred forty-five'
numberToText(12345, 'pl'); // Returns: 'dwanaście tysięcy trzysta czterdzieści pięć'
```

| Parameter | Type   | Default  | Description                                                                             |
| --------- | ------ | -------- | --------------------------------------------------------------------------------------- |
| num       | number | required | The number to convert to text                                                           |
| lang      | string | 'en'     | The language code for the text representation (e.g., 'en' for English, 'pl' for Polish) |

Available languages: en (English), pl (Polish).

#### <a id="reversewordsinstring"></a>`reverseWordsInString(str)`
Reverses the order of words in a string and reverses the position of surrounding whitespace (leading becomes trailing and vice-versa). 
Reverses the order of words in a string while preserving the exact original spacing between each word.
```javascript
import { reverseWordsInString } from 'stringzy';

reverseWordsInString('Hello   world from stringzy');
// Returns: 'stringzy from world   Hello'

// Note how the double and triple spaces are preserved:
reverseWordsInString('  leading  spaces   and trailing  ');
// Returns: '  trailing  and   spaces leading  '

reverseWordsInString('single-word');
// Returns: 'single-word'
```
| Parameter | Type   | Default  | Description                 |
| --------- | ------ | -------- | --------------------------- |
| str       | string | required | The input string to reverse |

#### <a id="stringpermutations"></a>`stringPermutations(str)`

Generates all unique permutations of a given string.
Repeated characters are handled by ensuring only unique permutations are included in the output array.
The order of permutations is not guaranteed.

```javascript
stringPermutations('ab');
// ['ab', 'ba']

stringPermutations('abc');
// ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

stringPermutations('aab');
// ['aab', 'aba', 'baa']

stringPermutations('');
// ['']

stringPermutations('a');
// ['a']

stringPermutations('a1!');
// ['a1!', 'a!1', '1a!', '1!a', '!a1', '!1a']
```

| Parameter | Type   | Default  | Description                                           |
| --------- | ------ | -------- | ----------------------------------------------------- |
| str       | string | required | The input string to generate all unique permutations. |

#### <a id="stringcombinations"></a>`stringCombinations(str)`

Generates all unique combinations (subsequences) of a given string, including the empty string.  
Duplicate characters are handled by ensuring only unique combinations are returned.  
The order of combinations in the output array is not guaranteed.

```javascript
stringCombinations('ab');
// ["", "a", "b", "ab"]

stringCombinations('abc');
// ["", "a", "b", "c", "ab", "ac", "bc", "abc"]

stringCombinations('aab');
// ["", "a", "b", "aa", "ab", "aab"]

stringCombinations('');
// [""]

stringCombinations('A');
// ["", "A"]

stringCombinations('!@');
// ["", "!", "@", "!@"]
```

| Parameter | Type   | Default  | Description                                            |
| --------- | ------ | -------- | ------------------------------------------------------ |
| str       | string | required | The input string to generate unique combinations from. |


### ✅ Validations

Functions for validating string formats and content.

#### <a id="isurl"></a>`isURL(text)`

Checks if a string is a valid URL.

```javascript
isURL('https://example.com'); // true
isURL('not-a-url'); // false
```

| Parameter | Type   | Default  | Description                         |
| --------- | ------ | -------- | ----------------------------------- |
| text      | string | required | The input string to validate as URL |

#### <a id="isemail"></a>`isEmail(text)`

Checks if a string is a valid email address.

```javascript
isEmail('user@example.com'); // true
isEmail('invalid-email'); // false
```

| Parameter | Type   | Default  | Description                           |
| --------- | ------ | -------- | ------------------------------------- |
| text      | string | required | The input string to validate as email |

#### <a id="isdate"></a>`isDate(text)`

Checks if a string is a valid date.

```javascript
import { isDate } from 'stringzy';

isDate('2023-12-25', DateFormat.YYYMMDD); // true
isDate('12/25/2023', DateFormat.MMDDYYY, '/'); // true
isDate('20-12-25', DateFormat.YYYMMDD); // false
isDate('2023-12-1', DateFormat.YYYMMDD); // false
isDate('invalid-date', DateFormat.YYYMMDD); // false
isDate('2023-13-45', DateFormat.YYYMMDD); // false
```

| Parameter | Type        | Default  | Description                               |
| --------- | ----------- | -------- | ----------------------------------------- |
| input     | string      | required | The input string to validate as date      |
| format    | DateFormats | required | The date format to validate against       |
| separator | string      | optional | The separator to be used if it is not "-" |

#### <a id="isempty"></a>`isEmpty(text)`

Checks if a string is empty or contains only whitespace.

```javascript
isEmpty('   '); // true
isEmpty('hello'); // false
```

| Parameter | Type   | Default  | Description                             |
| --------- | ------ | -------- | --------------------------------------- |
| text      | string | required | The input string to check for emptiness |

#### <a id="isslug"></a>`isSlug(text)`

Checks if a string is a valid slug.

```javascript
isSlug('hello-world'); // true
isSlug('test-product-123'); // true
isSlug('Hello-World'); // false (uppercase letters)
isSlug('hello--world'); // false (consecutive hyphens)
isSlug('-hello-world'); // false (starts with hyphen)
isSlug('hello_world'); // false (underscore not allowed)
```

| Parameter | Type   | Default  | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| text      | string | required | The input string to validate as slug |

#### <a id="istypeof"></a>`isTypeOf(input, type)`

Checks if a file or URL has a valid extension for a given type

```javascript
isType('photo.PNG', 'image'); // true
isType('https://example.com/logo.svg', 'image'); // true
isType({ name: 'track.mp3' }, 'audio'); // true
isType('filewithoutextension', 'image'); // false
isType('document.zip', 'document'); // false
isType('video.mp4', 'document'); // false
```

| Parameter | Type   | Default  | Description                                                                 |
| --------- | ------ | -------- | --------------------------------------------------------------------------- |
| input     | string | required | The file name, URL string, or object with .name                             |
| input     | string | required | The file type category to validate (image, video, audio, document, archive) |

#### <a id="isipv4"></a>`isIPv4(text)`

Checks if a string is a valid IPv4 address.

```javascript
import { isIPv4 } from 'stringzy';

isIPv4('192.168.1.1'); // true
isIPv4('0.0.0.0'); // true
isIPv4('256.1.1.1'); // false (out of range)
isIPv4('192.168.1'); // false (incomplete)
isIPv4('192.168.01.1'); // false (leading zeros)
isIPv4('192.168.1.a'); // false (non-numeric)
```

| Parameter | Type   | Default  | Description                                  |
| --------- | ------ | -------- | -------------------------------------------- |
| text      | string | required | The input string to validate as IPv4 address |

#### <a id="ishexcolor"></a>`isHexColor(text)`

Checks if a string is a valid Hex color.

```javascript
import { isHexColor } from 'stringzy';

isHexColor('#fff'); // true
isHexColor('fff'); // true
isHexColor('#a1b2c3'); // true
isHexColor('123abc'); // true
isHexColor('#1234'); // false
isHexColor('blue'); // false
```

| Parameter | Type   | Default  | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| text      | string | required | The input string to validate as Hex color |

#### <a id="ispalindrome"></a>`isPalindrome(text)`

Checks if a string is a palindrome.
The check is case-insensitive and ignores spaces and punctuation.

```javascript
import { isPalindrome } from 'stringzy';

isPalindrome('racecar'); // true
isPalindrome('A man, a plan, a canal: Panama'); // true
isPalindrome('No lemon, no melon'); // true
isPalindrome('hello'); // false
isPalindrome('Was it a car or a cat I saw?'); // true
```

| Parameter | Type   | Default  | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| text      | string | required | The input string to check for palindrome |

#### <a id="iscoordinates"></a>`isCoordinates(latitude, longitude)`

Checks if given latitude and longitude are valid coordinates.

```javascript
import { isCoordinates } from 'stringzy';

isCoordinates(48.8582, 2.2945); // true
isCoordinates(40.748817, -73.985428); // true
isCoordinates(9999, -9999); // false
```

| Parameter | Type   | Default  | Description           |
| --------- | ------ | -------- | --------------------- |
| latitude  | number | required | Latitude to validate  |
| longitude | number | required | Longitude to validate |

#### <a id="islowercase"></a>`isLowerCase(str)`

Checks whether the given string contains only lowercase alphabetic characters.
Ignores digits, special characters, white spaces.

```javascript
import { isLowerCase } from 'stringzy';

isLowerCase('hello');      // true
isLowerCase('hello123!');  // true
isLowerCase('Hello');      // false
isLowerCase('12345');      // false
```

| Parameter | Type   | Default  | Description                                                                  |
| --------- | ------ | -------- | ---------------------------------------------------------------------------- |
| str       | string | required | The input string to validate as containing lowercase alphabetic letters |

#### <a id="isuppercase"></a>`isUpperCase(str)`

Checks whether the given string contains only uppercase alphabetic characters.
Ignores digits, special characters, white spaces.

```javascript
import { isUpperCase } from 'stringzy';

isUpperCase('HELLO');      // true
isUpperCase('HELLO123!');  // true
isUpperCase('Hello');      // false
isUpperCase('12345');      // false
```

| Parameter | Type   | Default  | Description                                                                  |
| --------- | ------ | -------- | ---------------------------------------------------------------------------- |
| str       | string | required | The input string to validate as containing uppercase alphabetic letters |

#### <a id="isalphabetic"></a>`isAlphabetic(text)`

Checks if a string contains only alphabetic characters (a-z, A-Z).
Throws an error if the input is not a string.

```javascript
import { isAlphabetic } from 'stringzy';

isAlphabetic('hello'); // true
isAlphabetic('World'); // true
isAlphabetic('helloWORLD'); // true
isAlphabetic('abc123'); // false
isAlphabetic('hello!'); // false
isAlphabetic(''); // false
```

| Parameter | Type   | Default  | Description                                   |
| --------- | ------ | -------- | --------------------------------------------- |
| text      | string | required | The input string to check for alphabetic only |

#### <a id="isalphanumeric"></a>`isAlphaNumeric(text)`

Checks if a string contains only alphanumeric characters (letters and digits).
Throws an error if the input is not a string.

```javascript
import { isAlphaNumeric } from 'stringzy';

isAlphaNumeric('abc123'); // true
isAlphaNumeric('A1B2C3'); // true
isAlphaNumeric('123'); // true
isAlphaNumeric('hello'); // true
isAlphaNumeric('hello!'); // false
isAlphaNumeric('123 456'); // false
isAlphaNumeric(''); // false
```

| Parameter | Type   | Default  | Description                                     |
| --------- | ------ | -------- | ----------------------------------------------- |
| text      | string | required | The input string to check for alphanumeric only |

#### <a id="isanagram"></a>`isAnagram(str1, str2)`

Checks whether two strings are anagrams of each other (contain the same characters in the same frequency, regardless of order).  
- Comparison is case-insensitive.  
- Spaces and punctuation are ignored.  
- Throws an error if either input is not a string.  

```javascript
import { isAnagram } from 'stringzy';

isAnagram('listen', 'silent');       // true
isAnagram('Debit Card', 'Bad Credit'); // true
isAnagram('Astronomer', 'Moon starer'); // true
isAnagram('hello', 'world');         // false
isAnagram('a', 'b');                 // false
isAnagram('', '');                   // true
```

| Parameter | Type   | Default  | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| str1      | string | required | The first string to check as an anagram  |
| str2      | string | required | The second string to check as an anagram |

#### <a id="ismacaddress"></a>`isMacAddress(str)`

Checks whether a given string is a valid **MAC address**.
- A valid MAC address consists of six pairs of hexadecimal digits (`0–9`, `A–F`, case-insensitive).
- Returns `true` if the string is a valid MAC address, otherwise `false`.
- Throws an error if input is not a string.

```javascript
import { isMacAddress } from 'stringzy';

isMacAddress("00:1A:2B:3C:4D:5E");   // true
isMacAddress("00-1A-2B-3C-4D-5E");   // true
isMacAddress("aa:bb:cc:dd:ee:ff");   // true
isMacAddress("FF-FF-FF-FF-FF-FF");   // true

isMacAddress("00:1G:2B:3C:4D:5E");   // false (invalid hex digit)
isMacAddress("00:1A-2B:3C-4D:5E");   // false (mixed separators)
isMacAddress("001A:2B:3C:4D:5E");    // false (wrong group length)
isMacAddress("hello-world-mac");     // false (invalid format)
isMacAddress("");                    // false (empty string)
```

| Parameter | Type   | Default  | Description                             |
| --------- | ------ | -------- | --------------------------------------- |
| str       | string | required | The string to validate as a MAC address |

#### <a id="ispanagram"></a>`isPangram(str)`

- Checks if a given string is a **pangram** (i.e., contains every letter of the English alphabet at least once).
- The check is **case-insensitive**, and non-alphabetic characters (numbers, punctuation, spaces) are ignored. An empty string is not considered a pangram.
- Throws an error if the input is not a string.

```javascript
import { isPangram } from 'stringzy';

isPangram("The quick brown fox jumps over the lazy dog."); // true
isPangram("This is not a pangram."); // false
isPangram("Abcdefghijklmnopqrstuvwxyz"); // true
isPangram("AbCdEfGhIjKlMnOpQrStUvWxYz"); // true
isPangram("A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z"); // true
isPangram(""); // false
isPangram("Hello world"); // false
```

| Parameter | Type   | Default  | Description                                           |
| --------- | ------ | -------- | ----------------------------------------------------- |
| str       | string | required | The input string to check for pangram characteristics |
---

### 📊 Analysis

Functions for analyzing string content and structure.

#### <a id="readingduration"></a>`readingDuration(text, readingSpeed = 230)`

Calculates the estimated reading duration for a given text based on an average reading speed.

```javascript
import { readingDuration } from 'stringzy';

readingDuration(
  'This is a sample text with twenty-three words to test the reading duration function.'
);
// Returns: 0 (23 words / 230 words per minute ≈ 0 minutes)

readingDuration(
  'This text contains fifty words. It is designed to test the reading duration function with a larger input.',
  200
);
// Returns: 1 (50 words / 200 words per minute ≈ 1 minute)

readingDuration(Array(9999).fill('Word').join(' '));
// Returns: 43 (9999 words / 230 words per minute ≈ 43 minutes)
```

| Parameter    | Type   | Default  | Description                                                                    |
| ------------ | ------ | -------- | ------------------------------------------------------------------------------ |
| text         | string | required | The input text for which the reading duration is to be calculated              |
| readingSpeed | number | 230      | The reading speed in words per minute. Defaults to 230 (average reading speed) |

#### <a id="wordcount"></a>`wordCount(text)`

Counts the number of words in a string.

```javascript
wordCount('Hello world'); // 2
wordCount(''); // 0
```

| Parameter | Type   | Default  | Description                        |
| --------- | ------ | -------- | ---------------------------------- |
| text      | string | required | The input string to count words in |

#### <a id="charactercount"></a>`characterCount(text)`

Counts the number of characters in a string.

```javascript
characterCount('Hello'); // 5
```

| Parameter | Type   | Default  | Description                             |
| --------- | ------ | -------- | --------------------------------------- |
| text      | string | required | The input string to count characters in |

#### <a id="characterfrequency"></a>`characterFrequency(text)`

Analyzes character frequency in a string (excluding spaces).

```javascript
characterFrequency('hello'); // { h: 1, e: 1, l: 2, o: 1 }
```

| Parameter | Type   | Default  | Description                                     |
| --------- | ------ | -------- | ----------------------------------------------- |
| text      | string | required | The input string to analyze character frequency |

#### <a id="stringsimilarity"></a>`stringSimilarity(textA, textB, algorithm = 'Levenshtein')`

Calculates the percentage similarity between two texts using the selected algorithm.
Method returns a percentage (0–100) value indicating how similar the two strings are.

```javascript
stringSimilarity('kitten', 'sitting'); // Returns: 57.14

stringSimilarity('hello', 'hello'); // Returns: 100

stringSimilarity('flaw', 'lawn', 'Damerau-Levenshtein'); // Returns: 50
```

| Parameter | Type   | Default       | Description                                                   |
| --------- | ------ | ------------- | ------------------------------------------------------------- |
| textA     | string | required      | The first text to compare.                                    |
| textB     | string | required      | The second text to compare.                                   |
| algorithm | string | 'Levenshtein' | The algorithm to use: 'Levenshtein' or 'Damerau-Levenshtein'. |

#### <a id="complexity"></a>`complexity(text)`

Analyzes the complexity of a string, returning an object with detailed metrics.

```javascript
import { complexity } from 'stringzy';

complexity('abc');
// Returns: { score: [number], uniqueness: [number], length: 3 }

complexity('aA1!aA1!');
// Returns: { score: [number], uniqueness: [number], length: 8 }

complexity('');
// Returns: { score: 0, uniqueness: 0, length: 0 }
```

| Parameter | Type   | Default  | Description                            |
| --------- | ------ | -------- | -------------------------------------- |
| text      | string | required | The input string to analyze complexity |

**Returns:** An object containing:

- `score` (number): Overall complexity score
- `uniqueness` (number): Measure of character uniqueness
- `length` (number): Length of the input string

feature/content-words

#### <a id="contentwordcount"></a>`contentWordCount(text)`

Counts the number of content words (nouns, verbs, adjectives, adverbs, etc.) in a string.

```javascript

import { contentWordCount } from 'stringzy';

contentWordCount("Learning JavaScript improves coding skills!");
// Returns: { count: 5 }

contentWordCount("The cat sleeps on the warm windowsill.");
// Returns: { count: 5 }

contentWordCount("Wow! Such a beautiful day.");
// Returns: { count: 4 }
```

| Parameter | Type   | Default  | Description                            |
| --------- | ------ | -------- | -------------------------------------- |
| text      | string | required | The input string to analyze content words |

**Returns:** An object containing:

- `count` (number): Total number of content words in the string


#### <a id="functionwordcount"></a>`functionWordCount(text)`

Counts the number of function words (prepositions, pronouns, conjunctions, articles, etc.) in a string.

```javascript

import { functionWordCount } from 'stringzy';

functionWordCount("She and I are going to the park.");
// Returns: { count: 7 }

functionWordCount("It is an example of proper grammar usage.");
// Returns: { count: 8 }

functionWordCount("Can you see the stars tonight?");
// Returns: { count: 5 }
```

| Parameter | Type   | Default  | Description                            |
| --------- | ------ | -------- | -------------------------------------- |
| text      | string | required | The input string to analyze function words |

**Returns:** An object containing:

- `count` (number): Total number of function words in the string

#### <a id="patterncount"></a>`patternCount(text, pattern)`

Counts the number of times a substring (pattern) occurs in a string, including overlapping occurrences.  
This function uses the **Knuth–Morris–Pratt (KMP)** algorithm for efficient matching.

```javascript
patternCount('aaaa', 'aa'); // 3
patternCount('abababa', 'aba'); // 3
patternCount('hello world', 'o'); // 2
patternCount('hello world', 'x'); // 0
```

| Parameter | Type   | Default  | Description                                    |
| --------- | ------ | -------- | ---------------------------------------------- |
| text      | string | required | The input string to search in                  |
| pattern   | string | required | The substring (pattern) to count (overlapping) |

#### <a id="vowelconsonantcount"></a>`vowelConsonantCount(str)`

Counts the number of vowels and consonants in a given string.  
This function is case-insensitive and ignores non-alphabetic characters.

```javascript
vowelConsonantCount('hello');
// { vowels: 2, consonants: 3 }

vowelConsonantCount('stringzy');
// { vowels: 1, consonants: 7 }

vowelConsonantCount('');
// { vowels: 0, consonants: 0 }
```

| Parameter | Type   | Default  | Description                                        |
| --------- | ------ | -------- | -------------------------------------------------- |
| str       | string | required | The input string to count vowels and consonants in |

feature/content-words

#### <a id="checkmultiplepatterns"></a>`checkMultiplePatterns(text, patterns)`

Finds occurrences of multiple patterns within a given text using the Rabin–Karp algorithm. <br>
Accepts an array of patterns.<br>
Returns all matches of each pattern along with starting indices.<br>
Handles hash collisions by verifying actual substrings.<br>
Pattern matching is case sensitive.

```javascript
checkMultiplePatterns('abracadabra', ['abra', 'cad']);
// { abra: [0, 7], cad: [4] }

checkMultiplePatterns('aaaa', ['aa', 'aaa']);
// { aa: [0, 1, 2], aaa: [0, 1] }

checkMultiplePatterns('hello world', ['xyz', '123']);
// { xyz: [], 123: [] }
```
| Parameter | Type      | Default  | Description                                                 |
| --------- | --------- | -------- | ----------------------------------------------------------- |
| text      | string    | required | The text to search within.                                  |
| patterns  | string\[ ] | required | An array of patterns to search for (each must be a string). |

#### <a id="checksubsequence"></a>`checkSubsequence(str, sub)`

Checks whether a given string sub is a subsequence of another string str.
A subsequence maintains the relative order of characters, but they do not need to be consecutive.
Case-sensitive comparison is performed.
Spaces and all characters are treated literally.

```javascript
isSubsequence('abcde', 'ace');
// true  → 'a', 'c', 'e' appear in order

isSubsequence('abracadabra', 'aaa');
// true  → multiple 'a's in correct order

isSubsequence('abcde', 'aec');
// false → order is broken (e comes before c)

isSubsequence('anything', '');
// true  → empty subsequence is always valid

isSubsequence('AbC', 'AC');
// true  → exact case matches

isSubsequence('a b c', 'abc');
// false → spaces count as characters
```
| Parameter | Type   | Default  | Description                                     |
| --------- | ------ | -------- | ----------------------------------------------- |
| str       | string | required | The main string to check within.                |
| sub       | string | required | The subsequence string to verify against `str`. |

#### <a id="stringrotation"></a>`checkStringRotations(str1, str2)`
Checks whether a given string `str2` is a rotation of another string `str1`.
Case-sensitive comparison is performed. Both strings must be of equal length to be considered rotations.
Spaces and all characters are treated literally.

```javascript
isRotation('waterbottle', 'erbottlewat');
// true  → rotation at position 3

isRotation('abcde', 'cdeab');
// true  → rotation at position 2

isRotation('abc', 'abc');
// true  → no rotation, identical strings

isRotation('abc', 'cab');
// true  → rotation at position 2

isRotation('abc', 'bac');
// false → not a valid rotation

isRotation('ArB', 'Bar');
// false → case-sensitive mismatch

isRotation('abcd', 'abc');
// false → lengths differ
```

| Parameter | Type   | Default  | Description                                         |
| --------- | ------ | -------- | --------------------------------------------------- |
| str1      | string | required | The original string.                                |
| str2      | string | required | The string to verify if it is a rotation of `str1`. |

#### <a id="lexicographicalrank"></a>`lexicographicalRank(str)`

Calculates the lexicographic rank of a string among all its unique permutations sorted alphabetically.  
The rank is **1-based** (first permutation has rank 1).  
Handles duplicate characters by correctly adjusting ranks.

```javascript
lexicographicRank("acb");
// 2 → permutations: ["abc", "acb", "bac", "bca", "cab", "cba"]

lexicographicRank("string");
// 598

lexicographicRank("cba");
// 6 → permutations: ["abc", "acb", "bac", "bca", "cab", "cba"]

lexicographicRank("aba");
// 2 → permutations: ["aab", "aba", "baa"]

lexicographicRank("a");
// 1

lexicographicRank("");
// 1 → edge case, empty string considered rank 1
```

| Parameter | Type   | Default  | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| str       | string | required | The input string to calculate the rank of |

---

### 🎨 Formatting

Functions for formatting strings into specific patterns.

#### <a id="capitalize"></a>`capitalize(text)`

Capitalizes the first letter of each word.

```javascript
capitalize('hello world'); // 'Hello World'
capitalize('javaScript programming'); // 'Javascript Programming'
```

| Parameter | Type   | Default  | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| text      | string | required | The input string to capitalize |

#### <a id="formatnumber"></a>`formatNumber(number, separator = ',')`

Formats a number string with thousand separators.

```javascript
formatNumber('1234567'); // '1,234,567'
formatNumber('1234567', '.'); // '1.234.567'
```

| Parameter | Type           | Default  | Description                        |
| --------- | -------------- | -------- | ---------------------------------- |
| number    | string\|number | required | The number to format               |
| separator | string         | ','      | The separator to use for thousands |

#### <a id="formatphone"></a>`formatPhone(phone, format = 'us')`

Formats a phone number string to standard format.

```javascript
formatPhone('1234567890'); // '(123) 456-7890'
formatPhone('11234567890', 'international'); // '+1 (123) 456-7890'
```

| Parameter | Type   | Default  | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| phone     | string | required | The phone number string to format    |
| format    | string | 'us'     | Format type: 'us' or 'international' |

#### <a id="formatduration"></a>`formatDuration(input, options)`

Converts a duration in seconds or milliseconds into a human-readable string.

```javascript
formatDuration(60);        // "1m"
formatDuration(61);        // "1m 1s"
formatDuration(3661);      // "1h 1m 1s"
formatDuration(7325);      // "2h 2m 5s"
formatDuration(1234567, { unit: 'milliseconds', includeMs: true }); // "20m 34s 567ms"
```

| Parameter | Type   | Default     | Description                                           |
| --------- | ------ | ----------- | ----------------------------------------------------- |
| input     | number | required    | The duration in seconds or milliseconds               |
| options   | object | `{}`        | Optional configuration object                         |
| - unit    | string | 'seconds'   | Input unit: 'seconds' or 'milliseconds'              |
| - format  | string | 'short'     | Output format: 'short', 'medium', or 'long'          |
| - includeMs | boolean | false    | Whether to include milliseconds in output             |
| - delimiter | string | ' '       | The delimiter between time units                      |

#### <a id="trim"></a>`trim(str)`

Removes unnecessary whitespace from a string, including leading/trailing spaces, multiple spaces between words, tabs, and line breaks.

```javascript
trim('  hello   world  '); // 'hello world'
trim('line \n breaks\tand tabs'); // 'line breaks and tabs'
```
| Parameter | Type   | Default  | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| str       | string | required | The input string to trim and normalize.|

#### <a id="formatromannumeral"></a>formatRomanNumeral(num)
Converts a positive integer into its Roman numeral representation (supports values from 1 to 3999).
Throws an error for invalid, non-numeric, zero, or negative inputs.

```javascript
import { formatRomanNumeral } from 'stringzy';

formatRomanNumeral(1);     // "I"
formatRomanNumeral(4);     // "IV"
formatRomanNumeral(9);     // "IX"
formatRomanNumeral(58);    // "LVIII"
formatRomanNumeral(1994);  // "MCMXCIV"

// Invalid cases
formatRomanNumeral(0);     // RangeError
formatRomanNumeral(-5);    // RangeError
formatRomanNumeral('123'); // TypeError
```
| Parameter | Type   | Default  | Description                                          |
| --------- | ------ | -------- | ---------------------------------------------------- |
| num       | number | required | The integer (1–3999) to convert into Roman numerals. |

## 🔧 Usage Patterns

### Individual Function Imports

```javascript
import { isEmail, wordCount, capitalize } from 'stringzy';

const email = 'user@example.com';
if (isEmail(email)) {
  console.log('Valid email!');
}
```

### Namespace Imports

```javascript
import { validate, analyze, format } from 'stringzy';

// Organized by functionality
const emailValid = validate.isEmail('test@example.com');
const words = analyze.wordCount('Hello world');
const formatted = format.capitalize('hello world');
```

### Default Import (All Functions)

```javascript
import stringzy from 'stringzy';

// Access any function
stringzy.toUpperCase('hello');
stringzy.validate.isEmail('test@example.com');
stringzy.analyze.wordCount('Hello world');
stringzy.format.capitalize('hello world');
```

## 🛠️ Usage Examples

### In a React component

```jsx
import React from 'react';
import { truncateText, capitalize, wordCount, isEmpty } from 'stringzy';

function ArticlePreview({ title, content }) {
  const displayTitle = isEmpty(title) ? 'Untitled' : capitalize(title);
  const previewText = truncateText(content, 150);
  const readingTime = Math.ceil(wordCount(content) / 200);

  return (
    <div className="article-preview">
      <h2>{displayTitle}</h2>
      <p>{previewText}</p>
      <small>{readingTime} min read</small>
    </div>
  );
}
```

### Form Validation

```javascript
import { validate } from 'stringzy';

function validateForm(formData) {
  const errors = {};

  if (!validate.isEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validate.isURL(formData.website)) {
    errors.website = 'Please enter a valid URL';
  }

  if (validate.isEmpty(formData.name)) {
    errors.name = 'Name is required';
  }

  return errors;
}
```

### Content Analysis Dashboard

```javascript
import { analyze } from 'stringzy';

function getContentStats(text) {
  return {
    words: analyze.wordCount(text),
    characters: analyze.characterCount(text),
    frequency: analyze.characterFrequency(text),
    readingTime: Math.ceil(analyze.wordCount(text) / 200),
  };
}
```

### Data Formatting

```javascript
import { format } from 'stringzy';

function formatUserData(userData) {
  return {
    name: format.capitalize(userData.name),
    phone: format.formatPhone(userData.phone),
    revenue: format.formatNumber(userData.revenue),
  };
}
```

## 🔄 TypeScript Support

The package includes TypeScript type definitions for all functions.

```typescript
import { validate, analyze, format } from 'stringzy';

// TypeScript will provide proper type checking
const isValid: boolean = validate.isEmail('test@example.com');
const count: number = analyze.wordCount('Hello world');
const formatted: string = format.capitalize('hello world');
```

## 🏗️ Architecture

stringzy is organized into four specialized modules:

- **`transformations.js`** - Core string transformations
- **`validations.js`** - String validation utilities
- **`analysis.js`** - String analysis and metrics
- **`formatting.js`** - String formatting functions

Each module can be imported individually or accessed through the main entry point.

## 🤝 Contributing

Contributions are welcome! Please read our [contribution guidelines](CONTRIBUTING.md) before submitting a pull request.

## <a id="contri"></a>`Contributors`

<table>
    <tbody>
        <tr>
        <td align="center">
                <a href="https://github.com/Samarth2190">
                    <img src="https://avatars.githubusercontent.com/Samarth2190" width="100px;"
                        alt="Samarth Ruia" />
                    <br />
                    <sub>
                        <b>Samarth Ruia</b>
                    </sub>
                </a>
            </td>
        <td align="center">
                <a href="https://github.com/JohnCervantes">
                    <img src="https://avatars.githubusercontent.com/JohnCervantes" width="100px;"
                        alt="John Cervantes" />
                    <br />
                    <sub>
                        <b>John Cervantes</b>
                    </sub>
                </a>
            </td>
          <td align="center">
                <a href="https://github.com/thehardiik">
                    <img src="https://avatars.githubusercontent.com/thehardiik" width="100px;"
                        alt="Hardik Srivastav" />
                    <br />
                    <sub>
                        <b>Hardik Srivastav</b>
                    </sub>
                </a>
            </td>
          <td align="center">
                <a href="https://github.com/ahmedsemih">
                    <img src="https://avatars.githubusercontent.com/ahmedsemih" width="100px;"
                        alt="Ahmed Semih Erkan" />
                    <br />
                    <sub>
                        <b>Ahmed Semih Erkan</b>
                    </sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/michaelvbend">
                    <img src="https://avatars.githubusercontent.com/michaelvbend" width="100px;"
                        alt="Michael van der Bend" />
                    <br />
                    <sub>
                        <b>Michael van der Bend</b>
                    </sub>
                </a>
            </td>
           <td align="center">
                <a href="https://github.com/mamphis">
                    <img src="https://avatars.githubusercontent.com/mamphis" width="100px;"
                        alt="mamphis" />
                    <br />
                    <sub>
                        <b>mamphis</b>
                    </sub>
                </a>
            </td>
        </tr>
      <tr>
       <td align="center">
                <a href="https://github.com/cokolwiekpl">
                    <img src="https://avatars.githubusercontent.com/cokolwiekpl" width="100px;"
                        alt="Stanisław Kumor" />
                    <br />
                    <sub>
                        <b>Stanisław Kumor</b>
                    </sub>
                </a>
            </td>
         <td align="center">
                <a href="https://github.com/Alimedhat000">
                    <img src="https://avatars.githubusercontent.com/Alimedhat000" width="100px;"
                        alt="Ali Medhat" />
                    <br />
                    <sub>
                        <b>Ali Medhat</b>
                    </sub>
                </a>
            </td>
        <td align="center">
                <a href="https://github.com/Soham-Powar">
                    <img src="https://avatars.githubusercontent.com/Soham-Powar" width="100px;"
                        alt="Soham Powar" />
                    <br />
                    <sub>
                        <b>Soham Powar</b>
                    </sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/a-arham-x">
                    <img src="https://avatars.githubusercontent.com/a-arham-x" width="100px;"
                        alt="Soham Powar" />
                    <br />
                    <sub>
                        <b>Abdul Arham</b>
                    </sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Thenlie">
                    <img src="https://avatars.githubusercontent.com/Thenlie" width="100px;"
                        alt="Thenlie" />
                    <br />
                    <sub>
                        <b>Leithen</b>
                    </sub>
                </a>
            </td>
        <td align="center">
                <a href="https://github.com/rickyryden">
                    <img src="https://avatars.githubusercontent.com/rickyryden" width="100px;"
                        alt="Ricky Ryden" />
                    <br />
                    <sub>
                        <b>Ricky Ryden</b>
                    </sub>
                </a>
            </td>
      </tr>
      <tr>
        <td align="center">
                <a href="https://github.com/adityaatre26">
                    <img src="https://avatars.githubusercontent.com/adityaatre26" width="100px;"
                        alt="Aditya Atre" />
                    <br />
                    <sub>
                        <b>Aditya Atre</b>
                    </sub>
                </a>
            </td>
         <td align="center">
                <a href="https://github.com/kittenwarrior-qb">
                    <img src="https://avatars.githubusercontent.com/kittenwarrior-qb" width="100px;"
                        alt="quocbui05" />
                    <br />
                    <sub>
                        <b>quocbui05</b>
                    </sub>
                </a>
            </td>
        <td align="center">
                <a href="https://github.com/MariamEwas">
                    <img src="https://avatars.githubusercontent.com/MariamEwas" width="100px;"
                        alt="Mariam Hasan" />
                    <br />
                    <sub>
                        <b>Mariam Hasan</b>
                    </sub>
                </a>
            </td>
        <td align="center">
                <a href="https://github.com/milendrakumarbaghel">
                    <img src="https://avatars.githubusercontent.com/milendrakumarbaghel" width="100px;"
                        alt="Milendra Kumar Baghel" />
                    <br />
                    <sub>
                        <b>Milendra Kumar Baghel</b>
                    </sub>
                </a>
            </td>
        <td align="center">
                <a href="https://github.com/Farkhanda-Dalal">
                    <img src="https://avatars.githubusercontent.com/Farkhanda-Dalal" width="100px;"
                        alt="Farkhanda Dalal" />
                    <br />
                    <sub>
                        <b>Farkhanda Dalal</b>
                    </sub>
                </a>
            </td>
        <td align="center">
                <a href="https://github.com/S">
                    <img src="https://avatars.githubusercontent.com/satyasrisundarapalli" width="100px;"
                        alt="Sundarapalli Lakshmi Satya Sri" />
                    <br />
                    <sub>
                        <b>Sundarapalli Lakshmi Satya Sri</b>
                    </sub>
                </a>
            </td>
      </tr>
      <tr>
         <td align="center">
                <a href="https://github.com/S">
                    <img src="https://avatars.githubusercontent.com/itspavant" width="100px;"
                        alt="T Pavan Teja" />
                    <br />
                    <sub>
                        <b>T Pavan Teja</b>
                    </sub>
                </a>
            </td>
      </tr>
    </tbody>
</table>

## <a id="community"></a>💬 Join the Community

Have questions, ideas, or want to contribute? Join our [Discord server](https://discord.gg/DmvY7XJMdk) to chat with the community, discuss features, and help shape the future of the project.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Thank you to all contributors and users of this package!
- Inspired by the need for comprehensive yet simple string manipulation utilities.

If you have contributed to this project and your image is not here, please let us know, and we'll be happy to add it!

---

Made with ❤️ by Samarth Ruia
