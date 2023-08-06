
function h(tag, rawAttrs, rawContent) {
  let isEl = x => x instanceof HTMLElement;
  let isStr = x => typeof x == "string";
  let isArr = Array.isArray;

  let useShortcut = isEl(rawAttrs) || isStr(rawAttrs) || isArr(rawAttrs);
  let attrs = useShortcut ? {} : rawAttrs;
  let content = useShortcut ? rawAttrs : rawContent;

  let el = document.createElement(tag);

  Object.assign(el, attrs);

  if (attrs && attrs.style) {
    Object.assign(el.style, attrs.style);
  }

  if (isStr(content)) {
    el.textContent = content;
  } else if (isEl(content)) {
    el.append(content);
  } else if (isArr(content)) {
    content.forEach(item => el.append(item));
  }

  return el;
}
