let arr = [1, true, "JavaScript"]

function printArr(value, index, array) {
    console.log("arr[" + index + "] = " + value);
}

arr.forEach(printArr)