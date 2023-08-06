
function h(tag, attrs, content) {
  const el = document.createElement(tag);

  if (attrs) {
    Object.keys(attrs).forEach(key => el[key] = attrs[key]);
  }

  if (typeof content === "string") {
    el.textContent = content;
  } else if (content instanceof HTMLElement) {
    el.append(content);
  } else if (Array.isArray(content)) {
    content.forEach(item => el.append(item));
  }

  return el;
}

