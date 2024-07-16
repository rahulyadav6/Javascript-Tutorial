let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",()=>{
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    // delBtn.addEventListener("click", ()=>{
    //     let par = delBtn.parentElement;
    //     par.remove();
    // })

    item.appendChild(delBtn);
    ul.appendChild(item);
    
    inp.value = "";
})

inp.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        let item = document.createElement("li");
        item.innerText = inp.value;

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");

        ul.appendChild(item);
        item.appendChild(delBtn);

        inp.value = "";
    }
})

ul.addEventListener("click", (event)=>{
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;

        console.log(listItem);
        listItem.remove();
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(let delBtn of delBtns){
//     delBtn.addEventListener("click",()=>{
//         let par = delBtn.parentElement;
//         par.remove();
//     })
// }