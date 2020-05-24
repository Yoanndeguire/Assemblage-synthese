//STICKY MENU
$(function(){

    $(window).on('scroll', function(){
        if($(this).scrollTop()){
            $('#sticky').addClass('sticky');
            $('#up').removeClass('hidden');
        }else{
            $('#sticky').removeClass('sticky');
            $('#up').addClass('hidden');
        }
    });


});

$(function(){
    $('.EN').click(function(){
        $(this).toggleClass('onFocus');
        $('.FR').toggleClass('onFocus');
    })
    $('.FR').click(function(){
        $(this).toggleClass('onFocus');
        $('.EN').toggleClass('onFocus');
    })
});



//----CAROUSEL----

//Déclaration des variables du carousel

const track = document.querySelector('.carousel-liste');
const items = Array.from(track.children);
const nextButton = document.querySelector('.droite');
const prevButton = document.querySelector('.gauche');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

//Pour obtenir la largeur d'un item de la liste
const itemWidth = items[0].getBoundingClientRect().width;

//Pour placer les items
// items[0].style.left = itemWidth * 0 + 'px';
// items[1].style.left = itemWidth * 1 + 'px';
// items[2].style.left = itemWidth * 2 + 'px';
//---TRANSFORMER EN FONCTION ET PLACER A L'INTERIEUR D'UNE BOUCLE

const setItemPosition = (item, index) =>{
    item.style.left = itemWidth * index +'px';
}

items.forEach(setItemPosition);

//fonction permettant le déplacement
const moveToItem = (track, focusItem, targetItem) =>{
    track.style.transform = 'translateX(-' + targetItem.style.left + ')';
    focusItem.classList.remove('focusItem');
    targetItem.classList.add('focusItem');
}


const updateDots = (focusDot, targetDot) => {
    focusDot.classList.remove('focus');
    targetDot.classList.add('focus');
}

const hideShowFleche = (items, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('cacher');
        nextButton.classList.remove('cacher');
    } else if (targetIndex === items.length -1) {
        prevButton.classList.remove('cacher');
        nextButton.classList.add('cacher');
    } else {
        prevButton.classList.remove('cacher');
        nextButton.classList.remove('cacher');
    }
    console.log(targetIndex);
}

//clicker et bouger au prochain item
prevButton.addEventListener('click', e => {
    const focusItem = track.querySelector('.focusItem');
    const prevItem = focusItem.previousElementSibling;
    const focusDot = dotsNav.querySelector('.focus');
    const prevDot = focusDot.previousElementSibling;

    const prevIndex = items.findIndex(item => item === prevItem);


    moveToItem(track, focusItem, prevItem);
    updateDots(focusDot, prevDot);
    hideShowFleche (items, prevButton, nextButton, prevIndex);


});

nextButton.addEventListener('click', e =>{
    const focusItem = track.querySelector('.focusItem');
    const nextItem = focusItem.nextElementSibling;

    const focusDot = dotsNav.querySelector('.focus');
    const nextDot = focusDot.nextElementSibling;

    const nextIndex = items.findIndex(item => item === nextItem);

    moveToItem(track, focusItem, nextItem);
    updateDots(focusDot, nextDot);
    hideShowFleche (items, prevButton, nextButton, nextIndex);

});


dotsNav.addEventListener('click', e =>{
    //trouver le dot clicker
    const targetDot = e.target.closest('button');
    const focusItem = track.querySelector('.focusItem');
    const focusDot = dotsNav.querySelector('.focus');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetItem = items[targetIndex];

    moveToItem(track, focusItem, targetItem);
    updateDots(focusDot, targetDot);
    hideShowFleche (items, prevButton, nextButton, targetIndex);


});