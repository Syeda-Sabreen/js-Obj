const myFirstObj = {
    name: "merry",
    hobbies: ["eating", "sleeping", "coding"],
    hello: function(){
    
        console.log("hello!!");
    }
    };
    console.log(myFirstObj);
    console.log(myFirstObj.name);
    myFirstObj.hello();

    const sendJSON = JSON.stringify(myFirstObj);
    console.log(sendJSON);
    console.log(typeof sendJSON);
    console.log(sendJSON.name);
    
    const recieveJSON = JSON.parse(sendJSON);
    console.log(recieveJSON);
    console.log(typeof recieveJSON);
    console.log(recieveJSON.name);