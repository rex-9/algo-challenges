const sampleInput = require('./data.json');

// Interval Tree Node Class Definition
class IntervalTreeNode {
    constructor(start, end, value) {
        this.start = start;
        this.end = end;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Interval Tree Class Definition
class IntervalTree {
    constructor() {
        this.root = null;
    }

    // Insert an interval into the tree
    insert(start, end, value) {
        this.root = this._insertNode(this.root, start, end, value);
    }

    _insertNode(node, start, end, value) {
        if (!node) {
            return new IntervalTreeNode(start, end, value);
        }

        if (start < node.start) {
            node.left = this._insertNode(node.left, start, end, value);
        } else {
            node.right = this._insertNode(node.right, start, end, value);
        }

        return node;
    }

    // Find the value for a given key within the intervals
    find(key) {
        return this._findValue(this.root, key);
    }

    _findValue(node, key) {
        if (!node) {
        return undefined;
        }

        if (key >= node.start && key < node.end) {
        return node.value;
        }

        if (key < node.start) {
        return this._findValue(node.left, key);
        }

        return this._findValue(node.right, key);
    }
}

// Make Query
function makeQuery(input) {
    const intervalTree = new IntervalTree();

    // Preprocess the input data and build the Interval Tree
    for (const item of input) {
        const start = item.key[0];
        const end = item.key[1];
        const value = item.val;
        intervalTree.insert(start, end, value);
    }

    // Return the query function for efficient lookup using Interval Tree
    return key => intervalTree.find(key);
}

query=makeQuery(sampleInput);

// Measure execution time
const startTime = performance.now();
query(2097152);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Execution time: ${executionTime} milliseconds`);

// 0.097 - 0.12
