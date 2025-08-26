# Life Cycle Methods

In Lit, you have to distinguish between two types of lifecycle methods:

- The standard methods of Web Components
- The additional, reactive methods of Lit.

Both together give you full control over your component.

## 1. Standard Web Component Lifecycle

These methods are part of the native Web Component standard and are called by the browser itself. They are ideal for setup and cleanup work that is not directly related to rendering the component.

### `constructor()`

- Is called exactly once when the component is instantiated (e.g., with `document.createElement`).
- Here you initialize the internal state. You do not yet have access to the DOM or attributes here.

### `connectedCallback()`

- Is called every time the component is inserted into the DOM.
- This is the perfect place to add global event listeners or initiate one-time fetch requests.
- **Important**: If you override this method, you must always call `super.connectedCallback()`.

### `disconnectedCallback()`

- Is called every time the component is removed from the DOM.
- Here you should clean up all the work you started in `connectedCallback()` (e.g., remove event listeners) to avoid memory leaks.

### `attributeChangedCallback(name, oldValue, newValue)`

- Is called when an HTML attribute that you are observing via `static get observedAttributes()` changes.
- Lit automates this for you, so you rarely need this method yourself.

## 2. Lit's Reactive Update Lifecycle

These methods are controlled by Lit and handle the efficient re-rendering of your component when its properties change.

### `requestUpdate()`

- This is not a method you override, but one that you call to manually trigger an update.
- Lit calls it automatically when a `@property` changes.

### `shouldUpdate(changedProperties)`

- Is called before an update cycle begins.
- Here you can decide whether the component should re-render at all for certain property changes.
- If you return `false`, the update is cancelled. Useful for performance optimizations.

### `update(changedProperties)`

- Is called directly before `render()`.
- Here you can calculate values based on changed properties before the template is redrawn.
- Changes to properties within `update` do not trigger another update.

### `render()`

- The heart of your component. This method returns the `html` template that describes the structure of your Shadow DOM.
- It should be "pure", i.e., not cause any side effects.

### `firstUpdated(changedProperties)`

- Is called exactly once in the component's life, right after the template has been rendered and inserted into the DOM for the first time.
- This is the ideal place for one-time DOM manipulations that require access to the rendered Shadow DOM (e.g., starting an animation or initializing a canvas element).

### `updated(changedProperties)`

- Is called after every update cycle, after `render()` has run and the DOM has been updated.
- Here you can react to the updated DOM or perform operations that depend on the new property values.

## 3. Update Sequence

The typical sequence for the first update looks like this:

- constructor() →
- connectedCallback() →
- update() →
- render() →
- firstUpdated() →
- updated().
