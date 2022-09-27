const target = document.querySelectorAll('[data-anime]');
const animateClass = 'animate';

function animaScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight *3)/4);
    target.forEach(function(elemento){
        if(windowTop > elemento.offsetTop){
            elemento.classList.add(animateClass);
        }else{
            elemento.classList.remove(animateClass);
        }
    })

}

animaScroll();
if(target.length){
    window.addEventListener('scroll',function(){
        animaScroll();
    })
}
