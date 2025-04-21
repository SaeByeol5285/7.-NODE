function test() {
    console.log("테스트함수")
    //함수를 리턴할 수 있다.
    return function(){
        console.log("테스트함수222")
    }
}

//문제1. 이 형태로 "테스트함수222"출력해보기
setTimeout(test(), 2000);


function calculator(kind) {
    return function (x, y) {
        if (kind == "add") {
            return x + y
        } else if (kind == "minus") {
            return x - y
        }
    }
}

// 맵 안에 key:value 형태로 함수를 담을 수 있다.
function calculator(kind){
    calc = {
        "add" : (x,y) => x + y,
        "minus" : (x,y) => x - y,
    }
    return calc[kind];
}


//문제2. 숫자 2개 입력받아서 더해주는 함수 리턴
let addFunc = calculator("add");
//문제3. 숫자 2개 입력받아서 뺄셈하는 함수 리턴
let minusFunc = calculator("minus");

console.log(addFunc(5,4))
console.log(minusFunc(5,4))