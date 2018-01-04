var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e){
	var element = document.createElement('li');
	element.innerHTML = 'item';
	var item = getElementByTagName('li');
	var itemLength = item.length;
	for (var i=0 ; i <= item.lenght ; i++) {
		list.appendChild(element);
	}
});