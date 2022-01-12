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
    console.log(imgHeight);
    pjImg.stop().animate({height: imgHeight}, 600);
}, function(){
    let target=$(this);
    let pjImg=target.find('.image-wrap');
    let imgHeight=0;
    pjImg.stop().animate({height: imgHeight}, 600);        
})