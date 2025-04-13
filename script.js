// ========================== masala 1 =========================

function seriyaName(arr) {
    let copyArr = Array.from(arr);
    let result = [];
    let nestedArr = []
    
    let firstIndex = 0;
    let lastIndex = 1;
    
    while (copyArr.length !== 0) {
        while (lastIndex < copyArr.length && copyArr[firstIndex] === copyArr[lastIndex]) {
            firstIndex += 1
            lastIndex += 1
        }
        nestedArr.push(copyArr.slice(0, lastIndex))
        copyArr = copyArr.length !== lastIndex ? copyArr.slice(lastIndex , copyArr.length) : [];
        firstIndex = 0;
        lastIndex = 1;
    }

    for(let i = 0; i < nestedArr.length; i++) {
        let nameAdd = [...nestedArr].sort((a,b) => b.length-a.length)[0]
        if(nestedArr[i].length !== nameAdd.length) {
            result.push(nestedArr[i])
        } else {    
            nameAdd.unshift('Asliddin')
            nameAdd.push('Norboyev')
            result.push(nameAdd)
        }
    }
    return result.flat()
}

const arr1 = [10, 0, 3, 3, 0, 1, 1, 1,-10]
console.log('1-masala javobi:', seriyaName(arr1))

// ========================== masala 2 =========================

function filterNumbers(arr) {
    let filtered = {
        musbat: [],
        manfiy: [],
    };
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            filtered.manfiy.push(arr[i])
        } else {
            filtered.musbat.push(arr[i])
        }
    }
    return filtered
}

const arr2 = [123, 12, -3, 45, -890, 23, -90]
console.log('2-masala javobi:', filterNumbers(arr2))

// ========================== masala 3 =========================

function monotonicGap(arr) {
    let copyArr = Array.from(arr);
    let result = 0;
    
    while (copyArr.length != 0) {
        if(copyArr[0] <= copyArr[1]) {
            let firstIndex = 0;
            let lastIndex = 1;
            while (copyArr[firstIndex] <= copyArr[lastIndex]) {
                firstIndex += 1
                lastIndex += 1
            }
            result++
            copyArr = copyArr.length != lastIndex ? copyArr.slice(lastIndex - 1, copyArr.length) : []
        } 
        if(copyArr[0] > copyArr[1]) {
            let firstIndex = 0;
            let lastIndex = 1;
            while (copyArr[firstIndex] >= copyArr[lastIndex]) {
                firstIndex += 1
                lastIndex += 1
            }
            result++
            copyArr = copyArr.length != lastIndex ? copyArr.slice(lastIndex - 1, copyArr.length) : []
        }
    }
    return result
}

const arr3 = [-1, 2, 5, 1, -1, 3, 6, 9, 0]
console.log('3-masala javobi:', monotonicGap(arr3))


// ========================== masala 4 =========================

function tupleKetmaKetlik(arr) {
    let copyArr = Array.from(arr);
    let result = 0;
    
    for(let i = 0; i < arr.length; i++) {
        let secondEl = i + 1;
        if ( Math.abs(arr[i] - arr[secondEl]) % 2 == 0) {
            result = secondEl
            break
        } 
    }
    
    return result
}

const arr4 = [1, 4, 5, 4, 1, 4, 1, 90]
console.log('4-masala javobi:', tupleKetmaKetlik(arr4))

