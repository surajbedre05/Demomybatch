let p = new promise((resolve,reject) => {
    let a = 10;
    if(a<=10){
        resolve("success");
    }
    else{
        reject("fail");
    }
})

p.then((message) => {
    console.log("this is from then block" + message)
}).catch((message) =>{
    console.log("this is from catch block" + message)
})