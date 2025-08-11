# JSDoc Comments

JSDoc comments are used to document JavaScript code. 
They provide a way to describe the purpose and behavior of functions, classes, and other code elements. 

- Improved code readability and maintainability.
- Enhanced IDE support, including autocompletion and inline documentation.

## Class

```javascript
/**
* @summary Provides a clickable button for actions.
 *
 * The pl-button is the standard button for all interactive actions
 * in the application. It supports various visual variants and states.
 *
 * @slot - The default slot for the button's text (an alternative to the `label` attribute).
 *
 * @event pl-click - Fired when the user clicks the button. Contains no `detail` data.
 *
 * @csspart button - The native `<button>` element inside the component.
 */
@customElement('pl-button')
export class PlButton extends PlBase {
  /**
   * Whether the button is disabled.
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * The label for the button.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  label = '';

  // ... 
}
```

## Function

```javascript
/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param {number} value - The number to clamp.
 * @param {number} min - The lower bound of the range.
 * @param {number} max - The upper bound of the range.
 * @returns {number} - The clamped value, guaranteed to be between min and max (inclusive).
 * @throws {Error} - Throws an error if the min value is greater than the max value.
 * @example
 * const result = clamp(5, 10, 20);
 * // Returns 10
 */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) {
    throw new Error('The min value cannot be greater than the max value.');
  }
  return Math.max(min, Math.min(value, max));
}
```

