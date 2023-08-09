const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


const mm = document.querySelector('.mm');
const headerNav = document.querySelector('.header-nav')

mm.addEventListener('click', () => {
	headerNav.classList.toggle('active-mm');
});


const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
	// настройки (не обязательно), см. API
});


$("#subscribe").submit(function (e) {
	e.preventDefault();
	var form = $(this);
	var actionUrl = form.attr('action');

	$.ajax({
		type: "POST",
		url: actionUrl,
		data: form.serialize(),
		success: function (data) {
			alert(data);
		}
	});

});
