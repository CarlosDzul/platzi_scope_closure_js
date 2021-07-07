
//**Local Scope 3/12 */

const helloWorld = () =>{
    const hello = 'Hello'
    console.log(hello)
}

helloWorld();
console.log(hello)

var scope = 'I am global';

const functionScope = () =>{
    var scope = 'I am local';

    const func = () =>{
        return scope;
    }
    console.log(func())

}

functionScope();
console.log(scope)


