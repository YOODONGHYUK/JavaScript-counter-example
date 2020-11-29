const number = document.getElementById('number'); //id가 있을때
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
//const buttons = document.querySelectorAll('button');// id가 없을때, 쿼리셀럭터로 태그이름으로 탐색, 버튼은 increase, decrease 2개
//const [increase, decrease] = buttons; //increase, decrease를 buttons에서 추출

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id)

increase.onclick = () => {
    const current = parseInt(number.innerText, 10); // 문자열을 숫자로 변환한다, 몇진수로
    number.innerText = current + 1;
    //console.log('increase 가 클릭됨');
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
    //console.log('decrease 가 클릭됨');

}