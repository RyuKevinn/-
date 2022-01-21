
$('#section .category .depth1 li>a').on('mouseover mouseout',function(){
    $(this).toggleClass('on')
})




// 이벤트 슬라이드
$('.event .slideInner').slick({
    autoplay: true,
    dots:false,
    arrows:false,
}) 