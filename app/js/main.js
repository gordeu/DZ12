$(function () {

  $('.slider__inner').slick({
    infinite: false
  }); 

  var mixer = mixitup('.product-cards');

});


document.addEventListener('DOMContentLoaded', () => { 
  const button = document.querySelector('.catalog') 
  const nav = document.querySelector('.catalog__content') 
  const btn = document.querySelector('.catalog__btn')
  button.addEventListener('click', () => { 
    nav.classList.toggle('catalog__content--active') 
    btn.classList.toggle('catalog__btn--active')
  })
  window.addEventListener('click', e => { 
    const target = e.target 
    if (!target.closest('.catalog__content') && !target.closest('.catalog')) {  
      nav.classList.remove('catalog__content--active') 
      btn.classList.remove('catalog__btn--active')
    }
  })
})