$(function () {
//    首页banner
    $('.banner-btn').css('margin-left',-$('.banner-btn').width()/2);
    var banNow = 0;
    var banLi = $('.banner-list li').length;
    var banTimer = null;
    $('.banner-btn li').hover(function () {
        var banNow = $(this).index();
        $('.banner-btn li').eq(banNow).addClass('active').siblings().removeClass('active');
        $('.banner-list li').eq(banNow).show().siblings().hide();
    })
    function move() {
        banNow++;
        if(banNow == banLi ){
            banNow = 0 ;
        }
        $('.banner-btn li').eq(banNow).addClass('active').siblings().removeClass('active');
        $('.banner-list li').eq(banNow).show().siblings().hide();
    }
    banTimer = setInterval(move,3000);
    $('.banner-wrapper').mouseover(function () {
        clearInterval(banTimer);
    })
    $('.banner-wrapper').mouseout(function () {
        banTimer = setInterval(move,3000);
    })
//业务动态
    $('.yewu-Dynamic-list .btn li').hover(function () {
        var iNow = $(this).index();
        $('.yewu-Dynamic-list .btn li').eq(iNow).addClass('active').siblings().removeClass('active');
        $('.yewu-Dynamic-list .list li').eq(iNow).show().siblings().hide();
    })
//    业务领域
    var yewuLi = $('.yewu-Domain-list ul li').width();
    if($(window).width() > 768){
        $('.yewu-Domain-list ul').bxSlider({
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 4,
            slideWidth: yewuLi,
            useCSS:false,
            auto:true,
            tickerHover:false
        });
    }else {
        $('.yewu-Domain-list ul').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            useCSS:false
        });
    }
    $('.yewu-Domain-list .bx-pager').css('margin-left',-($('.yewu-Domain-list .bx-pager').width()/2));

//    律师介绍
    var LayUl = $('.Lawyer-list-box ul');
    var layMove = $('.Lawyer-list-box ul li').width();
    var layLi = $('.Lawyer-list-box ul li')
    var layI = 0;
    var layTimer = null;
    $('.Lawyer-list-box ul').css('width',layMove*layLi.length);
    $('.lawyer-left').click(function () {
        $('.Lawyer-list-box ul').animate({marginLeft: -layMove},800,function () {
            $('.Lawyer-list-box ul li').eq(0).appendTo(LayUl);
            $('.Lawyer-list-box ul').css('margin-left','0');
        })
    })
    $('.lawyer-right').click(function () {
        $('.Lawyer-list-box ul').animate({marginLeft: layMove},300,function () {
            console.log( $('.Lawyer-list-box ul li'))
            $('.Lawyer-list-box ul li').eq(layLi.length-1).prependTo(LayUl);
            //LayUl.prepend( $('.Lawyer-list-box ul li').eq(0) );
            $('.Lawyer-list-box ul').css('margin-left','0');
        })
    })

  $('.Lawyer-list-box ul li').click(function () {
      var iNow = $(this).index();
      $('.Lawyer-person-info li').eq(iNow).show().siblings().hide();
    })

//    手机端图片的问题
    if ($(window).width() < 768){
        $('.Lawyer-list-box ul li').css('width',$('.Lawyer-list-box').width());
        $('.Lawyer-list-box ul').css('width',$('.Lawyer-list-box ul').width() + $('.Lawyer-list-box').width())
    }


//    合作伙伴
    if($(window).width() > 768){
        $('.Cooperative-list ul').bxSlider();
    }
    $('.Cooperative-list .bx-pager').css('margin-left',-$('.Cooperative-list .bx-pager').width()/2);
//    返回顶部
    $('.totop').click(function () {
        $('body').animate({scrollTop:'0'},800)
    })

//    内页侧栏导航
    $('.sub-sidebar ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
//    招聘职位
    $('.zp-list > li').click(function () {
        if ($(this).hasClass('active')){
            $(this).find('.zp-item-hide').slideUp();
            $(this).removeClass('active');
        }else{
            $(this).addClass('active').siblings().removeClass('active');
            $(this).find('.zp-item-hide').slideDown();
            $(this).siblings().find('.zp-item-hide').slideUp();
        }
    })
    //   漂浮的窗口
    FloatAd('.pop');
    //    手机导航
    $('#sj-nav-bar').click(function () {
        $('.sj-nav-menu').slideToggle();
    })

//    无缝滚动
//     var wfLunbo = {
//         imgWrap:$('.lawyer-lunbo'),
//         imgs:$('.lawyer-lunbo li'),
//         btn:$('.Lawyer-btn span'),
//         items:$('.swiper-tips .tip-item'),
//         next:0,
//         timer:null,
//         init:function(){
//             this.btnClick();
//             console.log(this.btn)
//         },
//         btnClick:function(){
//             var _this = this;
//             this.btn.eq(1).click(function(){
//                 _this.next++;
//                 _this.imgSwitch();
//             });
//             this.btn.eq(0).click(function(){
//                 _this.next--;
//                 _this.imgSwitch();
//             });
//         },
//         imgSwitch : function(){
//             stop(this.imgWrap,true,true);
//             if(this.next >= this.imgs.length){
//                 this.imgWrap.css('marginLeft',0);
//                 this.next  = 1;
//             };
//             if(this.next <=-1){
//                 this.imgWrap.css('marginLeft', -200*(this.imgs.length-1 )+'px');
//                 this.next = $('.lawyer-lunbo li').length-2;
//             }
//             this.imgWrap.animate({
//                 marginLeft : this.next*-layMove +'px'
//             });
//             $('.swiper-tips .tip-item').removeClass('active');
//             $('.swiper-tips .tip-item').eq( this.next == $('.swiper-tips .tip-item').length ? 0 : this.next).addClass('active');
//         }
//
//     };
//     wfLunbo.init();
})
