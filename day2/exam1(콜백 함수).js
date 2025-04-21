function test(x){
    console.log(x);
}

// 1. 문자열
test("안녕");
// 2. 숫자
test(1);
// 3. 리스트
test([1,2,3,4,5]);
// 4. 함수도 파라미터로 보낼 수 있다! => callback함수 1단계
test(function(){});

// javascript에서는 변수에 함수 넣는 것이 가능하다
// vs java는 불가능함.
let func = function(){
    console.log("변수에 넣은 함수");
}
// 미리 만들어둔 함수를 변수에 넣을 수 있다.
let func2 = test;
func();