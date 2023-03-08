let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.nav__bar');
let menuItem = document.querySelector('.nav__link')
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

Array.from(document.querySelectorAll('.nav__link')).forEach(( item ) => item.addEventListener("click", function () {
	menuBtn.classList.toggle('active')
	menu.classList.toggle('active')
}))


let center = [43.359693, 45.624733];

function init() {
	let map = new ymaps.Map('content__map', {
		center: center,
		zoom: 17
	})

	let placemark = new ymaps.Placemark(center,{},{
		iconLayout: 'default#image',
		iconImageHref: '../img/icons/location-min.png',
		iconImageSize: [40,40],
		iconImageOffset: [-10, -50]
	})

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
	map.geoObjects.add(placemark)
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init)