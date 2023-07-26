$(function () {
    var headNav = $(".header-top");
    /* 初期表示、スクロール時にイベント開始 */
    $(window).on("load scroll", function () {
        if ($(this).scrollTop() > 700 && headNav.hasClass("is-fixed") == false) {
            headNav.addClass("is-fixed");
            headNav.css("background-color", "#FFF");
            headNav.css("width", "100%");
            headNav.css("z-index", "200");
            $(".header-top__inner").css("filter", "invert(85%)")
            headNav.css("position", "fixed");
            headNav.css({ "top": "-80" }); /* ヘッダーの高さ分マイナスにする */
        }
        /* スクロール位置の高さが700pxより小さい、かつis-fixedクラスがある場合 */
        else if ($(this).scrollTop() < 700 && headNav.hasClass("is-fixed") == true) {
            headNav.removeClass("is-fixed");
            headNav.css("background-color", "");
            headNav.css("display", "block");
            headNav.css("position", "");
            $(".header-nav__item__top, .header-nav__item__bottom").css("color", "#fff");
            $(".header__inner").css("background-color", "");
            $(".header-top__inner").css("filter", "invert(0)")
        }
    });
});
$(function () {
    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
        $('.hambarger-menu').toggleClass('open');
        $('.header ').css("background", "#4b6cb7");
        $('body').toggleClass('no_scroll');
    });
});

$(window).on('load',function(){
    $("#loading").fadeOut();
  }); 
      
  $(window).on('load',function(){  //全ての読み込みが完了したら実行する
    $('#loadingWrap').delay(900).fadeOut(800);
    $('#loading').delay(600).fadeOut(300);
    $('#contents').css('display', 'block');
  });
  function stopload(){
    $('#contents').css('display','block');
    $('#loadingWrap').delay(900).fadeOut(800);
    $('#loading').delay(600).fadeOut(300);
  } 
  $(function(){  //10秒たったらロードを終わらせる
    setTimeout('stopload()',10000);
  });

