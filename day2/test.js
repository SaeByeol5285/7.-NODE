let list = [1,5,4,8,6]
// 1.리스트에서 5이상의 숫자만 따로 떼서 newList 변수에 저장하기
// 2. 리스트의 각 값들에 2를 곱해서 newList2변수에 저장하기

// let newList = []; 

// for(let i=0; i<list.length; i++){
//     if(list[i]>=5){
//         newList.push(list[i]);
//     }
// }


// filter api 함수
// 콜백함수의 조건을 만족할 경우, 값을 push해준다.
let newList = list.filter(function (x) {
    return x >= 5;
});
console.log(newList);

// map api 함수 이용
// 화살표, 익명 함수 두 가지 형태로

// let newList2 = [];
// for(let i=0; i<list.length; i++){
//     newList2.push(list[i]*2);
// }

// let newList2 = list.map(x => x*2);
let newList2 = list.map(function (x){
    return x*2;
})

console.log(newList2);
