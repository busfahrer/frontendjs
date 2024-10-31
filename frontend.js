
function h(tag, attrs, content) {

  const el = document.createElement(tag);

  Object.assign(el, attrs);

  if (attrs?.style) {
    Object.assign(el.style, attrs.style);
  }

  if (typeof content !== "object") {
    el.textContent = content;
  } else {
    Array.isArray(content) ? el.append(...content) : el.append(content);
  }

  return el;
}
