var list = document.querySelectorAll('#expandable-items')[0];

var items = list.childNodes;
var itemsArr = [];
for (var i in items) {
    if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
    }
}

itemsArr.sort((b, a) => a.innerHTML.localeCompare(b.innerHTML, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))

for (i = 0; i < itemsArr.length; ++i) {
  list.appendChild(itemsArr[i]);
}