// class Person {
//     constructor(private name: string) {}
// }
// const max = new Person('Oleh')


// const btn = document.querySelector('btn')!
// btn.addEventListener('click', () => {
//     console.log('Btn clicked!');
// })


// const btn = document.querySelector('btn')
// if (btn) {
//     btn.addEventListener('click', () => {
//         console.log('Btn clicked!');
//     })
// }


// const btn = document.querySelector('btn')!
// btn?.addEventListener('click', () => {
//     console.log('Btn clicked!');
// })


// class Person {
//     constructor(private name: string) {}
// }
// const max = new Person('Oleh')
// const btn = document.querySelector('btn')
// if (btn) {
//     btn.addEventListener('click', () => {
//         console.log('Btn clicked!');
//     })
// }

class Person {
    constructor(private name: string) {}
}
const max = new Person('Oleh')
const btn = document.querySelector('btn')!
btn.addEventListener('click', () => {
    console.log('Btn1 clicked!')
})



// =======
let anyFlag
const globalVar = 'Message'
function logInfo(data: string, _?: number) {
    // const message = 'String'
    console.log(data)
    anyFlag = true
    console.log(anyFlag)
}
console.log('I am log string');

function multiple(a: number, b: number) {
    if (a && b) {
        return a * b
    }
    return 0
}