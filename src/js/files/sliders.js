/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Parallax } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.testimonials__slider')) {
		new Swiper('.testimonials__slider', {
			modules: [Navigation, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			speed: 800,
			preloadImages: false,
			parallax:true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			navigation: {
				prevEl: '.testimonials__slider .swiper-button-prev',
				nextEl: '.testimonials__slider .swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
		});
	}
	// if (document.querySelector('.swiper')) {
	// 	new Swiper('.swiper', {
	// 		modules: [Navigation, Parallax],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		speed: 800,
	// 		preloadImages: false,
	// 		parallax:true,
	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 	});
	// }
}

window.addEventListener("load", function (e) {
	initSliders();
});

// ---------------------------------------------------------------------------------
// --- ИНИЦИАЛИЗАЦИЯ И ДЕСТРОЙ СВАЙПЕРА НА РАЗРЕШЕНИИ 900рх -----------

const breakpoint = window.matchMedia('(min-width: 56.31125em)');
let mySwipers = {};

function initSlider(selector, options) {
  if (!mySwipers[selector]) {
    mySwipers[selector] = new Swiper(selector, options);
  }
}

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    for (const selector in mySwipers) {
      if (mySwipers[selector] !== undefined) {
        mySwipers[selector].destroy(true, true);
        mySwipers[selector] = undefined; // Сброс экземпляра
      }
    }
    return;
  } else if (breakpoint.matches === false) {
    return enableSwipers();
  }
};

const enableSwipers = function () {
	if (document.querySelector('.about-team__slider')) {
		initSlider('.about-team__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 15,
			speed: 500,
			navigation: {
				prevEl: '.about-team__slider .swiper-button-prev',
				nextEl: '.about-team__slider .swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				701: {
					slidesPerView: 3,
				},
			},
		});
	}
	if (document.querySelector('.featured__slider')) {
		initSlider('.featured__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 10,
			speed: 500,
			navigation: {
				prevEl: '.featured__slider .swiper-button-prev',
				nextEl: '.featured__slider .swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				601: {
					slidesPerView: 4,
				},
				769: {
					slidesPerView: 6,
				},
			},
		});
	}
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
