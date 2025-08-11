# Native vs Data Attributes

There is a Key Difference concerning inherited effect and required traversal.

## Native Attribute (e.g., dir)

- Browser Behavior: The browser understands dir and uses it to set the inheritable CSS direction property.
- Inheritance: The effect of the attribute (directionality) cascades down the DOM to all children via CSS inheritance.

Access:

- CSS: Use the :dir(rtl) pseudo-class to query the inherited state.
- JS: Use getComputedStyle(element).direction to get the effective, computed value.

## Custom data-* Attribute (e.g., data-theme)

- Browser Behavior: The browser has no built-in knowledge of data-theme. To the browser, it's just a generic key-value pair.
- Inheritance: The attribute and its value are not inherited. A child element does not automatically receive the data-theme attribute from its parent.

Access: 

- To find the effective value for an element, you must traverse up the DOM tree.
- CSS:  Use an attribute selector like [data-theme="dark"] to style an element that has the attribute itself.
        Or a selector like :host-context([data-theme="dark"]) to query an ancestor.
- JS: You must explicitly use element.closest('[data-theme]') to find the nearest ancestor that defines the value.