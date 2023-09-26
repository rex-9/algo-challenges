const sampleInput = require('./data.json');

// function makeQuery(input) {
//     const intervalMap = new Map();

//     // Preprocess the input intervals and store them in the intervalMap
//     for (const item of input) {
//         for (let i = item.key[0]; i < item.key[1]; i++) {
//         intervalMap.set(i, item.val);
//         }
//     }

//     // Return the query function
//     return key => intervalMap.get(key) || undefined;
// }

function makeQuery(input) {
    const intervalMap = new Map();

    for (const item of input) {
        // Start and end points for this interval
        const start = item.key[0];
        const end = item.key[1];

        // Populate the map with values for all integers in the interval
        for (let i = start; i < end; i++) {
        intervalMap.set(i, item.val);
        }
    }

    return key => intervalMap.get(key) || undefined;
}

query=makeQuery(sampleInput);

// Measure execution time
const startTime = performance.now();
query(2097152);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Execution time: ${executionTime} milliseconds`);
