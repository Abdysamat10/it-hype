// #    #     #     #    H  E  A  D  E  R    #    #     #     #
window.addEventListener("scroll", function(){
    let header = document.querySelector(".header")
    header.classList.toggle("sticky", window.scrollY > 150)
})

// #    #     #     #    H  E  A  D  E  R    #    #     #     #

// #    #     #     #    M  A  P    #    #     #     #



// #    #     #     #    M  A  P    #    #     #     #

// #    #     #     #    L  E  A  R  N    #    #     #     #
const btn = document.querySelector('.learn__body');
btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}
const btn2 = document.querySelector('.learn__body2');
btn2.onmousemove = function(e){
    const x2 = e.pageX - btn2.offsetLeft;
    const y2 = e.pageY - btn2.offsetTop;

    btn2.style.setProperty('--x2', x2 + 'px');
    btn2.style.setProperty('--y2', y2 + 'px');
}
// const btn3 = document.querySelector('.learn__body3');
// btn3.onmousemove = function(e){
//     const x3 = e.pageX - btn3.offsetLeft;
//     const y3 = e.pageY - btn3.offsetTop;

//     btn3.style.setProperty('--x3', x3 + 'px');
//     btn3.style.setProperty('--y3', y3 + 'px');
// }
// #    #     #     #   L  E  A  R  N    #    #     #     #

// #    #     #     #    G  A  M  E    #    #     #     #
// function slidesPlugin (activeSlide = 0) {
//     const slides  = document.querySelectorAll('.game__slide');

//     slides[activeSlide].classList.add('active')
// for (const slide of slides){
// slide.addEventListener('click' , () => {
//     clearActiveClasses()
//     slide.classList.add('active')
// })
// }

// function clearActiveClasses(){
//     slides.forEach((slide) => {
//         slide.classList.remove('active')
//     })
// } 
// }
// slidesPlugin(2)


const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
const sidebar = document.querySelector('.game__slider');
const container = document.querySelector('.game__container');
const mainSlide = document.querySelector('.game__main_slide');
const slidesCount = mainSlide.querySelectorAll('div').length 
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 80}vh`

upBtn.addEventListener( 'click', () => {
    changeSlide('up')
})
downBtn.addEventListener( 'click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', 
event => {
    if(event.key === 'ArrowUp'){
        changeSlide('up')
    } else if(event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }  else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
// #    #     #     #   G  A  M  E    #    #     #     #
// #    #     #     #   C  A  R  O  U  S  E  L     #    #     #     #

$(document).ready(function(){
    $("#carousel").owlCarousel({
        items: 2,
        // stagePadding: 300,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        navText: ['', ''],
        responsive:{
            0:{
                items: 1
            },
            991:{
                items: 2
        
            }
        }

        
    });
  });


// #    #     #     #   C  A  R  O  U  S  E  L     #    #     #     #
// #    #     #     #   B  U  R  G  E  R     #    #     #     #
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.header__list').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock')
    })
})
// #    #     #     #   B  U  R  G  E  R     #    #     #     #

// #    #     #     #    F  O  R  M     #    #     #     #

'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form__body');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: FormData
            }); 
            if (response.ok) {
                form.classList.add('_sending')
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
            } else {
                alert('Ошибка')
            }
        } else {
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input)

            if (input.classList.contains('_email')){
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
// #    #     #     #    F  O  R  M     #    #     #     #


