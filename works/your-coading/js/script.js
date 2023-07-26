$(function () {
    
 
  // works
  new Swiper('.swiper', {

    autoplay: {
      delay: 5000,
    },
  
    speed: 400,
    spaceBetween: 34,
    width: 270,
    loop: true,
    loopedSlides: 5,
    breakpoints: {
      //768xp以上の時の表示
      768: {
        spaceBetween: 56,
        width: 322,
      }

    }
  });

  

});

$(function () {
  $("#js-btnHamburger").click(function () {
    $(this).toggleClass('_open');
    $(".gnav").toggleClass('_open');
    $(".hamburger-demo-cover").toggleClass('_open');
  });

  $('.question ').on('click', function () {//タイトル要素をクリックしたら
    $('.answer').slideUp(500);

    var findElm = $(this).next(".answer");//タイトル直後のアコーディオンを行うエリアを取得

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去    
    } else {//それ以外は
      $('.close').removeClass('close'); //クラス名closeを全て除去した後
      $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
      $(findElm).slideDown(500);//アコーディオンを開く
    }
  });

});






$(function () {

  $(".alert").hide();

  $("#submitBtn").click(function () {
    $(".form-box").css("height", "750px");
    var sendflag = true;

    if (!$("#name").val()) {
      $("#name-Section .alert").show();
      sendflag = false;
    } else {
      $("#name-Section .alert").hide();
    }


    if (!$("#email").val()) {
      $("#email-Section .alert").show();
      sendflag = false;
    } else {
      $("#email-Section .alert").hide();
    }

    if (!$("#textarea").val()) {
      $("#textSection .alert").show();
      sendflag = false;
    } else {
      $("#textSection .alert").hide();
    }
    var chkboxChk = $('input[name="checkbox"]:checked').length;
    if (chkboxChk == 1) {
    } else {

      sendflag = false;
    }








    if (sendflag == false) {
      return false;
    }


  });
  $("#checkbox-Section input").click(function () {


    if ($(this).prop('checked') == false) {
      $("#submitBtn").val("未入力の項目があります");

    } else {
      $("#submitBtn").val("送信する");
    }


  });

});
