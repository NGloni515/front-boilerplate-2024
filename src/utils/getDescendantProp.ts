import { isEmptyObject } from './isEmptyObject';

/**
 *  Gets object property using dot notation
 * @param {object} obj The object we are going to search in
 * @param {string} key The string of the property we are looking for
 * @return {any} The property value
 */
export function getDescendantProp(obj: object, key: string | undefined): any {
  if (!isEmptyObject(obj)) {
    if (!key?.includes('.')) return obj[key as keyof typeof obj];
    if (key) {
      const splittedKey = key.split('.');
      if (splittedKey[0] in obj) {
        return splittedKey.reduce((a, b) => a[b as keyof typeof a], obj);
      }
    }
  }
}
