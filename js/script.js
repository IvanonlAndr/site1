// $('.header__icon').on('click', function () {
//     $('.header__menu').toggleClass('header__menu-active');
//   });
//   $('.header__icon').on('click', function () {
//     $('.header__icon').toggleClass('header__icon-active');
//   });

let headerIcon = document.querySelector('.header__icon')
let headerMenu = document.querySelector('.header__menu')

headerIcon.addEventListener('click', function(){
  onclick = headerMenu.classList.toggle('header__menu-active')
  onclick = headerIcon.classList.toggle('header__icon-active')
})
