let url = "https://catfact.ninja/fact2"; 

async function fetchDataAndPrint(url){
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log('There was a problem with the fetch operation:', error);
        throw error;
    }
}

async function getFacts(){
    try{
        await fetchDataAndPrint(url);
        await fetchDataAndPrint(url);
        await fetchDataAndPrint(url);
    }catch(error){
        console.log(error);
    }
}

getFacts();