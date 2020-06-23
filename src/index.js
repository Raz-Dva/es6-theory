import $ from 'jquery'
// ----------- CONST ---------------
// we can change the values inside the array and the object
//  but the entities themselves cannot be changed
// możemy zmienić wartości wewnątrz tablicy i obiektu, ale samych Bytów nie można zmienić
const arr_const = [1, 1, 3];
const obj_const = {
    a: 0,
    b: 2
}
arr_const[1] = 2;
obj_const.a = 1;
// console.log(arr_const);
// console.log(obj_const);

// ----------- LET ---------------
// jeśli używasz let  będzie błąd
v = 1;
var v;
// console.log(v)

// let widoczna tylko w zakresie lokalnym
let forVar = () => {
    for (var i = 0; i < 4; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}
let forLet = () => {
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                console.log(i)
            }, 1000);
        }
    }
    //forVar();
    //forLet();


// ----------- destructuring ---------------
let arrNum = [1, 2, 3, 4];
let arrStr = [
    ['f', 'x'],
    ['v']
];
let names = ['Bob', 'Jhon', 'Jimm'];
const [bob, ...others] = names;
// console.log(others)
const [
    [letF, letX],
    [letV, letR = 'R']
] = arrStr;
const [aNum, bNum, cNum, dNum] = arrNum;
// console.log(aNum, bNum, cNum, dNum);
// console.log(aNum)
// console.log(letF, letX, letV, letR)

// let colors = {
//     red: '#FF0000',
//     rovalblue: '#FF0000',
//     sienna: '#A0522D'
// }
let colors = ['red', 'rovalblue'];

let dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
}
const res = Object.entries(dict).
filter(([, hex]) => hex === 'squeak').map(([key, ]) => key)
    // let [key1] = colors;
    // console.log(key1);
    // console.log(res);

const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [20, 3]
    }
}
const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape;
// console.log(startX, startY, endX, endY)

// ----------- FUNCTION ---------------
let arrow = (num1, num2 = 10) => num1 + num2;
let arrow1 = num1 => 1 + num1;
// console.log(arrow(2))
// console.log(arrow1(2))

let objThis = {
    name: 'WTF',
    // logName: () => console.log(this)
    // logName: function() {
    //     setTimeout(function() {
    //         console.log(this)     // this = object windows 
    //     }, 1000);
    // }
    logName: function() {
        setTimeout(() => {
            console.log(this.name)
        }, 1000);
    }
};
// objThis.logName();

// ----------- OBJECTS ARRAYS---------------

let objCar = (fildName, fildModel) => {
    return {
        color: 'red',
        [fildName + fildModel]: 'Volvo'
    }
}
let car = objCar('car-', 'model')
    // console.log(car);

// let model= car.model  ==  let {model} = car        let color=car.color; let info=car.info;   ==    let {color, info}=car
//let c =car.color   == let {color: c}=car 

// ----------- Rest - Spread ---------------

let arrA = [1, 2, 3];
let [first, , third, fourth = 109] = arrA;
// console.log(fourth)

function logStr(n, ...args) { //rest
    // console.log(args)
};
logStr(11, arrA);
logStr(1, 2, 3) // return array [1,2,3]
logStr() //return []

let maxNum = Math.max(...arrA); //spred
// console.log(maxNum)

let shallowCopy = [...arrA];
// console.log(shallowCopy);


const defObj = {
    host: 'localhost',
    user: 'Jhon',
    connection: false
};
const opts = {
    user: 'admin',
    password: 'utopia'
};
const port = 8080;
const resObj = {
    ...defObj,
    ...opts,
    port,
    connectFun() {
        defObj.connection = true
    }
};
resObj.connectFun();
// console.log(defObj.connection)
// console.log(resObj)

// ----------- CLASSES ---------------
class Car {
    constructor(type) {
            this.type = type;
            this.color = 'red';
        }
        // static
    logCar() {
        // console.log(`Vehicle Type - ${this.type}`)
    }
}

let carObj = new Car('hatchback');
carObj.logCar();

class BMW extends Car {
    constructor(x) {
        super(x); //super(x)   ===   constructor(type) 
        this.color = 'blue';
    }
    logInfo() { //logInfo() === super.logCar()
        super.logCar()
    }
}

