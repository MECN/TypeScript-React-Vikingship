//布尔类型
let isDone: boolean = false
//数字类型
let age: number = 20
// 二进制,es6二进制用0b开头(零b)
let binaryNumber: number = 0b1111
console.log(0b1111===15);

//string类型
let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`

//undefined类型和null类型
let u: undefined = undefined
let n: null = null
//undefined和null是所有类型的子类型,所以下面不会报错
let num: number = undefined
let num2:string=null
//任意类型
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

// notSure.myName
// notSure.getName()

let numberOrString: number | string = 234//类型与
numberOrString = 'abc'

let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)

function test() {
  console.log(arguments)
}

let user: [string, number] = ['viking', 1]
