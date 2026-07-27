// const box = document.getElementById("div1")
// const maindiv = document.getElementById("maindiv")


// box.addEventListener("click", ()=>{
//     console.log("box-1");
// },true)


// maindiv.addEventListener("click", ()=>{
//     console.log("main div");
// },true)

// document.body.addEventListener("click" , ()=>{
//     console.log("body tag");
// },true)

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const items = document.getElementsByClassName("item");

// box1.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log("hello box-1")
// })

for (let item of items) {

    item.addEventListener('dragstart', (e) => {
            let data = e.target
        box2.addEventListener('dragover', (e) => {
            e.stopPropagation();
            e.preventDefault();
        })
        box2.addEventListener("drop", () => {
            box2.append(data)
            data=''
        })

        box1.addEventListener('dragover', (e) => {
            e.stopPropagation();
            e.preventDefault();
        })
        box1.addEventListener("drop", () => {
            box1.append(data)
            data=''
        })
    })

}