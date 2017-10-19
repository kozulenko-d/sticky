document.querySelector('#initial').addEventListener("click", function(arr) {//обработчик события "вешаем" на необходимый элемент
	arr = document.querySelectorAll('header');//присваиваем значение аргументу
	arr.forEach( function(h, i) {//перебираем полученный массив
		h.classList.add('stuck');//добавляем необходимые свойства
	});
}, false);

document.querySelector('#disable').addEventListener("click", function(arr) {
	arr = document.querySelectorAll('header');
	arr.forEach( function(h, i) {
		h.classList.remove('stuck');
	});
}, false);