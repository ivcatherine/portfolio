function largest() {
    let numbers = Array.from(arguments);
    function compareFn(a,b) {
        return a - b;
    }
    numbers.sort(compareFn);
    return numbers[numbers.length-1];
}

function smallest() {
    let numbers = Array.from(arguments);
    function compareFn(a,b) {
        return a - b;
    }
    numbers.sort(compareFn);
    return numbers[0];
}
console.log(largest(-3.5, 7.25, 2, 381, 54));
console.log(smallest(-3.5, 7.25, 2, 381, 54));
