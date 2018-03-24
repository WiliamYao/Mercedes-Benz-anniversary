define(function(require, exports, module) {
    require('jquery');
    return{
        index:function(){
            var topH=$('.shop_head').height();
            var footH=$('.shop_foot').height();
            var menuH=$(window).height()-topH-footH;
            $('.nav').css({
                height:menuH
            })
        },
        showMenu:function(){
            /*var top = $(document).scrollTop();
            $(document).on('scroll.unable',function (e) {
                $(document).scrollTop(top);
            })*/
            $('html,body').css('overflow','hidden');
            $('.cover').fadeIn();
            $('.list').show().animate({
                left:0
            },300);
        },
        hideMenu:function(){
            /*$(document).unbind("scroll.unable");*/
            $('html,body').css('overflow','visible');
            $('.list').animate({
                left:'-100%'
            },300).hide();
            $('.cover').fadeOut();
        },

        hideSe:function(){
            $('html,body').css('overflow','hidden');
            $('.cover_se').fadeOut();
            $('.search').fadeOut();
        },

        showSe:function(){
            $('html,body').css('overflow','hidden');
            $('.cover_se').fadeIn();
            $('.search').fadeIn();
        },
        returnTop:function(){
            $(window).scroll(function(){
                var top=$(window).scrollTop();
                if(top>0){
                    $('.return_top').fadeIn();
                }else{
                    $('.return_top').fadeOut();
                }
            })
        }
    }

});