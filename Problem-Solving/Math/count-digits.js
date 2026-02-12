function CountDigit(x) {
    let y = x;
    let count = 0;
    while (y > 0) {
        y = Math.floor(y / 10);
        count++;
    }
    const output = `Digit count for ${x} is ${count}`;
    console.log('>>> output', output);
    return output;
}

console.log(CountDigit(2376));