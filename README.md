
# frontend.js

> Nanoscopic frontend helper function

## Usage
- Optional: Minify by running `yarn build` or using https://minify-js.com/
- Include `frontend.min.js`
- use `h()` instead of `document.createElement()`
- Alternatively, just use the copy & paste version at the end of this document

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

## Copy and paste version
```js
function h(e,t,n){const s=document.createElement(e);return Object.assign(s,t),
  t?.style&&Object.assign(s.style,t.style),"object"!=typeof n?s.textContent=n:
  Array.isArray(n)?s.append(...n):s.append(n),s}
```
