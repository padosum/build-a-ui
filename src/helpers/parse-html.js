export default function parseHTML(html) {
  var t = document.createElement('template');
  t.innerHTML = html;
  return t.content;
}