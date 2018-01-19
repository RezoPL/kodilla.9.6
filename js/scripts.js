var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e) {
    var element = document.createElement('li');
    var item = document.getElementsByTagName('li');
    var itemLength = item.length;
    element.innerHTML = 'item' + itemLength;
    list.appendChild(element);
});