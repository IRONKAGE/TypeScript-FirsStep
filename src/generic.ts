// const cars1: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi']

// const cars3: Array = ['Ford', 'Audi']
// const a = new Array(2)


// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 2000)
// })
// promise.then(data => {
//     console.log(data.toLowerCase().trim().toLowerCase())
// })



// const promise = new Promise<number>(resolve => {
//     setTimeout(() => {
//         resolve(33)
//     }, 2000)
// })
// promise.then(data => {
//     console.log(data.toFixed())
// })


// const promise: Promise<number> = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(33)
//     }, 2000)
// })
// promise.then(data => {
//     console.log(data.toFixed())
// })



// function mergeObjects(a: object, b: object) {
//     return Object.assign({}, a, b)
// }
// const merged = mergeObjects({name: 'Oleh'}, {age: 26})
// console.log(merged)


// function mergeObjects<T, R>(a: T, b: R): T & R {
//     return Object.assign({}, a, b)
// }
// const merged = mergeObjects({name: 'Oleh'}, {age: 26})
// const merged2 = mergeObjects({model: 'BMW'}, {year: 2020})


// function mergeObjects<T, R>(a: T, b: R) {
//     return Object.assign({}, a, b)
// }
// const merged1 = mergeObjects({name: 'Oleh'}, {age: 26})
// const merged2 = mergeObjects({model: 'BMW'}, {year: 2020})

// const merged3 = mergeObjects('aaa', 'bbb')
// console.log(merged3)


// function mergeObjects<T extends object, R extends object>(a: T, b: R) {
//     return Object.assign({}, a, b)
// }
// const merged1 = mergeObjects({name: 'Oleh'}, {age: 26})
// const merged2 = mergeObjects({model: 'BMW'}, {year: 2020})

// const merged3 = mergeObjects('aaa', 'bbb')
// const merged4 = mergeObjects({a: 1}, 'bbb')



// interface ILength {
//     length: number
// }
// function withCount<T extends ILength>(value: T): {value: T, count: string} {
//     return {
//         value, //те саме як: `value: value`
//         count: `В цьому об'єкті ${value.length} символів`
//     }
// }
// console.log(withCount('Привіт TypeScript'))
// console.log(withCount(['I', 'A`m', 'Array']))
// // console.log(withCount(20))
// console.log(withCount({length: 20}))



// ===============
// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) { // function getObjectValue(obj: object, key: string)
//     return obj[key]
// }
// const person = {
//     name: 'Oleh',
//     age: 26
// }
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))


// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) { // function getObjectValue(obj: object, key: string)
//     return obj[key]
// }
// const person = {
//     name: 'Oleh',
//     age: 26,
//     job: 'Developer'
// }
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))



// ===============
// class Collection {
//     private _items: any[]

//     add(item) {
//         this._items.push(item)
//     }

//     remove(item) {
//         this._items = this._items.filter(i => i !== item)
//     }

//     get items() {
//         return this._items
//     }
// }


// class Collection<T> {
//     constructor(private _items: T[] = []) {} //або `private _items: T[] = []`

//     add(item: T) {
//         this._items.push(item)
//     }

//     remove(item: T) {
//         this._items = this._items.filter(i => i !== item)
//     }

//     get items(): T[] {
//         return this._items
//     }
// }


// const string = new Collection(['I', 'Am', 'String'])
// string.add('!')
// string.remove('Am')
// console.log(string.items)


// const number = new Collection<number>([1, 2, 3])
// number.add(2)
// number.remove(3)
// console.log(number.items)


// const objs = new Collection([{a: 1}, {b: 2}])
// objs.remove({b: 2})
// console.log(objs.items)





// class Collection<T extends number | string | boolean> {
//     constructor(private _items: T[] = []) {}

//     add(item: T) {
//         this._items.push(item)
//     }

//     remove(item: T) {
//         this._items = this._items.filter(i => i !== item)
//     }

//     get items(): T[] {
//         return this._items
//     }
// }
// const string = new Collection<string>(['I', 'Am', 'String'])
// string.add('!')
// string.remove('Am')
// console.log(string.items)





// ===============
interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}
    if (model.length > 3) {
        car.model = model
    }
    if (year > 2000) {
        car.year = year
    }
    return car as Car
}



/// ===============
// const cars: Array<string> = ['Ford', 'Audi']
// cars.shift()

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift()
// cars[1]


const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}


// ford.model = 'Ferrari'