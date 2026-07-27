// const button = document.getElementById("btn");
// // console.log(button);

// // button.onclick = () => {
// //     console.log("hello world");
// // }

// // button.ondblclick = () =>{
// //     console.log("This is double click");
// // }

// button.addEventListener("click", function HELLO(){
//     console.log("hello brother");
// })
// console.log(body)

// button.addEventListener('click',()=>{
    //     // alert("background color is changing right now");
    
    //     const ischange = confirm("color change ?")
    //     if(ischange)
    //     {
    //     const colorname = prompt("which color do you want");
    //     body.style.backgroundColor= `${colorname}`;
    //     }
    // })
    // button.addEventListener('dblclick',()=>{
        //     body.style.backgroundColor="white";
        // })
        
        
// const body = document.getElementById('body');
// const submit = document.getElementById("submit");
// const colorname = document.getElementById("colorname")

// submit.addEventListener("click",(e)=>{
//     e.preventDefault();
//     body.style.backgroundColor=`${colorname.value}`;
//     console.log(colorname.value);


// })


const button = document.getElementById("btn");

function random(number){
    const value = Math.random()
    console.log(value);
    return Math.floor(value*(number+1))
}


button.addEventListener("click", ()=> {
    const rndClr = `rgb(${random(255)} ${random(255)} ${random(255)})`
    document.body.style.backgroundColor = rndClr;
    // document.body.style.backgroundColor = "#050a62"
})