
const anotherFunction = () =>{
    for (var i = 0; i<100000;i++){
        setTimeout(()=>{
            console.log(i)
        },50)
        
    }
}

anotherFunction()