fetch(chrome.runtime.getURL('/index.html')).then(r => r.text()).then(html => {
  console.log("HERE!!");
  document.body.insertAdjacentHTML('beforeend', html);
  // not using innerHTML as it would break js event listeners of the page
});