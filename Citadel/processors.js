power = [4, 1, 1, 1, 2]

function getMaximumPower(power) {
    // Write your code here
    power.sort((a, b) => b - a);
    for (let i = 0; i < power.length; i++)
        {
            power = power.filter(number => number !== power[i] - 1);
        }
    const sum = power.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log('power', power)
    return sum;
}

console.log(getMaximumPower(power));