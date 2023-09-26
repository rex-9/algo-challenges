const sampleInput = require('./data.json');

class IntervalTreeNode {
    constructor(start, end, val) {
        this.start = start;
        this.end = end;
        this.val = val;
        this.maxEnd = end;
        this.left = null;
        this.right = null;
    }
}

function buildIntervalTree(intervals) {
    if (intervals.length === 0) {
        return null;
    }

    const sortedIntervals = intervals.sort((a, b) => a.key[0] - b.key[0]);
    const root = buildIntervalTreeHelper(sortedIntervals, 0, sortedIntervals.length - 1);
    return root;
}

function buildIntervalTreeHelper(intervals, start, end) {
    if (start > end) {
        return null;
    }

    const mid = Math.floor((start + end) / 2);
    const interval = intervals[mid];
    const node = new IntervalTreeNode(interval.key[0], interval.key[1], interval.val);

    node.left = buildIntervalTreeHelper(intervals, start, mid - 1);
    node.right = buildIntervalTreeHelper(intervals, mid + 1, end);

    if (node.left) {
        node.maxEnd = Math.max(node.maxEnd, node.left.maxEnd);
    }
    if (node.right) {
        node.maxEnd = Math.max(node.maxEnd, node.right.maxEnd);
    }

    return node;
}

function queryIntervalTree(node, key) {
    if (!node) {
        return undefined;
    }

    if (key < node.start) {
        return queryIntervalTree(node.left, key);
    } else if (key >= node.end) {
        return queryIntervalTree(node.right, key);
    } else {
        return node.val;
    }
}

function makeQuery(input) {
    const intervalTree = buildIntervalTree(input);

    return function query(key) {
        return queryIntervalTree(intervalTree, key);
    };
}

query=makeQuery(sampleInput);

// Measure execution time
const startTime = performance.now();
query(2097152);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Execution time: ${executionTime} milliseconds`);

// 0.080 - 0.111
