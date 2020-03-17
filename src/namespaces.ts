// type FormType = 'inline' | 'block'
// type FormState = 'active' | 'disabled'

// interface FormInfo {
//     type: FormType
//     state: FormState
// }

// class MyForm {
//     private type: FormType = 'inline'
//     private state: FormState = 'active'

//     constructor(public email: string) {
//     }

//     getInfo() {
//         return {
//             type: this.type,
//             state: this.state
//         }
//     }
// }
// const myForm = new MyForm('test@gmail.com')
// console.log(myForm)





/// <reference path="./form-namespace.ts" />
namespace IForm {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {
        }

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    // const myForm = new MyForm('test@gmail.com')
    // console.log(myForm)
    export const myForm = new MyForm('test@gmail.com')
}
console.log(IForm.myForm)