let url = "https://catfact.ninja/fact"; 
// fetch(url)


//handling promises(in this case api response) using .then.catch methods

// fetch(url)
// .then((response)=>{
//     // console.log(response);
//     response.json()
//     .then((data)=>{
//         console.log(data);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })



//handling promises(in this case api response) using async await keywords

async function demo(){
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }catch(err){
        console.error("There was a problem with a fetch operation", error);
    }

}

demo();
