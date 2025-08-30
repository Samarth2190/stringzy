export { camelCase } from './camelCase';
export { capitalizeWords } from './capitalizeWords';
export { constantCase } from './constantCase';
export { initials } from './initials';
export { kebabCase } from './kebabCase';
export { pascalCase } from './pascalCase';
export { removeDuplicates } from './removeDuplicates';
export { removeSpecialChars } from './removeSpecialChars';
export { removeWords } from './removeWords';
export { snakeCase } from './snakeCase';
export { titleCase } from './titleCase';
export { toSlug } from './toSlug';
export { truncateText } from './truncateText';
export { escapeHtml } from './escapeHTML';
export { maskSegment } from './maskSegment';
export { numberToText } from './numberToText/main';
import { pipe, pipeLine } from './pipe';

export const transformations = {
    camelCase,
    capitalizeWords,
    constantCase,
    initials,
    kebabCase,
    pascalCase,
    removeDuplicates,
    removeSpecialChars,
    removeWords,
    snakeCase,
    titleCase,
    toSlug,
    truncateText,
    escapeHtml,
    maskSegment,
    deburr,
    numberToText,
    pipeLine,
    pipe
};