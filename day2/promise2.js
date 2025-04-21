function delay(time){
    return new Promise((resolve) => {
        setTimeout(function(){ //이런식으로 해야 resolve()가 바로 실행되지 않고, time이후에 실행 가능함
            resolve(time); //setTimeout(reslove,2000)과 같은 형태임
        }, time)
    });
}

delay(1000)
    //문제 : 초(1,3,5)는 동적으로 처리
    .then((paramTime) => {
        console.log("A : " + paramTime/1000 + "초 뒤 실행"); // A : 1초 뒤 실행
        return delay(3000);
    })
    //delay 실행하면 promise객체가 생기니까 => 또 then가능
    .then((paramTime)=>{
        console.log("B : " + paramTime/1000 + "초 뒤 실행"); // B : 3초 뒤 실행
        return delay(5000);
    })
    .then((paramTime)=>{
        console.log("C : " + paramTime/1000 + "초 뒤 실행"); // C : 5초 뒤 실행
    })

