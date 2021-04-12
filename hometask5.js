// задача 1

let week = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
}
console.log('задача 1', week.monday);




// задача 2
const changeStructure = (obj) => {
    const keys = Object.keys(obj);
    const res = [];
    keys.forEach((i) => {
        res.push([i, obj[i]]);
    })
    return res;
};
console.log('задача 2', changeStructure({ a: 1, b: 2, c: 'test' }));

// задача 3

const inPlainobject = (obj) => {
    if (Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    } else {
        return true;
    }
};
console.log('задача 3', inPlainobject({ a: 1, b: 2, c: 'test' }));


// Задача 5
const objForCompare1 = {
    c: 1,
    n: 2,
    m: 3,
    v: 4
}
const objForCompare2 = {
    c: 5,
    u: 'age',
    m: 8,
    v: 4,
    r: 34
}




const checkIsObject = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    } else {
        for (let index = 0; index < obj2Keys.length; index++) {
            if (obj2Keys[index] !== obj1Keys[index]) {
                return false;
            }
        }
    }
    return true;
};
console.log('задача 5:', checkIsObject(objForCompare1, objForCompare2));



// задача 4 
const deleteProps = (obj, arrProps) => {
    if (Array.isArray(arrProps) && typeof obj === 'object')
        arrProps.forEach((element) => {
            delete obj[element];
        });
    return obj;
};
console.log('задача 4:', deleteProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));



// задача 6

const objIsCompare1 = {
    c: 1,
    n: 2,
    m: 3,
    v: 4,
    r: 34

}
const objIsCompare2 = {
    c: 5,
    u: 'age',
    m: 8,
    v: 4,
    r: 34
}



const compareIsObject = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    const res = {};
    for (let index = 0; index < obj2Keys.length; index++) {
        if (obj2Keys[index] === obj1Keys[index]) {
            res[index] = obj2Keys[index];
        }
    }
    return res;
};
console.log('задача 6:', compareIsObject(objIsCompare1, objIsCompare2));