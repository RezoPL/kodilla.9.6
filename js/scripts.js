var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e) {
    var element = document.createElement('li');
    element.innerHTML = 'item';
    var item = document.getElementsByTagName('li');
    var itemLength = item.length;
    list.appendChild(element);
});