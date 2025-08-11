/**
 * A utility class for generating unique IDs.
 */
export class IdUtils {
  /**
   * Generates a unique ID string.
   * With a length of 12, e.g. "5f4dcc3b5aa7".
   *
   * @param length The length of the ID string to generate.
   * @returns A unique ID string.
   */
  public static generateId(length: number = 12): string {
    return Math.floor(Math.random() * Date.now()).toString(length);
  }
}
