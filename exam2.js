function test(){
    console.log("Hello js")
}
console.log(test)
// setTimeout(test(), 2000); //undefined 뜬다.
setTimeout(test, 2000); //2초 뒤에 콜백
