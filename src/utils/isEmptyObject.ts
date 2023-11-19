/**
 * Checks if given object is empty
 * @param {object} obj The object we are testing
 * @returns {boolean} Object is empty or not
 */
export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}
