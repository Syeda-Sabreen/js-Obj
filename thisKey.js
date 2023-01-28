const myObj = {
    name : "merry",
    age : 8,
    hobbies: ["eat", "sleep", "repeat"],
    likes: {
    
    morning : "Coffee" ,
    evening : "tea"
    },
    action: function(){
    
        return "Time for ${this.name}";
    }
    
    
    };
    //console.log(myObj.hobbies[2]);
    //console.log(myObj);
    console.log(myObj.action());