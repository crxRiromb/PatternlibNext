class r {
  /**
   * Generates a unique ID string.
   * With a length of 12, e.g. "5f4dcc3b5aa7".
   *
   * @param length The length of the ID string to generate.
   * @returns A unique ID string.
   */
  static generateId(t = 12) {
    return Math.floor(Math.random() * Date.now()).toString(t);
  }
}
export {
  r as IdUtils
};
