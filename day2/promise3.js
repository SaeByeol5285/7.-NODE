function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
}

//await : 그 줄이 끝날 때까지 다음으로 넘어가지 말라는 뜻

async function run() {
    await delay(1000);
    console.log("A");
    await delay(1000);
    console.log("B");
    await delay(1000);
    console.log("C");
    await delay(1000);
    console.log("D");
}

run();