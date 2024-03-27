const header = document.querySelector('header');
const footer = document.querySelector('footer');
const index = 'index'; // URL경로에서 매칭되는 텍스트

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


console.log(location.pathname); // URL의 경로 나타냄

if(location.pathname.match(index)){ // index변수값과 비교되는 텍스트가 있다면 true
  IndexLayout();
}else{
  SubLaytou();
} 