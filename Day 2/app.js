let todo = [];

let req = prompt("Please enter your request: ");

while(true){
    if(req == "quit"){
        console.log("Quiting app.");
        break;
    }
    if(req == "list"){
        console.log("-------------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------------");
    }
    if(req == "add"){
        let task = prompt("Enter the task you want to add: ");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        
    }
}