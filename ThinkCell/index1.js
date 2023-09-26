const sampleInput = require('./data.json');

function makeQuery(input) {
    return (key) => {
        for (let i = 0; i < input.length; i++) {
            if (key >= input[i].key[0] && key < input[i].key[1]) {
                return input[i].val;
            }
        }
        return undefined;
    };
}

const query = makeQuery(sampleInput);

// Measure execution time
const startTime = performance.now();
query(2097152);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Execution time: ${executionTime} milliseconds`);

// 0.048 - 0.051
