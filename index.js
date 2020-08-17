let world = "Hello world!";

// world = "Hello world2!";
//定数
const a = "aaaaaa";

let lst = ["one", "two"];
console.log(lst);

//loop

// let index = 0;
// while(index< lst.length){
//     console.log(lst[index])
//     index++;
// }

const test = (x) => {
    if(lst.length >= x){
        console.log("aho");
    }else{
        console.log("baka");
}
};

//test(2);

const ohno = {
    color: "blue",
    perfume: "mint",
    size: "small",
}
//console.log(ohno);
//console.log(window);

//window と document と event というオブジェクトは覚える!!
//window.alert("Hello world");

console.log(document.getElementsByTagName("button"));

document.getElementsByTagName("button")[0].addEventListener("click", () =>{
    window.alert("Hello world!")
})
