// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const header = document.querySelector('.header');
const menuSubMenuItem = document.querySelector('.menu__item-sub-menu');
const menuItems = document.querySelectorAll('.menu__item');
const menuSubMenu = document.querySelector('.menu__sub-menu');

if (menuSubMenuItem) {
  function handleSubMenuHover() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      header.classList.add('_hover-sub-menu');
      document.documentElement.classList.add("lock");
    }
  }

  // function handleOtherMenuItemsHover(event) {
  //   if (window.matchMedia('(min-width: 769px)').matches && event.target !== menuSubMenuItem) {
  //     header.classList.remove('_hover-sub-menu');
  //     document.documentElement.classList.remove("lock");
  //   }
  // }

  function handleOutsideClick(event) {
    if (window.matchMedia('(min-width: 769px)').matches && !menuSubMenu.contains(event.target)) {
      header.classList.remove('_hover-sub-menu');
      document.documentElement.classList.remove("lock");
    }
  }

  function handleResize() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      header.classList.remove('_hover-sub-menu'); // Убираем класс при изменении размера окна
      document.documentElement.classList.remove("lock");
    }
  }

  // Добавляем обработчик события для `mouseenter` на `.menu__item-sub-menu`
  menuSubMenuItem.addEventListener('mouseenter', handleSubMenuHover);

  // // Добавляем обработчик события `mouseenter` для других `.menu__item`
  // menuItems.forEach((menuItem) => {
  //   menuItem.addEventListener('mouseenter', handleOtherMenuItemsHover);
  // });

  // Добавляем обработчик события `click` для клика вне `.menu__sub-menu`
  document.addEventListener('click', handleOutsideClick);

  // Обработчик события `resize` для учета изменения размера окна
  window.addEventListener('resize', handleResize);

  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      if (document.documentElement.classList.contains('touch')) {
        // Удаляем все обработчики событий, если класс .touch присутствует
        menuSubMenuItem.removeEventListener('mouseenter', handleSubMenuHover);
        // menuItems.forEach((menuItem) => {
        //   menuItem.removeEventListener('mouseenter', handleOtherMenuItemsHover);
        // });
        document.removeEventListener('click', handleOutsideClick);
        window.removeEventListener('resize', handleResize);
      }
    }, 2000); // 2 секунды задержки
  });

  function handleEscKey(event) {
    if (event.key === 'Escape') { // Проверяем, что нажата клавиша "Esc"
      header.classList.remove('_hover-sub-menu');
      document.documentElement.classList.remove("lock");
    }
  }

  // Добавляем обработчик события `keydown` для нажатия клавиши "Esc"
  document.addEventListener('keydown', handleEscKey);
}


const heroVideo = document.getElementById("heroVideo");
const playPauseButton = document.getElementById("playPauseButton");

if (heroVideo) {
  playPauseButton.addEventListener("click", function() {
      if (heroVideo.paused) {
          heroVideo.play();
          playPauseButton.classList.remove("_paused");
      } else {
          heroVideo.pause();
          playPauseButton.classList.add("_paused");
      }
  });
}

