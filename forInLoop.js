const likes= {

    eating : "junk",
    playing : "soccer" ,
    singing : "melodies" ,
    coding : "python"
    
    };
    
    console.log(Object.keys(likes));
    console.log(Object.values(likes));

    for(let hates in likes){
      
        console.log(likes[hates]);

    }