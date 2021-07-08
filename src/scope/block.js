let demo = 'demo'

const fruits = () =>{
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruist3 = 'kiwi'

        console.log(fruits2)
        console.log(fruist3)
        console.log(demo)
    }

    console.log(fruits1)   
    ////console.log(fruits2) ERROR
    //console.log(fruist3) ERROR
}

fruits()

let x = 1;
{
    let x = 2;
    console.log(x) // 2
}

console.log(x) // 1



const anotherFunction = () =>{
    for (let i = 0; i<10;i++){
        setTimeout(()=>{
            console.log(i)
        },1000)
        
    }
}

anotherFunction()

const anotherFunction = () =>{
    for (var i = 0; i<10;i++){
        setTimeout(()=>{
            console.log(i)
        },1000)
        
    }
}

anotherFunction()