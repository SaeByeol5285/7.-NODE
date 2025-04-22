let list = ["apple", "banana", "kiwi", "orange", "blueberry", "pear"]
// 결과 : newList = ["apple", "banana", "orange", "blueberry"]

// 콜백함수를 이용해서 5글자 이상인 데이터만 리턴돼서 들어가도록
// test함수와 getFruit함수 완성하기

let newList = test(list, getFruit);

function getFruit(list){
    let fruitList = [];
    for(let i=0; i<list.length; i++){
        if(list[i].length >= 5){
            fruitList.push(list[i]);
        }
    }
    return fruitList;
}

function test (list, callback){
    return callback(list);
}

console.log(newList);



