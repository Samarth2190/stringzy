/**
 * Calculates the percentage similarity between two texts using the selected algorithm.
 * @param textA The first text to compare.
 * @param textB The second text to compare.
 * @param algorithm The algorithm to use: 'Levenshtein' or 'Damerau-Levenshtein'. Default is 'Levenshtein'.
 * @returns Similarity percentage (0-100).
 */
export function stringSimilarity(
  textA: string,
  textB: string,
  algorithm: 'Levenshtein' | 'Damerau-Levenshtein' = 'Levenshtein'
): number {
  validateParams(textA, textB, algorithm);

  if (textA === textB) {
    return 100.0;
  }

  if (textA.length === 0 && textB.length != 0) {
    return 0.0;
  }

  let distance: number;
  if (algorithm === 'Levenshtein') {
    distance = calculateLevenshteinDistance(textA, textB);
  } else {
    distance = calculateDamerauLevenshteinDistance(textA, textB);
  }

  return calculateSimilarityScore(distance, textA, textB);
}

/**
 * Converts the edit distance to a percentage similarity score.
 * @param distance The edit distance between the texts.
 * @param textA The first text.
 * @param textB The second text.
 * @returns Similarity percentage (0-100).
 */
function calculateSimilarityScore(distance: number, textA: string, textB: string): number {
  const similarityScore: number = 1 - distance / Math.max(textA.length, textB.length);
  return parseFloat((similarityScore * 100).toFixed(2));
}

/**
 * Calculates the Levenshtein distance between two texts.
 * @param textA The first text.
 * @param textB The second text.
 * @returns The Levenshtein distance.
 */
function calculateLevenshteinDistance(textA: string, textB: string): number {
  const lenA: number = textA.length;
  const lenB: number = textB.length;

  if (lenA === 0) {
    return lenB;
  }

  if (lenB === 0) {
    return lenA;
  }

  const distancesMatrix: number[][] = prepareDistanceMatrix(lenA, lenB);

  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      distancesMatrix[i][j] = applyBasicEditOperations(i, j, textA, textB, distancesMatrix);
    }
  }

  return distancesMatrix[lenA][lenB];
}

/**
 * Calculates the Damerau-Levenshtein distance between two texts.
 * @param textA The first text.
 * @param textB The second text.
 * @returns The Damerau-Levenshtein distance.
 */
function calculateDamerauLevenshteinDistance(textA: string, textB: string) {
  const lenA: number = textA.length;
  const lenB: number = textB.length;

  if (lenA === 0) {
    return lenB;
  }

  if (lenB === 0) {
    return lenA;
  }

  const distancesMatrix: number[][] = prepareDistanceMatrix(lenA, lenB);

  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      distancesMatrix[i][j] = applyBasicEditOperations(i, j, textA, textB, distancesMatrix);

      if (i > 1 && j > 1 && textA[i - 1] === textB[j - 2] && textA[i - 2] === textB[j - 1]) {
        distancesMatrix[i][j] = Math.min(distancesMatrix[i][j], distancesMatrix[i - 2][j - 2] + 1);
      }
    }
  }

  return distancesMatrix[lenA][lenB];
}

/**
 * Prepares a distance matrix for edit distance calculations.
 * @param lenA Length of the first text.
 * @param lenB Length of the second text.
 * @returns A 2D array representing the distance matrix.
 */
function prepareDistanceMatrix(lenA: number, lenB: number): number[][] {
  const distancesMatrix: number[][] = Array.from({ length: lenA + 1 }, () =>
    Array(lenB + 1).fill(0)
  );

  for (let i = 0; i <= lenA; i++) {
    distancesMatrix[i][0] = i;
  }

  for (let j = 0; j <= lenB; j++) {
    distancesMatrix[0][j] = j;
  }

  return distancesMatrix;
}

/**
 * Applies basic edit operations (deletion, insertion, substitution) for edit distance algorithms.
 * @param i Current row index in the matrix.
 * @param j Current column index in the matrix.
 * @param textA The first text.
 * @param textB The second text.
 * @param matrix The distance matrix.
 * @returns The minimum cost for the current cell.
 */
function applyBasicEditOperations(
  i: number,
  j: number,
  textA: string,
  textB: string,
  matrix: number[][]
): number {
  const cost = textA[i - 1] === textB[j - 1] ? 0 : 1;

  return Math.min(
    matrix[i - 1][j] + 1, // Deletion
    matrix[i][j - 1] + 1, // Insertion
    matrix[i - 1][j - 1] + cost // Substitution
  );
}

/////////////////////////////////////////
//// Validation Functions
/////////////////////////////////////////

/**
 * Checks if a value is a string.
 * @param value The value to check.
 * @returns True if the value is a string, otherwise false.
 */
function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * Validates the input parameters for the string similarity functions.
 * @param textA The first text.
 * @param textB The second text.
 * @param algorithm The algorithm to use.
 * @throws Error if parameters are invalid.
 */
function validateParams(
  textA: string,
  textB: string,
  algorithm: 'Levenshtein' | 'Damerau-Levenshtein'
): void {
  if (!isString(textA) || !isString(textB)) {
    throw new Error('Both text arguments must be strings');
  }

  if (algorithm !== 'Levenshtein' && algorithm !== 'Damerau-Levenshtein') {
    throw new Error(
      "Invalid optional algorithm param. Should be 'Levenshtein' or 'Damerau-Levenshtein'"
    );
  }
}
