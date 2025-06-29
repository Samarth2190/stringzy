# Contributing to Stringzy

Thanks for your interest in contributing to Stringzy! This document provides guidelines and instructions for contributing to the project.

## What We're Looking For

- **Bug fixes** - Help us solve issues
- **New string functions** - Add useful string manipulation methods
- **Documentation** - Improve examples and guides
- **Tests** - Add test coverage for existing or new features

## Development Guide

### Setup

1. Fork the repository
2. Clone your fork:
   _Remember to replace `YOUR-USERNAME` with your actual GitHub username._

   ```bash
   git clone https://github.com/YOUR-USERNAME/stringzy.git
   ```

3. Navigate to the project directory:

   ```bash
   cd stringzy
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

### Making Changes

- Create a new branch:
  ```bash
  git checkout -b feature/amazing-feature
  ```
- Make your changes
- Write tests for new functions
- Keep functions simple and focused
- Follow existing code style
- Update README if adding new functions

### Code Style

- Use 2 spaces for indentation
- Add JSDoc comments for new functions
- Handle edge cases (null, undefined, empty strings)
- Use descriptive function names

Example:

```ts
/**
 * Converts string to kebab-case
 * @param str Input string
 * @returns Kebab-case string
 */
function toKebabCase(str: string): string {
  if (!str) return '';
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
```

## Submitting Changes

1. Make sure tests pass:

   ```bash
   npm test
   ```

2. Commit your changes:

   ```bash
   git commit -m "feat: add some amazing feature"
   ```

3. Push to the branch

   ```bash
   git push origin feature/amazing-feature
   ```

4. Create a pull request with:
   - Clear description of changes
   - Why the change is needed
   - Any breaking changes

## Questions?

If you have any questions or need help, feel free to open an issue. We're happy to help!

---

By contributing, you agree to license your work under the same license as this project.
