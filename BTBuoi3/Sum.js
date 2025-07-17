let n=10
function Sum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i+=2) {
        sum += i;
    }
    return sum;
}
console.log(`${Sum(n)}`);