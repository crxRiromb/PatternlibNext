# Events

## Simple Client Events

Provide also for simple Events a stable API.

Advantages of this strategy:

- Stable API: The event name, e.g. **pl-button-click** is part of your public API.
  It is unique and will not change, even if you completely restructure the internal logic.

- Decoupling: You can change the internal implementation without affecting the users of your wrapper.
  As long as you fire the pl-button-click event at the end, everything will work as before.

- Clarity: The name, e.g. **pl-button-click** immediately makes it clear where the event comes from, which facilitates debugging in complex applications.
