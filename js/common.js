var deviceSize1 = 1024;
var deviceSize2 = 768;

function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO
console.log(scX,scO)
if (scD>0) {
    deviceSize1 = deviceSize1 - scD
    deviceSize2 = deviceSize2 - scD
}
function init(){
    var ww = $(window).width()
    console.log(ww,deviceSize1,deviceSize2)
    if (ww>deviceSize1 && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('tablet mobile')
        $('html').css({ overflowY:'auto' })
        $('#header .topmenu').css({display:'none'})
        $('#header .opennav').css({display:'none'})
        $('#header .msearch').css({display:'none'})
        $('html').scrollTop(0)
    } else if (ww>deviceSize2 && ww<=deviceSize1 && !$('html').hasClass('tablet')) {
        $('html').addClass('tablet').removeClass('pc mobile')
        $('html').css({ overflowY:'auto' })
        $('#header .topmenu').css({display:'unset'})
        $('#header .opennav').css({display:'unset'})
        $('#header .msearch').css({display:'inline'})
        $('html').scrollTop(0)
    } else if (ww<=deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet pc')
        $('html').css({ overflowY:'auto' })
        $('html').scrollTop(0)
    }
}
init()

$(window).on('resize', function(){
    init()
})


// Click event
$('#header .topmenu').on('click',function(){
    $('#header .opennav .mnav').toggleClass('on')
    if($('#header .topmenu i').hasClass('fa-bars')){
        $(this).find('i').removeClass('fa-bars').addClass('fa-times')

    }
    else{
        $(this).find('i').removeClass('fa-times').addClass('fa-bars')
    }
    
})






// Hover event
$('.depth1 > li').on('mouseover mouseout',function(e){
    e.preventDefault()
    $(this).find('.depth2').stop().slideToggle(500)
})

$('#header .nav .depth1>li .depth2> li').on('mouseover mouseout',function(){
    $(this).stop().toggleClass('on')
})

$('#header .msearch').on('mouseover mouseout',function(){
    $(this).toggleClass('on')
})

$('#header .opennav .loginbox li').on('mouseover mouseout',function(){
    $(this).toggleClass('on')
})
$('#header .opennav .depth1 li').on('mouseover mouseout',function(){
    $(this).toggleClass('on')
})
$('#header .opennav .advertise li').on('mouseover mouseout',function(){
    $(this).toggleClass('on')
})




// Scroll event
$(window).on('scroll',function(){
    var hscroll = $(window).scrollTop()
    if(hscroll>10){
        $('#header').addClass('on')
        $('.nav').addClass('on')
        $('.msearch').addClass('scr')
        $('.topmenu').addClass('scr')
        $('#header .logo a').html('<img src="./img/h1_logo_pc.png" alt="x"></img>')
    }
    else{
        $('#header').removeClass('on')
        $('.nav').removeClass('on')
        $('.msearch').removeClass('scr')
        $('.topmenu').removeClass('scr')
        $('#header .logo a').html('<img src="./img/h1_logo_pc_w.png" alt="x"></img>')
    }    


// Top button
    if(hscroll>100 && !$('html').hasClass('gotop')){
        $('html').addClass('gotop')
        $('#footer').append('<div class="topbtn"><a href="javascript:;"><img src="./img/ico_top.png" alt="x"></a></div>')
        $('.topbtn').animate({opacity:1},300)
    } else if (hscroll<=200 && $('html').hasClass('gotop')){
    $('html').removeClass('gotop')
    $('.topbtn').animate({opacity:0},300,function(){
        $(this).remove()
    })        
    }
})

$('#footer').on('click','.topbtn',function(){
    $('html').animate({scrollTop:0},500)
})

