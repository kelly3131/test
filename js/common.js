
//main 스크롤 내릴 때 header bg 변경

window.addEventListener('scroll', function() {
  var header = document.querySelector('.main-header');
  var scrollPosition = window.scrollY;

  // 스크롤이 일정 이상 내려갔을 때 배경색 변경
  if (scrollPosition > 36) { // 변경하고 싶은 스크롤 위치 (100은 예시입니다)
    header.style.backgroundColor = '#fff'; // 변경할 배경색
  } else {
    header.style.backgroundColor = '#F4F6F8'; // 초기 배경색
  }
});

// const header = document.querySelector('header');
// const footer = document.querySelector('footer');
// const index = 'index';
 // URL경로에서 매칭되는 텍스트

// const IndexLayout = () => {
//   header.innerHTML = `
//   넌 인덱스 헤더
//     <h1>로고</h1>
//   `;
//   footer.innerHTML = `
//   난 인덱스 푸터
//     <p>ㅎㅎㅎ copy</p>
//   `;
// }

// const SubLayout = () => {
//   header.innerHTML = `
//   넌 서브 헤더
//     <h1>로고</h1>
//   `;
//   footer.innerHTML = `
//   난 서브 푸터
//     <p>ㅎㅎㅎ copy</p>
// `;
// }


// console.log(location.pathname); 
// // URL의 경로 나타냄

// if(location.pathname.match(index)){ 
//   // index변수값과 비교되는 텍스트가 있다면 true
//   IndexLayout();
// }else{
//   SubLaytou();
// } 


//2024-03-29 KEJ 추가
var slideImgList = new Swiper(".swiper.img-list", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
$(function () {
  $(".hide-con").hide();
  $(".layer-img").on("click", modalImg);// Img Layer Popup
  $(".layer-toast").on("click", modaltoast);// Toast Layer Popup
});
/* Img Layer Popup */
function modalImg(e) {
  e.preventDefault();
  var $body = $("body");
  var modalPop = $("#" + $(this).attr("data-modal"));

  $("body").addClass("scroll-lock");//body 스크롤방지
  modalPop.addClass("open");
  modalPop.on("click", function(event){
      if (event.target === event.currentTarget) {
          // 반투명 배경 클릭 시 레이어 닫기
          modalClose();
      }
  });
  //레이어 닫기
  function modalClose() {
      modalPop.removeClass("open");
      $("body").removeClass("scroll-lock");
  }
}
/* Toast Layer Popup */
function modaltoast(e) {
  e.preventDefault();
  var $popToast = $(".pop-toast");
  var $toastCloseBtn = $(".pop-toast .btn-popup.close");
  var modalPop = $("#" + $(this).attr("data-modal"));
  // 이전에 열려있던 팝업을 닫기
  $(".pop-toast.open-modal").removeClass("open-modal");

  setTimeout(function(){
          modalPop.addClass("open-modal");
      }, 100);
  $toastCloseBtn.on("click", modalToastClose); 
  //토스트레이어 닫기
  function modalToastClose() {
      var $popToast = $(".pop-toast");
      $popToast.removeClass("full");
      setTimeout(function(){
          $popToast.removeClass("open-modal");
      }, 100);
      setTimeout(function(){
        $(".hide-con").hide();
    }, 800);
  }
  popTouchAction();
}
/* Touch Event */
function popTouchAction() {
  var startY;
  var endY;
  var $popToast = $(".pop-toast");
  $(".pop-header, .equipment-info, .company-profile").on("touchstart", function(event){
      startY = event.originalEvent.touches[0].clientY;
      console.log(startY);
  });

  $(".pop-header, .equipment-info, .company-profile").on("touchend", function(event){
      endY = event.originalEvent.changedTouches[0].clientY;
      if (startY > endY) {
          // 위로 터치했을 때
          $popToast.addClass("full");
          $(".hide-con").slideDown();
          
      } else if(endY > startY) {
          // 아래로 터치했을 때
          $popToast.removeClass("full");
          $(".hide-con").slideUp();
      }
  });
}