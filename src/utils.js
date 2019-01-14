const isMac = (function() {
  return /macintosh|mac os x/i.test(navigator.userAgent);
})();

const isWindows = (function() {
  return /windows|win32/i.test(navigator.userAgent);
})();

export default function getPlatForm() {
  if (isMac) {
    return "mac";
  }
  if (isWindows) {
    return "windows";
  }
  return "";
}
export function parentElements(element) {
  if (element === null) {
    return [];
  }
  const elements = [];
  while (element.parentElement) {
    elements.push(element.parentElement);
    element = element.parentElement;
  }
  return elements;
}
export function hideDom(dom) {
  dom.style.display = "none";
}
export function showDom(dom, display = "block") {
  dom.style.display = display;
}
export function isSupportPassive() {
  let passiveSupported = false;
  try {
    const options = Object.defineProperty({}, "passive", {
      get() {
        passiveSupported = true;
        return passiveSupported;
      }
    });
    window.addEventListener("test", null, options);
  } catch (err) {
    /* eslint-disable no-console */
    console.error(err);
    /* eslint-enable no-console */
  }
  return passiveSupported;
}
