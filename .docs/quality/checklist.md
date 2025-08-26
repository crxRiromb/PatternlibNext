# Quality Checklist

## Component Checklist

- [ ] The component has a descriptive JSDoc comment at the top with `@slot`, `@event`, and `@csspart` annotations.
- [ ] The component extends `PlBase` for Utility functions.

## Variable Checklist

- [ ] All private variables are prefixed with `_` and documented with JSDoc comments.
- [ ] All private variables are marked with `@internal` in JSDoc comments.

## Property Checklist

- [ ] All properties are documented with JSDoc comments.
- [ ] HTML conform properties reflect to attributes with `reflect: true`.
- [ ] Data properties are prefixed with `data-` and have `attribute: false`.

## Method Checklist

- [ ] All public methods are documented with JSDoc comments.
- [ ] Life cycle methods (`connectedCallback`, `disconnectedCallback`, `firstUpdated`, `updated`, should have `/** @internal */` JSDoc comments.
- [ ] All private methods are prefixed with `_` and documented with JSDoc comments.
- [ ] All methods have appropriate TypeScript types for parameters and return values.
