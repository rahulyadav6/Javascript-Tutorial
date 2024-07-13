let url = "https://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    console.log(colleges);
})
async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(err){
        console.log("error: ",err);
        return [];
    }
}