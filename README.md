
# frontend.js

> Nanoscopic frontend helper function

## Usage
- Optional: Minify by running `yarn build` or using https://minify-js.com/
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

## Copy and paste version (300 bytes)
```js
function h(e,t,n){let s=e=>e instanceof HTMLElement,a=e=>"string"==typeof e,r=Array.isArray,
  c=s(t)||a(t)||r(t),i=c?{}:t,l=c?t:n,o=document.createElement(e);return Object.assign(o,i),
  i&&i.style&&Object.assign(o.style,i.style),a(l)?o.textContent=l:s(l)?o.append(l):r(l)
  &&l.forEach((e=>o.append(e))),o}
```
