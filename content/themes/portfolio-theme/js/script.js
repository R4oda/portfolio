$(function () {
    $("li a").click(function () {
        var target = $($(this).attr("href")).offset().top;
        target -= 70;
        $("html,body").animate({ scrollTop: target }, 500);
        return false;
    });

    $(function () {
        $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
            $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
            return false;
        })
        $(".open-btn").click(function () {
            $('.open-btn').css("display", "none");
            $('.close-btn').css("display", "block");
        });
        $(".close-btn").click(function () {
            $('.open-btn').css("display", "block");
            $('.close-btn').css("display", "none");
        });
    });
});