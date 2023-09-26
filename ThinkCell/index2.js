const sampleInput = require('./data.json');

function makeQuery(input) {
    // Sort the input intervals based on the start key
    const sortedInput = input.sort((a, b) => a.key[0] - b.key[0]);

    // Build a binary search tree from the sorted intervals
    const bst = buildBST(sortedInput);

    // Return the query function
    return function query(key) {
        return searchBST(bst, key);
    };
}

// Helper function to build a binary search tree from sorted intervals
function buildBST(intervals) {
    if (intervals.length === 0) {
        return null;
    }

    const mid = Math.floor(intervals.length / 2);
    const root = intervals[mid];

    root.left = buildBST(intervals.slice(0, mid));
    root.right = buildBST(intervals.slice(mid + 1));

    return root;
}

// Helper function to search the binary search tree for a given key
function searchBST(node, key) {
    if (!node) {
        return undefined;
    }

    if (key < node.key[0]) {
        return searchBST(node.left, key);
    } else if (key >= node.key[1]) {
        return searchBST(node.right, key);
    } else {
        return node.val;
    }
}

const query = makeQuery(sampleInput);

// Measure execution time
const startTime = performance.now();
query(2097152);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Execution time: ${executionTime} milliseconds`);

// 0.087 - 0.094
