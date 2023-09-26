const sampleInput = require('./data.json');

function makeQuery(input) {
    return (key) => (input.find(item =>
        key >= item.key[0] && key < item.key[1]
    ))?.val;
}

const query = makeQuery(sampleInput);

// Measure execution time
const startTime = performance.now();
query(2097152);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Execution time: ${executionTime} milliseconds`);

// 0.057 - 0.061