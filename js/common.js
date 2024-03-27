
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

