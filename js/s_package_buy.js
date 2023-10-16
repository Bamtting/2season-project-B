$(document).ready(function () {
  

  var menuVisible = false; // 메뉴바의 현재 표시 상태를 저장합니다.

  //로그인 안 되었을 때
  $(".pk-totle-buy-btn").click(function () {
    location.href = "login.html";
  });
  $(".pk-totle-btn button").click(function () {
    location.href = "login.html";
  });
  //로그인 되었을 때
  
  //반응형
  $(".pk-totle-buy-btn2").click(function () {
    $(".pk-buy-box2").addClass("modal-open");
  });
  
  $(window).scroll(function () {
    // 스크롤된 높이
    var scrollHeight = $(window).scrollTop();

    // pk-totle-btn2가 보이게 하는 조건을 설정 (예시로 100px 스크롤 내린 경우)
    if (scrollHeight > 0) {
      $(".pk-totle-btn2").addClass("visible");
    } else {
      $(".pk-totle-btn2").removeClass("visible");
    }
  });
});