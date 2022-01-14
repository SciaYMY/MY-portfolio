// CHANGED MENU
const menu=document.getElementById('nav'),
    vMenu=menu.offsetHeight;
    // console.log(vMenu)
window.addEventListener('scroll', function(){
    if(vMenu < window.pageYOffset){
        menu.classList.add('scroll-nav')
    } else {
        menu.classList.remove('scroll-nav')
    }
})
//PROJECT ANIMATION
const projectBox=$('#project .projects .my-project ul li');
projectBox.hover(function(){
    let target=$(this);
    let pjImg=target.find('.image-wrap');
    let imgHeight=pjImg.find('.image').innerHeight();
    let icon=target.find('.icon');
    let iconHeight=icon.find('img').innerHeight();
    // console.log(iconHeight);
    pjImg.stop().animate({height: imgHeight}, 600);
    icon.stop().animate({height: iconHeight}, 100);
}, function(){
    let target=$(this);
    let pjImg=target.find('.image-wrap');
    let imgHeight=0;
    let icon=target.find('.icon');
    let iconHeight=0;
    pjImg.stop().animate({height: imgHeight}, 600);
    icon.stop().animate({height: iconHeight}, 100);
})