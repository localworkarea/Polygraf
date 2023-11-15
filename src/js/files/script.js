// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// international tel input ======================================
const inputPhone = document.querySelector(".phone_input");
if (inputPhone) {
  intlTelInput(inputPhone, {
      initialCountry: 'us',
      utilsScript: "files/intl_tel_input/js/utils.js",
      customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        return "+";
      },
      
  });
}
// ================================================================

const menuSubMenuItem = document.querySelector('.menu__item-sub-menu');

if (menuSubMenuItem) {
  const header = document.querySelector('.header');
  const menuSubMenu = document.querySelector('.menu__sub-menu');

  let isPopupOpen = false; // Флаг, отслеживающий состояние окна

  function handleSubMenuHover() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      header.classList.add('_hover-sub-menu');
      if (isPopupOpen) {
        document.documentElement.classList.add("lock");
      }
    }
  }

  function handleOutsideClick(event) {
    if (isPopupOpen && window.matchMedia('(min-width: 769px)').matches && !menuSubMenu.contains(event.target)) {
      header.classList.remove('_hover-sub-menu');
      document.documentElement.classList.remove("lock");
      isPopupOpen = false; // Установка флага в false при клике за пределами попапа
      document.removeEventListener('click', handleOutsideClick);
    }
  }

  function handleEscKey(event) {
    if (event.key === 'Escape') {
      header.classList.remove('_hover-sub-menu');
      if (isPopupOpen) {
        document.documentElement.classList.remove("lock");
        isPopupOpen = false; // Установка флага в false при нажатии клавиши Escape
        document.removeEventListener('keydown', handleEscKey);
      }
    }
  }

  function openPopup() {
    // Функция, которая открывает попап
    isPopupOpen = true; // Установка флага, что окно открыто
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);
    // Дополнительный код для открытия попапа
  }

  menuSubMenuItem.addEventListener('mouseenter', () => {
    openPopup();
    handleSubMenuHover();
  });
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




// SHARE REFER (eCommerce page) ============================================
document.addEventListener("DOMContentLoaded", function() {
  const referralLinkField = document.querySelector("#referralLink");
  const copyButton = document.querySelector("#copyButton");
  const copiedRefElement = document.querySelector(".copied-ref");

  if (referralLinkField) {
    // Задаем значение поля с реферральной ссылкой
    const yourReferralLink = "www.polygraf.ai/referrallinksetup";
    referralLinkField.value = yourReferralLink;

    function copyReferralLink() {
      try {
        if (navigator.share) {
          // Если поддерживается navigator.share, используем его для поделиться ссылкой
          navigator.share({
            title: 'Share Referral Link',
            text: yourReferralLink,
          })
            .catch(err => {
              console.error('Failed to share link: ', err);
            });
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(referralLinkField.value)
            .then(() => {
              copiedRefElement.classList.add("_active");
              setTimeout(() => {
                copiedRefElement.classList.remove("_active");
              }, 1500);
            })
            .catch(err => {
              console.error('Failed to copy text: ', err);
            });
        } else {
          referralLinkField.select();
          document.execCommand("copy");
          copiedRefElement.classList.add("_active");
          setTimeout(() => {
            copiedRefElement.classList.remove("_active");
          }, 1500);
        }
      } catch (err) {
        console.error('Error sharing/copying text: ', err);
      }
    }

    copyButton.addEventListener("click", copyReferralLink);
  }
});


//  "detect-source__item" input in textarea ========================
const detectTextarea = document.querySelector('.detect-source__input');
const detectItem = document.querySelector('.detect-source__item');

if (detectTextarea) {
  function handleTextareaInput() {
    if (detectTextarea.value.trim() !== '') {
      detectItem.classList.add('_typed');
    } else {
      detectItem.classList.remove('_typed');
    }
  }
  detectTextarea.addEventListener('input', handleTextareaInput);
}


// Name of upload file to input (Careers page, popup) ========================
const fileInputCV = document.getElementById("formContactCV");
const fileTextElement = document.querySelector(".form__file-txt");
const fileInsertElement = document.querySelector(".form__file-insert");

if (fileInputCV) {
    fileInputCV.addEventListener("change", function () {
        if (fileInputCV.files[0]) {
            fileInsertElement.textContent = fileInputCV.files[0].name;
            fileTextElement.classList.add("_upload");
        } else {
            fileInsertElement.textContent = "";
            fileTextElement.classList.remove("_upload");
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
  // Получите все элементы .item-jobs__btn
  const jobButtons = document.querySelectorAll(".item-jobs__btn");
  
  // Получите соответствующий попап
  const popupJobForm = document.getElementById("popupJobForm");
  
  if (popupJobForm) {
    // Функция для копирования информации из item-jobs в попап
    function copyJobInfo(event) {
      
      // Найдите ближайший родительский элемент .careers-jobs__item
      const itemJobs = event.currentTarget.closest(".careers-jobs__item");
      
      // Получите информацию, которую нужно скопировать, из .item-jobs
      const jobPosition = itemJobs.querySelector(".item-jobs__position h3").textContent;
      const jobLocation = itemJobs.querySelector(".job-location p").textContent;
      const jobType = itemJobs.querySelector(".job-type p").textContent;
  
      // Найдите соответствующие элементы в попапе
      const popupJobPosition = popupJobForm.querySelector(".popup-form-position");
      const popupJobLocation = popupJobForm.querySelector(".popup-form-location");
      const popupJobType = popupJobForm.querySelector(".popup-form-job");
  
      // Скопируйте информацию в попап
      popupJobPosition.textContent = jobPosition;
      popupJobLocation.textContent = jobLocation;
      popupJobType.textContent = jobType;
    }
  
    // Добавьте обработчик события для каждой кнопки
    jobButtons.forEach(function(button) {
      button.addEventListener("click", copyJobInfo);
    });
  }
});


// == Add class _hidden to .links-prod (pages: products, eCommerce, identification, detection, gorernance, careers)
const linksProd = document.querySelector('.links-prod');
if (linksProd) {
  const footer = document.querySelector('.footer');
  const links = document.querySelector('.links-prod');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.classList.add('_hidden');
      } else {
        links.classList.remove('_hidden');
      }
    });
  }, options);
  observer.observe(footer);
}