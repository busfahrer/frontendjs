
# frontend.js

> Nanoscopic frontend helper function

## Usage
- Optional: Minify by running `yarn build`
- Include `frontend.min.js`
- use `h()` instead of `document.createElement()`

## Usage Examples
```js
// Simple text content
h("span", null, "This is a span");

// Setting attributes
h("a", { href: "http://google.com" }, "google.com");

// Event handlers are just attributes
h("button", { onclick: () => console.log("click") }, "click me");

// Use the `style` property to set CSS:
h("span", { style: { color: "green"} }, "green text");

// Nested usage
h("span", null,
  h("i", null, "italic content"));

// Array contents (mixed)
h("div", null, [
  h("b", null, "bold content"),
  "simple text content",
]);
```