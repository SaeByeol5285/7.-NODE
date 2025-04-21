function test(){
    console.log("test함수");
}

// test()를 실행하고 return이 없어서 undefined가 뜬다.
let func = test();
console.log(func); 

// test함수 자체를 보내주기
let func2 = test;
console.log(func2)
// test()의 값과 func2의 값은 동일하다.
func2();