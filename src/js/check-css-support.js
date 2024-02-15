/* show a warning message when CSS nesting is not supported by the browser */

window.addEventListener('DOMContentLoaded', () => {
  if (!CSS.supports("selector(&)")) document.querySelector("dialog").showModal();
});