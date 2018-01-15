var list = document.getElementsById('list');
var add = document.getElementsById('addElem');
add.addEventListener('click', function(e) {
    var element = document.createElement('li');
    element.innerHTML = 'item';
    var item = getElementsByTagName('li');
    var itemLength = item.length;
    list.appendChild(element);
});