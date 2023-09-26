const sampleInput = require('./data.json');

function makeQuery(input) {
    // Sort the input intervals based on the start key
    const sortedInput = input.sort((a, b) => a.key[0] - b.key[0]);

    // Build a binary search tree from the sorted intervals
    const bst = buildBST(sortedInput);

    // Return the query function
    return function query(key) {
        let node = bst;
        while (node) {
            if (key < node.key[0]) {
                node = node.left;
            } else if (key >= node.key[1]) {
                node = node.right;
            } else {
                return node.val;
            }
        }
        return undefined;
    };
}

// Helper function to build a binary search tree from sorted intervals
function buildBST(intervals) {
    if (intervals.length === 0) {
        return null;
    }

    const mid = Math.floor(intervals.length / 2);
    const node = {
        key: intervals[mid].key,
        val: intervals[mid].val,
        left: buildBST(intervals.slice(0, mid)),
        right: buildBST(intervals.slice(mid + 1))
    };

    return node;
}

query=makeQuery(sampleInput);

// Measure execution time
const startTime = performance.now();
query(2097152);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Execution time: ${executionTime} milliseconds`);

// 0.050 - 0.068