let bmw = new BMW('sedan');
bmw.logCar()


// ----------- set WeakSet ---------------
let s = new Set([1, 2, 3]);
// console.log(s)

let s1 = new Set().add(2).add('str')
    // console.log(s1);
s1.delete('str')
    // console.log(s1);
    // s1.clear();
    // console.log(s1);
let data = { name: 'a' };
s1.add(data);
let a = [...s1]
    // console.log(a)
data = null;
// console.log(s1);
// console.log(s1.size);



let visitedSet = new WeakSet();
let john = { name: "John" };
let pete = { name: "Pete" };
visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
john = null;
// console.log(visitedSet)


// ----------- map WeakMap ---------------
// let map = new Map();
// map.set('name', 'WTF');
// let objMap = {};
// map.set(objMap, 'objMap');
// // console.log(map.has('name'));
// map.delete(objMap);
// // console.log(map);
// // console.log(map.get('name'));

let map1 = new Map([
    ['name', 'WTF'],
    ['age', 25],
    ['type', 'data']
]);
// // console.log(map1)
// for (let vl of map1.values()) {
//     // console.log(vl)
// }

// for (let vl of map1.keys()) {
//     // console.log(vl)
// }

for (let entr of map1.entries()) {
    // console.log(`${entr[0]} - ${entr[1]}`)
    // console.log(entr)

}

let weakMap = new WeakMap();
let x1 = {};
let y1 = {}
weakMap.set(x1, 'key');
weakMap.set(y1, 'keyWeak')
    // console.log(weakMap);
x1 = null;
// console.log(weakMap);

// ----------- import ---------------
// import * as extra from '../data'
// import { width as q } from '../data'
import { q, d } from '../data'
// console.log(q, d)

// import { height, width } from '../data'
// console.log(height + width)
// console.log(extra)



// ----------- SYMBOL ---------------
let sym = Symbol('WTF'),
    sym1 = Symbol('1'),
    sym2 = Symbol('1');
// console.log(sym1 === sym2);

let objSym = {
        // sym: 'Symbol',
        [sym]: 'Symbol',
        [sym1]: 'Symbol1'
    }
    // console.log(objSym[sym]);
    // console.log(Object.getOwnPropertyNames(objSym));
    // console.log(Object.getOwnPropertySymbols(objSym));

if (sym in objSym) {
    // console.log('yes')
}
let symStr = sym.toString(); //symbol to string
let strSym = String(sym1); //symbol to string
// console.log(Reflect.ownKeys(objSym));
// console.log(symStr);
// console.log(strSym);

let symbolFor1 = Symbol.for('string');
let symbolFor2 = Symbol.for('string');
// console.log(symbolFor1 === symbolFor2); //true

// Symbol.unscopables

// ----------- NEW METHODS  ---------------
// ----------- assign  ---------------
let objExt = {
    a: 1,
    b: 2
};
let objExt1 = {
    c: 3
};
Object.assign(objExt, objExt1); // extend objExt
let objExt2 = Object.assign({}, objExt, objExt1); //new object
// console.log(objExt)
// console.log(objExt2)

// ----------- find  ---------------
// let arrFinded = [1, 5, 7, 9].find(x => x < 7); //1
let arrFinded = [1, 5, 7, 9, 10].find(x => x > 7); //9
// console.log(arrFinded);

// ----------- repeat  ---------------
let strHello = 'Hello!';
// console.log(strHello.repeat(3)) //Hello!Hello!Hello!

// ----------- startsWith  ---------------
// console.log(strHello.startsWith('Hel')) // true
// console.log(strHello.startsWith('el', 1)) // true
// console.log(strHello.startsWith('Hel', 1)) // false

// ----------- includes ---------------
// console.log(strHello.includes('llo', 2));

// ----------- PROMISES  ---------------

let promiseAjax = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://date.jsontest.com/',
        dataType: 'json',
        success: function(response) {
            resolve(response)
        },
        error: function(error) {
            reject(error)
        }
    })
});
promiseAjax
    .then((data) => {
        // console.log('Success: ', data);
        return data.date
    })
    .then((date) => {
        // console.log('Date: ', date);
    })
    .catch((error) => {
        console.info('Info errorаанеа: ', error)
    })

// -----------  END ---------------