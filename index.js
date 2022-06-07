let writeCards = (arr, ev) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++ ) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${ev} gift!`)
    }
    return newArr;
}

let countDown = (num) => {
    while(num >= 0) {
        console.log(num)
        num--
    }
}

countDown(5);