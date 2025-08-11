# Utility functions

How to organize utility functions

- Question is if the function needs access to the 'this' context
- If yes, it should be a method on the base class.
- If no, it can be a standalone function or a static method in 'utility' folder.