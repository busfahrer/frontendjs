
function h(tag, attrs, content) {

  const el = document.createElement(tag);

  Object.assign(el, attrs);

  if (attrs?.style) {
    Object.assign(el.style, attrs.style);
  }

  if (typeof content !== "object") {
    el.textContent = content;
  } else if (content instanceof HTMLElement) {
    el.append(content);
  } else if (Array.isArray(content)) {
    content.forEach(item => el.append(item));
    //el.append(...content);
  }

  return el;
}
