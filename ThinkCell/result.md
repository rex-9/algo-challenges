### Given Code

- Code: `function makeQuery(input) {
    return (key) => (input.find(item =>
        key >= item.key[0] && key < item.key[1]
    ))?.val;
}`

- Performance: 0.057 - 0.061 ms

### Trying Out Multiple Solutions

### Using Interval Tree - Slower

- Code:

`// Interval Tree Node Class Definition
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

}`

- Performance: 0.093 - 0.12 ms

### Using Binary Search Tree - Slow

- Code:

`function makeQuery(input) {
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

}`

- Performance: 0.087 - 0.094 ms

### Using For Loop instead of Find Method - Faster

- Code:

`function makeQuery(input) {
    return (key) => {
        for (let i = 0; i < input.length; i++) {
            if (key >= input[i].key[0] && key < input[i].key[1]) {
                return input[i].val;
            }
        }
        return undefined;
    };
}`

- Performance: 0.048 - 0.051 ms

### Conclusion

- After trying out multiple solutions including the ones presented above, I find the one with just a simple `For Loop` produces the faster query than the given solution. It's approximately 0.01 ms faster. The performance is measured with the `performance.now()` method using the big data input that think-cell has provided. I believe that's still not the best answer and can be improved. But during the available time I have used, that's what I've found out. I am willing and passionate to learn more and more better solutions than I could think of today. And I deeply appreciate think-cell for giving me such a wonderful assignment. It opened my eyes a lot and made me realize that there are still a lot of things I can learn about. I will be very pleased if I can learn more and more throughout the interview process of think-cell.

- May the peace and success be with think-cell along your journey.
