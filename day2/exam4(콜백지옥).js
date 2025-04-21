// console.log("111");
// setTimeout(function(){
//     console.log("222")
// }, 1000);
// console.log("333");

// A라는 문자를 실행 후 1초 뒤에 출력
// A 출력 후 1초 뒤에 B 출력
// B 출력 후 2초 뒤에 C 출력
// C 출력 후 3초 뒤에 D 출력

setTimeout(function(){
    console.log("A");
    setTimeout(function(){
        console.log("B");
        setTimeout(function(){
            console.log("C");
            setTimeout(function(){
                console.log("D");   
            },3000);   
        },1000);   
    },1000);   
},1000);