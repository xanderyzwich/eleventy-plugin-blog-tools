module.exports = function(url, tabs="html, result", height="300", theme="") {
    const path = new URL(url).pathname;
    const id = path.split('/')[3];
    return `<p class="codepen" data-height="${height}" data-theme-id="${theme}" data-default-tab="${tabs}" data-slug-hash="${id}">
    <span><a href="${url}">See the Pen </a></p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>`
}