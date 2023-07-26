$(function () {
    var headNav = $(".header_top-page,.header-nav__item_top-page a");
    /* 初期表示、スクロール時にイベント開始 */
    $(window).on("load scroll", function () {
        /* スクロール位置の高さが200pxより大きい、かつis-fixedクラスがない場合 */
        if ($(this).scrollTop() > 100 && headNav.hasClass("is-fixed") == false) {
            headNav.css("background-color", "#FFF");
            headNav.css("color", "#000");
            headNav.css({ "top": "-72px" }); /* ヘッダーの高さ分マイナスにする */
            headNav.addClass("is-fixed");
            headNav.animate({ "top": 0 }, 600);
            $(".header__logo_top-page").css("-webkit-filter", "invert(1)");
            $(".openbtn1 span").css("background-color", "#000");
        }
        /* スクロール位置の高さが200pxより小さい、かつis-fixedクラスがある場合 */
        else if ($(this).scrollTop() < 50 && headNav.hasClass("is-fixed") == true) {
            headNav.removeClass("is-fixed");
            headNav.css("background-color", "");
            headNav.css("color", "#FFF");
            headNav.css("display", "block");
            $(".header__logo").css("-webkit-filter", "invert(0)");
            $(".header .openbtn1 span").css("background-color", "#fff");

        }
    });
    $('.header__calender-btn,.humburger-calender-btn').on('click', function () {
        $('.modal').fadeIn();
        $('body').css('overflow-y', 'hidden');
        $(".humburger-img").css("display", "none");
        return false;
    });
    $('.js-modal__btn').on('click', function () {
        $('.modal').fadeOut();
        $('body').css('overflow-y', 'auto');
        $(".humburger-img").css("display", "block");
        return false;
    });
    $('.tab li').click(function () {

        // ②クリックされたタブの順番を変数に格納
        var index = $('.tab li').index(this);

        // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
        $('.tab li').removeClass('active');

        // ④クリックされたタブにクリック済みデザインを適用する
        $(this).addClass('active');

        // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
        $('.area section').removeClass('show').eq(index).addClass('show');

    });




    $(function () {
        $(".openbtn1").click(function () {
            $(this).toggleClass('active');
            $('.hambarger-menu').toggleClass('open');
            $('body').toggleClass('no_scroll');
        });
    });

});
function changeColor(hoge) {
    if (hoge.value == 0) {
        hoge.style.color = '';
    } else {
        hoge.style.color = 'black';
    }
}

