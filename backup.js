//Select Parent element of the playlists.
var list = document.querySelectorAll('#expandable-items')[0];

//Put all the playlists in the parent element in items array.
var items = list.childNodes;
var itemsArr = [];

//Every playlist in the list that is element is put in itemsArr array.
for (var i in items) {
    if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
    }
}

//Sort ItemsArr using natural sort.
itemsArr.sort((b, a) => a.innerHTML.localeCompare(b.innerHTML, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))

//Put playlist back in the parent element as sorted.
for (i = 0; i < itemsArr.length; ++i) {
  list.appendChild(itemsArr[i]);
}