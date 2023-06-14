const btnMetro = document.querySelectorAll("#metro nav a");
const boxMetro = document.querySelectorAll("#metro section");
// let go = [a, b, c, d];
// console.log(go);
console.log(btnMetro);
btnMetro.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        //반복을 돌면서 기존에 있던 btnMetro의 on클래스를 없애줍니다
        for (let el of btnMetro) el.classList.remove("on");
        //그리고 클릭한 순번의 btnMetro에 on을 붙여줍니다
        btnMetro[index].classList.add("on");
        //반복을 돌면서 기존에 있던 boxMetro의 on클래스를 없애줍니다
        for (let el of boxMetro) el.classList.remove("on");
        //그리고 클릭한 순번의 boxMetro에 on을 붙여줍니다
        boxMetro[index].classList.add("on");

        // // active클래스를 반복을 돌면서 모두 없애고
        // for (let el of boxMetro) el.classList.remove("active");
        // //해당 순번에 active를 붙여줍니다
        // boxMetro[index].classList.add("active");


        // 문제점 : 동시에 on, active 클래스가 붙으면서 active의 효과가 보이지 않습니다
        //즉 active효과가 끝난 시점으로만 보이는것
        //해결하려면 비동기적으로 on클래스 이후 active클래스를 활성화 해야 합니다

        setTimeout(() => {
            for (let el of boxMetro) el.classList.remove("active");
            boxMetro[index].classList.add("active");
        }, 0);

        /*
    setTimeout은 0초 후에 콜백함수를 비동기적으로 실행합니다
    이를 통해서 이전 작업(위에 4줄의 코드)를 마치고
    UI업데이트가 다 완료된 후에 setTimeout의 함수가 실행됩니다
        */

    })
})
// console.log("안");
// console.log("녕");
// console.log("하");
// setTimeout(() => { console.log("반갑습니다") }, 0);
// console.log("세");
// console.log("요");