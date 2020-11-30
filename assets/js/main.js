$(document).ready(function () {
  var swiperMainVisual = new Swiper('.main_visual .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
    //본문1 자동실행과 일시정지 추가
      //일시정지 클릭
      $('.main_visual .autostop').on('click', function () {
        $(this).hide().siblings('.play_stop').show();
        swiperMainVisual.autoplay.stop(); //https://swiperjs.com/api/#autoplay
        return false;
      });
      //자동실행 클릭
      $('.main_visual .autoplay').on('click', function () {
        $(this).hide().siblings('.play_stop').show();
        swiperMainVisual.autoplay.start();
        return false;
      });

      // 본문2 모델 스크롤이펙트
      var timer = 0;
      var scrollY;
    
      $(window).on('scroll', function () {
        clearTimeout(timer);
    
        timer = setTimeout(function () {
          scrollY = $(this).scrollTop();
          console.log(scrollY);
          //스크롤바가이동한거리 + 윈도창 높이 > .fade의 브라우저의 수직위치 + 자신의 높이*0.5
          var scrollBtm = scrollY + $(this).height();
          $('.models-list li').each(function () {
            var fadeBtm = $(this).offset().top + $(this).outerHeight()*0.5;
            if (scrollBtm > fadeBtm) $(this).addClass('on');
            else $(this).removeClass('on');
          });
        }, 50);
      });
});