// Basic
const country = "Bangladeshi"
console.log(country)

let rsName; //
rsName = 'BD' //reasign
rsName = 101
console.log(rsName)

function multiply(a : number,b : number){
    return a*b
}
console.log(multiply('10',20)) //showing error

let fruits = ['apple', 'banana','orange']
fruits.push(10) //showing error
console.log(fruits)

// Explicit and Union types

//normal veriable Type
let a : string
let b : number
let c : string | number | boolean; //c is a number or string

a = 'zidan'
b = 102
c = 'zidan' //OR
c = 102 //OR
c = true

console.log(a,b,c)

// array variable Type
let arrS : string[] = [] //string array define
let arrN : number[] = [] //number array define
let arr : (string | number | boolean | {})[] = [] //string or number or boolian or object

arrS.push('zayan')
arrN.push(103)
arr.push('zayan') //Or
arr.push(103) //Or
arr.push(false) //Or
arr.push({name:'Zohan', age : 5})

console.log(arrS,arrN,arr)

// Object variable Type
let o : object   //without structure
let ob : {      // with structure
    name: string,
    age: number,
    isAdult: boolean
}

ob = {   //asigned with follow structure
    name:'zannora',
    age:1,
    isAdult:false
}
o = {  //asigned Anything...
    name:'zannora',
    age:1,
    isAdult:false,
    obj:{
        m:1,
        n: ['hallow',100]
    }
}
o = [1,2,3] //object type but alw array

console.log(o,ob)


//Dynamic Type

//normal veriable
let aa : any  //string,number,boolian type
//array
let arrr : any[] = [] //any type of arry
//object
let obj : {
    name: any,
    age: any,
    adult: any
}




// FUNCTION itself type , parameter type, return type

//itself type
let f : Function

f = () => {
    console.log('hallo Func')
}
f()

// parameter type
let func = (a : string, b : number, c : string = 'Optinal parameter') => {
    console.log(`HALLOW ${a} and ${b} optional : ${c}`)
}
func('maruf',104)
func('maruf',104,'BUBT')

// return type
let funcR = (a : number, b : number) : number => {
    return a+b
}
console.log(funcR(10,10)+100)



// Type Aliase

type strOrNum = string | number
type userType = {name:string; age:number;}

const useDetails = (id:strOrNum, user:userType) => {
    console.log(`User id Is ${id}, name is ${user.name} and age is ${user.age}`)
}
const user = (user:userType) => {
    console.log(`name : ${user.name} age : ${user.age} `)
}

const userId = 101
const sampleUser: userType = { name: "Alice", age: 25 };
user(sampleUser)
useDetails(userId,sampleUser)
