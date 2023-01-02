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
//PHOTO EFFECT
function photoEffect(){
    $('.opa>div').css('opacity', 0);
    $('.photo-effect').hover(function(){
        let x1=$(this).find('.hover_x1'), x2=$(this).find('.hover_x2'), x3=$(this).find('.hover_x3'), x4=$(this).find('.hover_x4');
        x1.css('opacity', 1).stop().animate({height: 0}, 500);
        x2.css('opacity', 1).stop().animate({height: 0}, 500);
        x3.css('opacity', 1).stop().animate({width: 0}, 500);
        x4.css('opacity', 1).stop().animate({width: 0}, 500);
    }, function(){
        let x1=$(this).find('.hover_x1'), x2=$(this).find('.hover_x2'), x3=$(this).find('.hover_x3'), x4=$(this).find('.hover_x4');
        x1.stop().animate({height: '50%', 'opacity': 0}, 500);
        x2.stop().animate({height: '50%', 'opacity': 0}, 500);
        x3.stop().animate({width: '50%', 'opacity': 0}, 500);
        x4.stop().animate({width: '50%', 'opacity': 0}, 500);
    })
}
photoEffect();
//HUMAN PROJECT ANIMATION
function humanAni(){
    // const aniMax = $('.human-project>ul');
    const aniMax = $('.hover-slide>ul');
    $('.pj1').hover(
      function () {
        $(this).stop().animate({ width: '49%' }, 500);
        $(this).find('.project-detail').addClass('pj-s');
      },
      function () {
        $(this).stop().animate({ width: '16.33%' }, 50);
        $(this).find('.project-detail').removeClass('pj-s');
      }
    );
    $('.alpaco-project .pj1').hover(
      function () {
        $(this).stop().animate({ width: '49%' }, 500);
        // $('.pj1').stop().animate({ width: '47.99%' }, 500);
        $(this).find('.project-detail').addClass('pj-s');
      },
      function () {
        $(this).stop().animate({ width: '16.33%' }, 50);
        $(this).find('.project-detail').removeClass('pj-s');
      }
    );
    $('.pj2').hover(function(){
        $(this).stop().animate({width: '49%', left: 0}, 500)
        aniMax.stop().animate({left: '-32.2%'}, 300)
        $(this).find('.project-detail').addClass('pj-s')
    }, function(){
        $(this).stop().animate({width: '16.33%'}, 50)
        aniMax.stop().animate({left: 0}, 300)
        $(this).find('.project-detail').removeClass('pj-s')
    });
    $('.pj3').hover(function(){
        $(this).stop().animate({width: '49%', left: 0}, 500)
        aniMax.stop().animate({left: '-64.2%'}, 300)
        $(this).find('.project-detail').addClass('pj-s')
    }, function(){
        $(this).stop().animate({width: '16.33%'}, 50)
        aniMax.stop().animate({left: 0}, 300)
        $(this).find('.project-detail').removeClass('pj-s')
    });
}
humanAni();

//HUMAN PROJECT TOOLTIP  (정확한 개념 정리 후 수정 필요)
let balloon=$('<div class="balloon"><div>').appendTo('.human-project>ul>li');
function updateBalloonPosition(x, y){
    let scrollY=$(window).scrollTop();
    // console.log(scrollY);
    let positionX=$('.human-project>ul').offset().left;
    let positionY=$('.human-project>ul').offset().top;
    // console.log(positionY)
    balloon.css({left: x-positionX-24-312, top: y-positionY+scrollY})
}
$('.project-detail').each(function(){
    let tg=$(this);
    let text=tg.attr('title');
    tg.attr('title', '');
    tg.hover(function(e){
        balloon.text(text);
        updateBalloonPosition(e.clientX, e.clientY);
        balloon.show();
    }, function(){balloon.hide()})
    $(this).mousemove(function(e){
        updateBalloonPosition(e.clientX, e.clientY);
    })
})
//PROJECT ANIMATION
function projectAni(){
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
}
projectAni();