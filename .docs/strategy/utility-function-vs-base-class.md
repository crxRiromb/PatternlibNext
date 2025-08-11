# Utility Function vs Base Class

When developing components, it's important to distinguish between utility functions and methods that belong to a base class.

How to organize utility functions

- Question is if the function needs access to the 'this' context
- If yes, it should be a method on the base class, e.g. isRTL().
- If no, it can be a standalone function or a static method in 'utility' folder, e.g. generateId().
  